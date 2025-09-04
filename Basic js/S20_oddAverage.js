const odds=[];
function oddAverege(numbers){
    for(const number of numbers){
        if(number%2!==0){
            odds.push(number);

        }
         
    }
   console.log(odds);
   let sum=0;
   for(const num of odds){
    sum=sum+num;
   }
   console.log("Sum is: ",sum);
   const len=odds.length;
   console.log("Length is: ",len);
   const avg=sum/len;
   return avg;
   

}
 const numbers=[1,2,3,4,5,6,7,8,9];
    const average=oddAverege(numbers);
    console.log("Average is: ",average);