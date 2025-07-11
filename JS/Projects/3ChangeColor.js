
const start=document.getElementById("start");
const stop=document.getElementById("stop");
console.log(start);
document.body.style.backgroundColor="yellow";


function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// hex values are : #FFFFFF  , #000000 

let intervalId;
const startChangingColor=()=>{
    if(!intervalId){
        intervalId=setInterval(()=>{
             document.body.style.backgroundColor=getRandomHexColor();
         },1000);
    }
    console.log("inside change backgrd")
}

const stopChangingColor=()=>{
    clearInterval(intervalId);
    intervalId=null;
    console.log(clearInterval(intervalId))
    console.log("stopped");
}

const chgbck=start.addEventListener('click',startChangingColor);
stop.addEventListener('click',stopChangingColor)

console.log(chgbck)