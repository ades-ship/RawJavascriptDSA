
// document.getElementById('parent').addEventListener('click',function(e){
//     if(e.target.matches('.child')){
//         console.log("child clicked")
//     }

// })

const counterDisplay=document.getElementById('counter');
const increase=document.getElementById("increase");
const decrease=document.getElementById("decrease");
const reset=document.getElementById("reset");

let count=0;

increase.onclick=()=>{
    count++;
    counterDisplay.textContent=count;
}

decrease.onclick=()=>{
    count--;
    counterDisplay.textContent=count;
}

reset.onclick=()=>{
    count=0;
    counterDisplay.textContent=count;
}