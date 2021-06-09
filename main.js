"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hello Again!";
/**
 * Error: Cannot redeclare block-scoped variable 'message'.ts(2451)
main.js(1, 5): 'message' was also declared here.

Reason: This occurs because the file is considered a script instead of a module

script: shares global scope
module: own scope

to handle this error, add an export statement at the top.
due to the export statement, TS treats the file as a module instead of script
 */
console.log(message);
/**
 * tsc main --watch
 * this command runs the watch mode, compiler watches the ts file for changes and automatically updates the js file
 */
/**
 * three main types: boolean, number, string
 * other: null, undefined ==> sub-types, can be assigned to basic types
 */
var isBeginner = true;
var name = "Parnika";
var count = 0;
var n = null;
var u = undefined;
isBeginner = null;
count = undefined;
/**
* Template string : can have multiple lines and expressions
*/
var sentence = "My name is " + name + ".\nI am a beginner in TS.";
console.log(sentence);
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
//the above two syntaxes are same
/**
 * if the array has elements of different types, TS has tuple types.
 * In this case, the number of elements in the array are fixed and the order of values has to match the order of types
 */
var arr = ["Hi", 123];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c); // 2 since enum starts from 0 by default
var City;
(function (City) {
    City[City["Cincinnati"] = 4] = "Cincinnati";
    City[City["New York"] = 5] = "New York";
    City[City["Chicago"] = 6] = "Chicago";
})(City || (City = {}));
var city = City.Chicago;
console.log(city); //6
/**
 * any type: allows re-assigning different types of values, useful when using third-party libraries and dynamic user inputs
 * most capabale type, encompasses every type in TS, doesn't force to do any checking while assigning, calling or using any properties
 *
 */
var randomValue = 10;
randomValue = true;
randomValue = "Hello";
var value = 10;
//  value.name
//  value.toUpperCase()
//  value = 100
//  value()
//no error detected by intellisense in any of these due to the any type, prone to errors, instead use the unknown type
var value1 = 10;
//  value1.name
//  value1.toUpperCase()
//  value1()
// all the three statements throw error
// (value1 as string).toUpperCase() //type assertion
//we can also write custom functions to check if a proprty exists
value1 = {
    name: "PN"
};
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(value1))
    console.log(value1.name);
/**
 * Type inference: TS infers the type based on the value assigned during initialization
 */
var a;
a = 10;
a = true;
// just like JS, here we can assign different types of values to a and TS won't show an error
var b = 100; // now that we have assigned a value here, we can't re-assign any other type to b
// b=true ==> error
/**
 * Union of Types: instead of using any, we can use a union of types to restrict the type when the value is not in our control
 */
var multiType;
multiType = 20;
multiType = true;
/**
 * Functions
 */
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(5, 3));
// Optional Parameters, value is undefined by default, first parameter can't be optional
// Default parameters have a set value instead of undefined
function add2(n1, n2) {
    if (n1 === void 0) { n1 = 100; }
    if (n2)
        return n1 + n2;
    else
        return n1;
}
console.log(add2()); //100
// Functions with objects as parameters
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Parnika",
    lastName: "Nevaskar"
};
fullName(p);
function personName(person) {
    console.log(person.firstName + " " + person.lastName);
}
personName(p);
/**
 * Classes
 */
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Welcome " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("Parnika");
console.log(emp1.employeeName);
emp1.greet();
/**
 * Class based Inheritance
 */
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log(this.employeeName + " is delegating work..");
    };
    return Manager;
}(Employee));
var manager = new Manager("Stan");
manager.delegateWork();
manager.greet();
console.log(manager.employeeName);
/**
 * Access Modifiers: public, private, protected
 * by default, class members are public
 * private can't be accessed outside the class, is not inherited by derived class
 * protected can be used in derived class but not outside base and derived class
 */ 
