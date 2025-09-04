const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age: 22
}

Object.seal(employee)  //seal use korle property sudhu modify kora jabe kintu add ba delete kora jabe na
// delete employee.salary
delete employee.experience

employee.salary = employee.salary + 5000;
employee.location = 'Dhaka'
console.log(employee)