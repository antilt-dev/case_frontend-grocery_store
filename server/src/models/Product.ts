export class Product{
    constructor(
        private id:number,
        private name:string,
        private price:number,
        private qty_stock:number
    ){

    }
    
    public getId(){
        return this.id
    }
    public getName(){
        return this.name
    }
    public getPrice(){
        return this.price
    }
    public getQtyStock(){
        return this.qty_stock
    }
}