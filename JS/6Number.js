const num=100.78;
const table=new Number(2);
console.log(table);
console.log(typeof(table))

// new concept to use the toLocaleString
console.log(table.toLocaleString('hi-IN',{
    style:"currency",
    currency:"INR"
}));

// used in the pricing of products on ecommerce website
console.log(num.toFixed(3));
console.log(num.toPrecision(3));

/************************************    math ***************** */
// interview question 
// to produce random id in the application . eg product id.
console.log(Math.random());
console.log(Math.floor(Math.random()*10+1));
const min=10;
const max=20
console.log(Math.floor(Math.random()*(max-min))+min);