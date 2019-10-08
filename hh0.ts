/*
 * @Author: 胡海
 * @Date: 2019-10-08 22:39:11
 * @LastEditors: 胡海
 * @LastEditTime: 2019-10-08 23:24:50
 * @Description: 
 */
class User {
    firstName:string
    lastName:string
    fullName:string
    constructor(firstName:string,lastName:string){
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = firstName + lastName
    }
}
interface Person{
    firstName:string,
    lastName:string,
}
function greeter(per:Person){
    return 'hello ' + per.firstName + per.lastName
}

let user = new User('胡海','小雪')

console.log(greeter(user))