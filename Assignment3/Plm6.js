/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
var currentSalary;
for(var i=1;i<=experience;i++)
{
    currentSalary=startingSalary+startingSalary*0.05;
    startingSalary=currentSalary;

}

console.log(currentSalary.toFixed(2));