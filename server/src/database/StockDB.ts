import { NumberLiteralType } from "typescript";
import { Product } from "../models/Product";
import { BaseDatabase } from "./DB";
import { TABLE_STOCK } from "./TABLE_NAMES";


export class StockDB extends BaseDatabase{
    public async getStockItems(){
        const result:Product[] = await BaseDatabase.connection(TABLE_STOCK).select()
        return result
    }
    
    public async setNewQty(id:number, qty:number){
        let product = await BaseDatabase.connection(TABLE_STOCK)
        .select()
        .where({id})

        const oldQty:number = product[0].qty_stock
        const newQty = oldQty - qty

        await BaseDatabase.connection(TABLE_STOCK)
        .update({qty_stock:newQty})
        .where({id})

    }
    
}