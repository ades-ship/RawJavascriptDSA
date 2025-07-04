
// filters.
const books=[
    {name:"one book",
        publish:1980,
        edition:2000,
        genre:"history"
    },
    {name:"two book",
        publish:1990,
        edition:2008,
        genre:"history"
    },
    {name:"three book",
        publish:1990,
        edition:2005,
        genre:"political"
    },
    {name:"four book",
        publish:1988,
        edition:2001,
        genre:"geo"
    },
]

let res=books.filter((book)=>( book.genre==="history"))
console.log(res);

let res1=[]
books.map((book)=>{
    if(book.genre==="history"){
        res1.push(book);
    }
}

)
console.log("map result : ",res1);
console.log(res1);

const numbers=[1,2,3,4,5];

let result=numbers.map((n)=> n+10)
console.log(result);

let result1=numbers.forEach((n)=> console.log(n+10))

