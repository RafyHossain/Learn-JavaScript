/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
var result1=area/2;
console.log(result1);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

if(money>=25000)
{
    console.log("Laptop");
}

else if(money>=10000)
{
      console.log("Cycle");

}
else
    console.log("Chocolate");



/** Problem -03 ( Medicine Planner ) */
var lastDay = 6 ;
//write your code here
for(var i=1;i<=lastDay;i++)
{
    if(i%3==0)
        console.log(i,"- medicine");
    else
        console.log(i,"- rest");
}


/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
if(fileName.endsWith(".pdf") || fileName.endsWith(".docs") || fileName[0]=="#")
{
    console.log("store");
}
else
    console.log("delete");


/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here

var mail=student.name.concat(student.roll).concat(".").concat(student.department).concat("@ph.ac.bd");

console.log(mail);



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
