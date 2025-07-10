
// document.getElementById('parent').addEventListener('click',function(e){
//     if(e.target.matches('.child')){
//         console.log("child clicked")
//     }

// })

//  ques1.
// const counterDisplay=document.getElementById('counter');
// const increase=document.getElementById("increase");
// const decrease=document.getElementById("decrease");
// const reset=document.getElementById("reset");


// let count=0;

// increase.onclick=()=>{
//     count++;
//     counterDisplay.textContent=count;
// }

// decrease.onclick=()=>{
//     count--;
//     counterDisplay.textContent=count;
// }

// reset.onclick=()=>{
//     count=0;
//     counterDisplay.textContent=count;
// }

// que2
// most important interview questions
// event propagation :

  // 1. event capturing 
  // 
  // 2.event bubbling ;

  document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log("google clicked");
  })

//   ques4
  document.getElementById("images").addEventListener('click',function(e){
    console.log(e.target.tagName==='IMG')
    if(e.target.tagName==='IMG'){
        console.log(e.target.id);
        e.target.parentNode.remove();
    }
    // console.log(e.target.childNode());
  })