import { BaseDatabase } from "./db";
import { TABLE_PURCHASES } from "./TABLE_NAMES";
import {v4 as idGen} from 'uuid'

export class PurchaseDB extends BaseDatabase{
    public async createPurchase(
        id:string,
        name:string,
        date:string
        ){
        await BaseDatabase.connection(TABLE_PURCHASES)
        .insert({
            id,
            name,
            delivery_date:date
        })
    }
}