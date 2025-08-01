let str1="Hello, I am Rafy Hossain";
let str2="";
/*for(i=0;i<str1.length;i++)
{
    let letter=str1[i];
    str2=letter+str2;
}

or another way
 */

for(let letter of str1)
{
    str2=letter+str2;
}

console.log(str2);