export class Student {
    constructor(public firstname? : string,public lastname? :string){}

    printName(){
        return `${this.firstname} ${this.lastname}`.trim()
    }
}
