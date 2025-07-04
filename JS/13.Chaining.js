const number=[1,2,3,4,5];

let result=number.map((n)=>{
    return n*10;

})
.map(n=>(n+1))
.filter(n=> n>25);
console.log(result);

// reduce.


// to calculate total prices of all items in the cart.

const num=[1,2,3,4,5];
let total=0;
const result2=num.reduce((acc,currvalue)=>{
    console.log(`acc is ${acc} value is ${currvalue}`);
    return acc+currvalue;
},total)  
console.log(result2);

const shoppingcart=[
    {
        courseNmae:"advanced java",
        price:"5000"

    },
    {
      courseNmae:" cpp",
        price:"5000"
    },
    {
      courseNmae:" data science",
        price:"10000"
    }
]

const tottalprice=shoppingcart.reduce((acc,value)=>{
    console.log(`acc value  is ${acc} value is ${value.price}`)
    return acc+parseInt(value.price);
},0)
console.log(tottalprice);