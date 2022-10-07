import { Request,Response } from "express"
import { StockDB } from "../database/StockDB"
import { Product } from "../models/Product"


export const getProducts = async (req:Request,res:Response) =>{
    let statusCode = 500
    try{
        const stockDB = new StockDB()
        const result:Product[] = await stockDB.getStockItems()
        statusCode = 200
        res.status(statusCode).send(result)
    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
}