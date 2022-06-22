//It destruct the vaiable into array;
// const test = "i am barsha poudel";
// const array = test.split(' ');
// console.log(array);
// let [firsttest , secondtest] = array;
// console.log(firsttest);
// console.log(secondtest);

const person = {
    firstname: "mirisha",
    lastname: "poudel",
    age: "17"
}
let {firstname, lastname} = person
console.log(firstname);
console.log(lastname);
///another method 
let fname = "sanstuti";
let lname = "shrestha";

let obj1 = {
    fname,
    lname,
}
console.log(obj1);
