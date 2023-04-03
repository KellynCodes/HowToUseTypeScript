"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//CLASSESS
var Person = /** @class */ (function () {
    function Person(id, name, age) {
        //"private": class simply means that you can only access the value initiated with private keyword whithin the class which it is initiated;
        //"protected": class  simply means that you can only acces the value initiated with protected class within the class it is inititated or class that is extended with the class it is initiated;
        //"public": class simply means you can access it from any where and that is good as leaving it with not initiator.
        this.id = id;
        this.name = name;
        this.age = age;
        //this keyword simply means this class we are in;
    }
    //adding method to class;
    Person.prototype.register = function () {
        return "".concat(this.name, " is now A registered User, because his age is ").concat(this.age, " Years which met our prefered age for the Job");
    };
    return Person;
}());
exports.default = Person;
