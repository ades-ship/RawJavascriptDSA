

// const changeMe=setTimeout(() => {
//     document.querySelector('h1').innerHTML="js series"
// }, 2000);

// document.querySelector("#stop").addEventListener('click',()=>{
//     clearTimeout(changeMe);
//     console.log("stooped");
// })


// webapi 2.
// let timer;
// function startTime(){
//     document.getElementById('output').innerHTML="timer started and message appear after 5 second";

//     timer=setTimeout(() => {
//         document.getElementById('output').innerHTML="timer finished.";
//     }, 2000);
// }

// function cancelTimer(){
//     console.log(timer);
//     clearTimeout(timer);
//     document.getElementById("output").innerHTML="stop timer before settimeout";
// }

// webapi 3.
let count=11;
let timerInterval;
const startCounter=()=>{
    
 timerInterval= setInterval(()=>{
     count--;
    if(count==0){
        stopCounter();
    }
   document.querySelector("#clock").innerHTML=count;
  },1000)
}

const stopCounter=()=>{
    console.log(timerInterval)
    clearInterval(timerInterval);
    timerInterval=null;
    console.log("timer countdown is stopped now...");
    alert("times up.....");
}
