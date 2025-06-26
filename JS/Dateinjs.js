const date=new Date();
console.log(date.toLocaleString());
console.log(date.toString());
console.log(date.toDateString())
console.log(typeof date);
console.log("get month",date.getMonth()+1)

// let myCreatetDate=new Date(2025,6,12);
// let myCreatetDate=new Date(2025,6,12,5,3);
// let myCreatetDate=new Date('2025-02-12');
// let myCreatetDate=new Date("26-05-2025");
// console.log("creted date",myCreatetDate);


// interview question
// date.now gives time in milisecond elapsed since midnight jan1,1970
let newDate= Date.now();
console.log(date.getDay());


console.log(date.toLocaleString('default',{
    weekday:"long"
}))