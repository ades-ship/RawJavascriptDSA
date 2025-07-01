
// object literals
const employee={
    first:"adesh",
    last:"sengar",
    doj:"07-07-2024",
    "designation":"sp",

}

console.log(employee);
console.log(employee.designation)
console.log(employee["designation"])
// employee[jobLevel]="jl5";
// create new key: value pair.
employee.jobLevel="jl5"
console.log(employee)

employee.greeting=function(){
    console.log("hello world");
}

employee.greetTwo=function(){
    console.log(`name is ${this.first}`);
}
employee.greeting();
employee.greetTwo();

// interview ques
// create key using symbol.

const mySym= Symbol("passedOut");
const college={
    name:"geu",
    place:"dehradun",
    [mySym]:"2024",
    active:false
}
console.log(college[mySym])
console.log(typeof mySym)

college.greetingTwo=function(){
    console.log(`name is ${this.name} and place is ${this.place}`)
}
console.log(college)

console.log(college.greetingTwo());


/************************************* some more property of object ****************** */
const obj1={
    name:"adesh",
    profession:"swe",
    company:"infosys"
}
const obj2={
    name:"tanuj",
    profession:"swe",
    company:"infy"
}

const obj3={...obj1,obj2};
// console.log(obj3);

const obj4=Object.assign({},obj1,obj2);
console.log(obj4);


const tinderUser={}
tinderUser.email="adeshsengar156@gmail.com"
tinderUser.name="adesh"
tinderUser.phno="453485"

console.log(tinderUser)
console.log(tinderUser["email"])


const friends=[
    {id:Math.floor(Math.random()),
        name:"tanuj"
    },
     {id:Math.floor(Math.random()),
        name:"ankit"
    },
     {id:Math.floor(Math.random()),
        name:"jaison"
    },
]
// console.log(friends)
// console.log(friends[1].id)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(friends));

console.log(typeof(Object.entries(friends)))

const course={
    courseName:"js",
    duration:"6month",
    instrutor:"adesh"
}

// object destructuring 
const{courseName}=course;
console.log(courseName);