let name = "barsha";
let greeting = "hello"+' '+name;//normally we do this in strings but we cant make name dynamic here
console.log(greeting);
//in the case of string literals
let firstname = "kriti";
let greeting1 = `hello ${firstname}`;//dynamically value can be assighne in firstname 
console.log(greeting1);

let Firstname = "mirisha";
let Lastname = "poudel"; 
function myname(Firstname,Lastname){
    return `${Firstname} ${Lastname}`
}
const gree = myname(Firstname,Lastname);
console.log(gree);