export {}
let message = "Hello Again!" 
/**
 * Error: Cannot redeclare block-scoped variable 'message'.ts(2451)
main.js(1, 5): 'message' was also declared here.

Reason: This occurs because the file is considered a script instead of a module

script: shares global scope
module: own scope

to handle this error, add an export statement at the top. 
due to the export statement, TS treats the file as a module instead of script
 */
console.log(message)

/**
 * tsc main --watch
 * this command runs the watch mode, compiler watches the ts file for changes and automatically updates the js file
 */

/**
 * three main types: boolean, number, string
 * other: null, undefined ==> sub-types, can be assigned to basic types
 */
 let isBeginner : boolean = true
 let name: string = "Parnika"
 let count : number = 0

 let n:null = null
 let u:undefined = undefined 

 isBeginner = null
 count = undefined

 /**
 * Template string : can have multiple lines and expressions
 */

 let sentence : string = `My name is ${name}.
I am a beginner in TS.`

 console.log(sentence)


 let numbers:number[] = [1,2,3]
 let numbers2:Array<number> = [1,2,3]

 //the above two syntaxes are same

 /**
  * if the array has elements of different types, TS has tuple types. 
  * In this case, the number of elements in the array are fixed and the order of values has to match the order of types
  */

 let arr: [string, number] = ["Hi", 123]

 enum Color {Red, Green, Blue}

 let c: Color = Color.Blue
 console.log(c) // 2 since enum starts from 0 by default

 enum City {"Cincinnati" = 4, "New York", "Chicago"}
 let city:City = City.Chicago
 console.log(city) //6

 /**
  * any type: allows re-assigning different types of values, useful when using third-party libraries and dynamic user inputs
  * most capabale type, encompasses every type in TS, doesn't force to do any checking while assigning, calling or using any properties
  * 
  */

 let randomValue : any = 10
 randomValue = true
 randomValue = "Hello"

 let value : any = 10;
//  value.name
//  value.toUpperCase()
//  value = 100
//  value()

 //no error detected by intellisense in any of these due to the any type, prone to errors, instead use the unknown type


 let value1 : unknown = 10;
//  value1.name
//  value1.toUpperCase()
//  value1()

// all the three statements throw error

// (value1 as string).toUpperCase() //type assertion

//we can also write custom functions to check if a proprty exists

value1 = {
    name:"PN"
}

function hasName (obj:any) : obj is {name: string} {
    return !!obj &&
            typeof obj === "object" &&
            "name" in obj
}

if(hasName(value1)) console.log(value1.name)

/**
 * Type inference: TS infers the type based on the value assigned during initialization
 */

let a;
a = 10;
a= true;

// just like JS, here we can assign different types of values to a and TS won't show an error

let b=100; // now that we have assigned a value here, we can't re-assign any other type to b
// b=true ==> error

/**
 * Union of Types: instead of using any, we can use a union of types to restrict the type when the value is not in our control 
 */
let multiType : number | boolean
multiType = 20
multiType = true

/**
 * Functions
 */

function add(n1 : number, n2 : number) : number{
    return n1+n2;
}

console.log(add(5,3))

// Optional Parameters, value is undefined by default, first parameter can't be optional
// Default parameters have a set value instead of undefined

function add2(n1 : number = 100, n2? : number) : number{
    if(n2)
        return n1+n2;
    else 
        return n1
}

console.log(add2()) //100

// Functions with objects as parameters

function fullName (person: {firstName: string, lastName: string}){
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: "Parnika",
    lastName: "Nevaskar"
}

fullName(p)

// This approach is not feasible when there are several properties in the object, hence interfaces are a better approach

/**
 * Interfaces: we can create an interface of the person object and use that as type of function parameter
 */

interface Person{
    firstName:string,
    lastName:string // adding a ? would make the property optional
}

function personName (person:Person){
    console.log(`${person.firstName} ${person.lastName}`)
}

personName(p)

/**
 * Classes
 */

class Employee {
    employeeName : string

    constructor(name:string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Welcome ${this.employeeName}`)
    }
}

let emp1 = new Employee("Parnika");
console.log(emp1.employeeName)
emp1.greet();

/**
 * Class based Inheritance
 */

class Manager extends Employee {
    constructor(managerName:string){
        super(managerName)
    }

    delegateWork(){
        console.log(`${this.employeeName} is delegating work..`)
    }
}

let manager = new Manager("Stan");
manager.delegateWork();
manager.greet();
console.log(manager.employeeName)

/**
 * Access Modifiers: public, private, protected
 * by default, class members are public
 * private can't be accessed outside the class, is not inherited by derived class
 * protected can be used in derived class but not outside base and derived class
 */