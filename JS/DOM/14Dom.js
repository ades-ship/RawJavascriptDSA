
'use strict'
// const heading=window.document.getElementById('heading');
// heading.style.backgroundColor="green";
// heading.style.padding="15px";

// console.log(heading.innerText);

// document.querySelector('.heading');

// document.querySelector('ul')


// one of the usecase is : let say updated data is coming form db , so it should be populated the latest value in the UI.


const parent=document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children[0].innerHTML);

for(let i=0; i<parent.children; i++){
    console.log("hello")
    console.log(parent.children[i].innerHTML)
}

// create element in the dom tree
const addDiv=(myContent,backgroundColor)=>{
    console.log("heelo add div")
const div=document.createElement('div');
console.log(div);
div.className="main";
div.id="myId";
div.setAttribute('title',"hi adesh");
// div.innerHTML="my content"
div.style.backgroundColor=backgroundColor
div.style.padding="15px";
const addtext=document.createTextNode(`${myContent}`);
div.appendChild(addtext);
document.body.appendChild(div);
}


const addLanguage=(lang)=>{
  const li= document.createElement('li');
   li.appendChild(document.createTextNode(`${lang}`));
   document.querySelector('.language').appendChild(li);

}

addLanguage("js");
addLanguage("java");
addLanguage("html");