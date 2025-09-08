//Prottekta upadan er upor alada operation calaite hole map() use kora hoy
//array er upadan gula output hisebe lagle foreach loop use korte hbe
const numbers = [4, 8, 2, 3, 5];

// const doubled = []
// for (const num of numbers) {
//     const result = num * 2;
//     doubled.push(result);
// }


const friends = ['Zaved', 'Pavel', 'Nobel', 'Kodbel'];

const nameLengths = friends.map(name => name.length);
const firstLetters = friends.map(name => name[0].toLowerCase());
const result = numbers.map((num, index) => {
    console.log(num * index)
    return index
})

console.log(result)