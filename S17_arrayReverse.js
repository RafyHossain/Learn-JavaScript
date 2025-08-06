const numbers=[1,2,3,4,5,6];
const reverse=[];
for(let i=0;i<numbers.length;i++)
{
    console.log(numbers[i]);
    reverse.unshift(numbers[i]);

}
console.log(reverse);

//Another way
const arr=[5,6,7,8,9];
const rev=[];

for(let i=arr.length-1;i>=0;i--)
{
    rev.push(arr[i]);

}
console.log(rev);

//by reverse() method

const arr2=[15,16,17,18,19,20];
arr2.reverse();
console.log(arr2);