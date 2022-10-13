import { Product } from "../models/Product";
import { BaseDatabase } from "./db";
import { TABLE_STOCK } from "./TABLE_NAMES";


export class StockDB extends BaseDatabase{
    public async getStockItems(){
        const result:Product[] = await BaseDatabase.connection(TABLE_STOCK).select()
        return result
    }
    
    public async setNewQty(
        id:number, 
        quantity:number
        ){
        const product = await BaseDatabase.connection(TABLE_STOCK)
        .select()
        .where({id})

        const oldQty:number = product[0].qty_stock
        
        const newQty = oldQty - quantity

        await BaseDatabase.connection(TABLE_STOCK)
        .update({qty_stock:newQty})
        .where({id})
    }
    
    public async getById(id:number){
        const result = await BaseDatabase.connection(TABLE_STOCK)
        .select()
        .where({id})

        return result
    }
    
    
}