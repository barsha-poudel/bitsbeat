class person{
    constructor(fname,age,salary){
        this.fname = fname;
        this.age = age;
        this.salary = salary;
    }
    getpersondetails(){
        return `Name: ${this.fname} and Age: ${this.age} and Salary: ${this.salary}`
    }
}
class employee extends person{
    constructor(name, age, salary, employeeid, employeeaddress, employeephnnumber){
        super(name,age,salary);
        this.employeeid = employeeid;
        this.employeeaddress = employeeaddress;
        this.employeephnnumber = employeephnnumber;
    }
    getemployeedetails(){
        return ` From Person Class: ${this.getpersondetails()} EmployeeId: ${this.employeeid} EmployeeAddress: ${this.employeeaddress} EmployeePhnNumber: ${this.employeephnnumber}`
    }
}
const obj2 = new employee("larak", 20, 3000, 1,"balkumari", 9861519522);
console.log(obj2.getemployeedetails());