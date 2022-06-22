//using filter method in the case of age
const ages =[15,16,20,21,22]
const result = ages.filter(checkadult)//euta euta elements aaucha anii filter huncha 

function checkadult(age){
    return age>=18;
}
console.log(result)

//using filter method in array of objects
let cities = [
    {name:'kathmandu', population:30000},
    {name:'newyork', population:4000000},
    {name:"california", population:500000},
    {name:"los angeles", population:509687630},
]
let bigCities = cities.filter(function(e){
    return e.population>30000
})
console.log(bigCities)