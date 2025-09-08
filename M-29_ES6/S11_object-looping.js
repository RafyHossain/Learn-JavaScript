const numbers = [1, 2, 54, 1, 4, 9];
for(const num of numbers){
    // console.log(num)
}

const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age: 22
}

for(const key in employee){         //for in loop use in object (key gives only key name)
    const value = employee[key]; // use kor key value
    console.log(key, value);
}

const keys = Object.keys(employee);
console.log(keys)
for(const key of keys){
    const value = employee[key]
}