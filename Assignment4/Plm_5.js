function  resultReport( marks ) {
if(Array.isArray(marks)===true){
    if(marks.length===0)
        return { finalScore: 0 , pass: 0, fail: 0 };
    else
    {
        let pCount=0;
        let fCount=0;
        let total=0;
       for(let i=0;i<marks.length;i++){
        total=total+marks[i];

         if(marks[i]>=40){
            pCount++;
            

        }
        else
            fCount++;
       }
       let avg=Math.round(total/marks.length);
       return { finalScore: avg, pass:pCount,fail: fCount
    };
    }
    
}

else
    return "Invalid";
}

console.log(resultReport([]));
