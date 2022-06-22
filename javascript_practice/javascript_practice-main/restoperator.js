//In the case of normal function
const sum = (num1, num2) =>{
    console.log(num1+num2);
}
sum(1,2,3,4);
//when we use rest operator

const sum1 = (...numbers) =>{
    console.log(numbers);
    let sum2 = 0;
    for(let i = 0; i< numbers.length; i++){
        sum2 +=numbers[i];
    }
    console.log(sum2);
}
sum1(1,2,3,4,5,6);