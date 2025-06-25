const name="adesh"
console.log(name);

const youtubeCount=10;
// interview question
// below console,log is the string interpolation concept.
console.log(`my name is ${name} and yt coutn is ${youtubeCount}`);

const lastName=new String("sengar");
console.log(lastName)

console.log(lastName.length)
console.log(lastName.charAt(3));
console.log(lastName.indexOf('r'));

// interview question
// substring can take negative start index but eventually it start from 0 index only.
const car="bmwOddy";
// console.log(car.substring(0,4));


//slice can take negative value as index and start from the reverse of the string to the end index.
const len=car.length;
console.log(car.slice(-3,6))

// trim : to remove the leading and trailing spaces.
let newStringOne="            adesh sengar    \n     ";
console.log(newStringOne.trimStart());


// replace
const url="https://zomato.com/about%20page";
console.log(url.replace("%20",'-'));
console.log(url.includes("zomato",2));

// split
const skinCare=new String("personal-touch skin");
console.log(skinCare.split('-'))



