import { Request,Response } from "express"
import { StockDB } from "../database/StockDB"
import { Product } from "../models/Product"


export const setNewQty = async (req:Request,res:Response) =>{
    let statusCode = 500
    try{
       
        statusCode = 200
        // res.status(statusCode).send(result)
    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
}