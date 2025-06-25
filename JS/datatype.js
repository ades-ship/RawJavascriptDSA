// primitive type :  String,number,boolean ,null, undefined,Symbol, bigInt.


//  non primitive type: array,objects,functions

const num=[1,2,3,4,5];

const myObj={
    name:"adesh",
    age:20,
}

const printDetails=function(){
    console.log("hello world");
}

console.log(typeof printDetails);

// interview question
let name=null;
console.log(typeof(name));

// interview question.
// in non primitive type , variables are of object type only and function is function object.