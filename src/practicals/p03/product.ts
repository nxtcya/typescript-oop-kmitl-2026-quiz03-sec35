export class Product {

    public readonly name:string|undefined;
    protected price:number;
    
    constructor(name?:string,price?:number){
        this.name = name 
        this.price = price ?? 0;
    }

    getPrice(){
        return this.price
    }
    setPrice(price:number){
        if(price < 0) return;
        this.price = price;
    }
    static readonly DISCOUNT_PERCENT:number = 10


}

