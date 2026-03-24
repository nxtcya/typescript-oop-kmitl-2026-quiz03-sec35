import { Product } from './product'

export class Playstation extends Product {
  
  // TODO: implement class properties, constructor with super(...), and methods
  constructor(name:string,price:number,public generation:number){
    super(name,price)
  }
  

  getProfile(){
    return `${this.name} Gen(${this.generation})`
  }
  getDiscountPrice(){
    return this.price - (this.price * Product.DISCOUNT_PERCENT /100 )

  }

}