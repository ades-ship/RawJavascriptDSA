// let num=[1,2,3,"adesh"];
// console.log(num);

// array is the object 
// let newarr=new Array(1,2,3,"tanuj");
// console.log(newarr) 
// console.log(typeof newarr)

// dont do the changes inthe original array.
// let numbers=[1,2,3,4,5,6,7,8];
// console.log(numbers.slice(1,3))
// console.log(numbers)

// splice 
// interview question
// splice do the changes in the original array. by extracting or splice that portion from it.
// console.log(numbers.splice(1,3));
// console.log(numbers)

// let arr=[1,2,3,4,5,6];
// arrays methods
// console.log(arr.push([7,8]));
// console.log(arr)

// unshift : add the add in the front of the array.
// arr.unshift(-5);
// console.log(arr)

// shift : pop the element from the front of the array.
// arr.shift();
// console.log(arr);
// console.log(numbers.includes(5));
// console.log(numbers.includes(3,0));
// console.log(arr.join("-"))

let car=["oddi","ferrari","vitara"];
let model=["2025","2024",["3034","2045"]];

// console.log(car.push(model))
console.log(car)

// concatenation: return new array
console.log(car.concat(model));
console.log(car)

// interview ques
const vehicle=[...car,...model]
console.log(vehicle)

// inteview questions
// array.flat(infinity);  simply convert the array elements into single array
const anotherArr=[1.2,2,3,[2,3],[3,[6,7]]]
console.log(anotherArr.flat(Infinity)); 
console.log("original array",anotherArr);


console.log(Array.isArray("adesh"));

// interview : convert to arrayLike objects.
console.log(Array.from("adesh"));

console.log(Array.from({name:"tanuj"}));  // confused to make array bt key or value.


const score1=100;
const score2=200;
const score3=300;
// convert the variables to array object
console.log(Array.of(score1,score2,score3));