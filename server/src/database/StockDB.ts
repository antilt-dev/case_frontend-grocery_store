import { Product } from "../models/Product";
import { BaseDatabase } from "./DB";
import { TABLE_STOCK } from "./TABLE_NAMES";


export class StockDB extends BaseDatabase{
    public async getStockItems(){
        const result:Product[] = await BaseDatabase.connection(TABLE_STOCK).select()
        return result
    }
    public async getStockItemById(){
        const result:Product[] = await BaseDatabase.connection(TABLE_STOCK).select()
        return result
    }

    public async setNewQty(id:number){

    }
    
}