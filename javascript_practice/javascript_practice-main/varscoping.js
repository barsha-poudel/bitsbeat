var x = 10;
function sum(){
    var y = 20;

}
// console.log(y); //we can't do this cause the variable made using var keyword can be accessible only within the function.
console.log(x);

function sum1(){
    {
        var num1 = 15;
        var num2 = 16;  // var has functional level scope
    }
    console.log(num1);
    console.log(num2);
}
sum1();

// function sum2(){
//     {
//         let num10 = 15;
//         let num20 = 16;  let has block level scope
//     }
//     console.log(num10);
//     console.log(num20);
// }
// sum2();