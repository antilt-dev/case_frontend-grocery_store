import { PurchaseDB } from "../database/PurchasesDB"
import { SalesDB } from "../database/SalesDB"
import { Request, Response } from "express"
import {v4 as idGen} from 'uuid'
import { StockDB } from "../database/StockDB"
import { Sale } from "../models/Sale"
import { Product } from "../models/Product"


export const createPurchase = async (req:Request,res:Response) =>{
    let statusCode:number = 500
        const purchaseDB = new PurchaseDB()
        const salesDB = new SalesDB()
        const stockDB = new StockDB()

    try{
        
        const name:string = req.body.name as string
        const date:string = req.body.date as string
        const purchasedItems:Sale[] = req.body.purchasedItems
        const purchaseId = idGen()
        
        if(!name){
            statusCode = 412
            throw new Error('É necessário informar o nome do cliente.')
        }
        if(!date){
            statusCode = 412
            throw new Error('É necessário informar a data de entrega.')
        }
        if(purchasedItems.length < 1){
            statusCode = 412
            throw new Error('É necessário ter ao menos um item no carrinho.')
        }

        let checkedItems:Product[] = []

        for(let purchase of purchasedItems){
            const product:Product[] = await stockDB.getById(purchase.id)
            if(product.length >0){
                checkedItems = [...checkedItems,product[0]]
            }
        }
        
        if(checkedItems.length < purchasedItems.length){
            statusCode = 406
            throw new Error('Algum "id" fornecino não foi encontrado no estoque.')
        }
      
        let overBookItems:number[] = []

        for(let purchase of purchasedItems){
            const product = await stockDB.getById(purchase.id)
            const stock = product[0].qty_stock
            if(stock < purchase.quantity){
                overBookItems = [...overBookItems,purchase.id]
            }
        }
       
        if(overBookItems.length > 0){
            statusCode = 406
            throw new Error(`${overBookItems.length} ${overBookItems.length === 1?"item":"itens"} da sua compra não tem estoque suficiente para atender sua solicitação. Verificar ${overBookItems.length === 1?"o produto com o seguinte id":"os produtos com os seguintes ID's"}: ${overBookItems.toString().split(",").join("-")}`)
        }

        await purchaseDB.createPurchase(purchaseId,name,date)

        purchasedItems.map(async (item)=>{
            await stockDB.setNewQty(
                item.id,
                item.quantity
            )

            await salesDB.registerSale(
                purchaseId,
                item.id,
                item.quantity
            )
        })
       
        res.status(statusCode).send("Compra registrada com sucesso!")

    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
}