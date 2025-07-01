
function loggedInUser(username="sam"
){
    return username? `${username} is logged in`:`enter the username`;
}
console.log(loggedInUser("adesh"))


const user={
    userName:"adesh",
    password:"123"
}
function authenticate(anyobject){
    return  anyobject.userName?    `user : ${anyobject.userName} is successfully logged in`:`authencation failed`;
}

console.log(authenticate({
    userName:"tanuj",
    password:"123",
}));

var accountNumber=null
var accountName=null
function createAccount(accountNumber,accountName){
      accountName=accountName;
       accountNumber=Math.random();
     return `account name: ${accountName} and accoutn no is ${accountNumber}`;

}

console.log(createAccount("2343","adeshsengar"));
console.log(accountName);
console.log(accountNumber)


// finterview question
// cant access arrow function before initialization.

// add(1,2);
// const add=(num1,num2)=>{
//    console.log("addition is: ",num1+num2)
// }


let bankDetails={
    accountNo:Math.random(),
    accountName:"adesh",
    branchCode:Math.floor(Math.random()),
    branchName:"kailora",
    Details:function(){
     console.log(`bank details is : ${this.accountNo} ${this.accountName}`);
     console.log(this);
    }
   
}
console.log(this);  // here this refer to the window object.
bankDetails.Details();


// interview question.
function chai(){
    let chaiName="elachi chai";
    console.log(this); // in the function we cant use this keyword, if it is used then it will global object
}
chai();

// arrow functoons

const chaiAurCode=()=> ({username:"adesh"})  // return object
console.log(chaiAurCode());


// iife (immediate invoked function expression)
// if the application get started then immediately we need to call the database connection.
// it prevent pollute of global variable into scoped (local) in the same file.

(()=>{
   console.log(`name is : `);
})();

(()=>{
   console.log(`name is : `);
})();