const displaying = (sum) =>{
    console.log(sum);
}
const calculating = (n1,n2,displaying) =>{
    let sum = n1 + n2;
    displaying(sum);
}
calculating(5,5,displaying);