import { Request,Response } from "express"


export const testConnection = async (req:Request,res:Response) =>{
    let statusCode = 500
    try{
        statusCode = 200
        res.status(statusCode).send("Ok!")
    }catch(error:any){
        res.status(statusCode).send(error.message)
    }
}