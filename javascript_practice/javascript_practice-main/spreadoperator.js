//can concatinate array easily
let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];

let array3 = [0,...array1,...array2,11];
console.log(array3);

//can also concatinate the 2 objects
let obj1 = {
    firstname: "barsha"
}
let obj2 = {
    lastname: "poudel"
}
let obj3 = {...obj1, ...obj2};
console.log(obj3);