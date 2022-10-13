import { PurchaseDB } from "../database/PurchasesDB"
import { SalesDB } from "../database/salesDB"
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

        const checkItemsId:Sale[] = []

        purchasedItems.filter(async(item)=>{
            const checkStock:Product[] = await stockDB.getById(item.id)

            if(checkStock.length !== 0){
                checkItemsId.push(item)
            }
        })
      
        if(checkItemsId.length < purchasedItems.length){
            statusCode = 400
            throw new Error('Algum "id" fornecino não foi encontrado no estoque.')
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