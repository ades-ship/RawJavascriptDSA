// high order array .
let arr=[1,2,3,4,"adesh"];
for (const num1 of arr) {
    console.log(num1);
}

const greeting="hello sexy boy";
for (const greet of greeting) {
    console.log(`each character is ${greet}`)
}


// for of loop

const friends=new Map();
friends.set(1,"adesh");
friends.set(2,"tanuj");
friends.set(3,"arinjay");
for (const [key,value] of friends) {
        console.log(key,"->",value)
}

// for in loop

const obj={
    name:"adesh",
    college:"geu",

    place:"dehradun"
}

for (const key in obj) {
    console.log(`${key} -> ${obj[key]}`)
}

const grocery=['apple','banana','grapes'];
for (const key in grocery) {
    console.log(grocery[key])
}

// forEach loop
const sports=["cricket","footbal"];
sports.forEach((value,index)=>{
    console.log(index,"",value);
})


const products=[{
   name:"iphone",
   brand:"apple",
   price:"560000"
},{
   name:"samsung",
   brand:"apple",
   price:"560000"
}]

// products.forEach((product)=>{
//     console.log(product.name)
// })

// filter 
const nums=[1,2,3,4,5,6,7,8,9];
const result=nums.filter((num)=> (num>3))
console.log("result of filter ",result);

const newnums=[]
const result1=nums.forEach((num)=>{
    if(num>5){
        newnums.push(num);
    }
})
console.log(newnums)
