const numbers=[1,2,3,4,5,6];
console.log(numbers);
numbers.push(7);  //for adding a element after last element
numbers.push(8);
numbers.push(9);
console.log(numbers);
numbers.pop();   //for remove the last element
let out =numbers.pop();
console.log(out);
console.log(numbers);

const name=["Rafy","Sohag","Shimul","Sohel"];
name.shift();   //for remove 1st element
console.log(name);
name.unshift("NRT");  //for adding 1st number
console.log(name);

console.log(name.includes("Sohag")); //for element search
console.log(name.indexOf("Shimul"));  //for knowing index no.

console.log(Array.isArray(name)); // Check for array or not