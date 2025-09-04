const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age: 22
}

Object.freeze(employee) //freeze korar por kono property add, remove ba modify hoy na
// delete employee.salary
delete employee.experience //property deleting

employee.salary = employee.salary + 5000;  //modify property
employee.location = 'Dhaka' //property adding
console.log(employee)