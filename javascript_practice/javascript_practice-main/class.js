class employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    getdetails = ()=>{
        return `Name: ${this.name} and Salary: ${this.salary}`
    }
}
let aayush = new employee('john',3000);
console.log(aayush.getdetails());
