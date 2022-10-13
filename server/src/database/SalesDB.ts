import { BaseDatabase } from "./db";
import { TABLE_SALES } from "./TABLE_NAMES";

export class SalesDB extends BaseDatabase{
    public async registerSale(
        purchaseId:string,
        itemId:number,
        quantity:number
        ){
        await BaseDatabase.connection(TABLE_SALES)
        .insert({
            item_id:itemId,
            purchase_id:purchaseId,
            quantity
        })
    }
}