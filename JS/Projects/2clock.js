
let clock=document.querySelector('.clock');
console.log(clock);

clock.addEventListener('click',()=>{
   setInterval(()=>{
    clock.innerHTML=(new Date()).toLocaleTimeString();
   },1000)

})