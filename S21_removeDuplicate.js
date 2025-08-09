 function removeDuplicate(arr){
    const unique=[];
    for(const num of arr){
        if(unique.includes(num)===false){
            unique.push(num);
        }
    }

    return unique;


 }

 const arr=[1,2,2,3,3,4,5,6,6,7,8,9,9];
 const uniqueArr=removeDuplicate(arr);
 console.log("Without duplicates: ",uniqueArr);