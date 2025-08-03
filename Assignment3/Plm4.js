/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
if(fileName.endsWith(".pdf") || fileName.endsWith(".docs") || fileName[0]=="#")
{
    console.log("store");
}
else
    console.log("delete");
