import { Request,Response } from "express"
import { StockDB } from "../database/StockDB"
import { Product } from "../models/Product"


export const updateQuantitys = async (req:Request,res:Response) =>{
    let statusCode = 500
    try{
        const products:Product[] = req.body

        if(products.length < 1){
            statusCode = 422
            throw new Error("A compra deve ter ao menos 1 produto")
        }
        
        // const stockDB = new StockDB()

        statusCode = 200
        res.status(statusCode).send("")
    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
}