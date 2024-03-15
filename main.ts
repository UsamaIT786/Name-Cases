//lowercase
let personname: String="Usama Muzammil";
console.log("lowercase" , personname.toLowerCase());

//uppercase
console.log("uppercase" , personname.toLocaleUpperCase());

//titlecase
console.log("titlecase" , personname.replace(/\bw/g,c => c.toUpperCase));