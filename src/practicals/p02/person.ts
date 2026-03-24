export class Person {
    constructor(public firstname? : string,public lastname? :string,public age? : number){}

    getFullName(){
        return `${this.firstname} ${this.lastname}`.trim()
    }
    setAge(age : number){
        if(age < 0) return;
        this.age = age
    }

    getAge(){
        return this.age;
    }

    static COUNTRY : string = 'Thailand'; // หากต้องการให้ COUNTRY เป็นของคลาส Person (ไม่ใช่ของ Object ใด Object หนึ่ง) ต้องใช้ Keyword ว่า static
}