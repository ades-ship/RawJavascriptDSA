// primitive type :  String,number,boolean ,null, undefined,Symbol, bigInt.


//  non primitive type: array,objects,functions

// const num=[1,2,3,4,5];

// const myObj={
//     name:"adesh",
//     age:20,
// }

// const printDetails=function(){
//     console.log("hello world");
// }

// console.log(typeof printDetails);

// interview question
// let name=null;
// console.log(typeof(name));

// interview question.
// in non primitive type , variables are of object type only and function is function object.


/**************   Memory concept ******************** */

// primitve type stores in (stack) and non-primitive type store in (heap)

// primitve type store the value or the copy of it.
let name="adesh";
let anotherName=name;
anotherName="tanuj";
console.log(anotherName);
console.log(name)




// non - primitive store the references not the value.
let friends=["adesh","tanuj","jaison"];
console.log(friends);
let copyFriends=friends;
console.log(copyFriends)
copyFriends[0]="adesh sengra";
console.log(friends)

const car={
     name:"bmw",
     model:"2025",
     engine:"bs6"
}
const car1=car;
console.log(car);
console.log(car1);
car1.name="skoda"
console.log(car1);
console.log(car)

