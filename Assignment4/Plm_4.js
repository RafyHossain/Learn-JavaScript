function  isSame(arr1 , arr2 ) {
if(Array.isArray(arr1)===true && Array.isArray(arr2)===true)
{
    if(arr1.length===arr2.length)
    {
        for(let i=0;i<arr1.length;i++){
            if(arr1[i]!==arr2[i])
            {
                return false;
            }
            
        }
        return true;
    }
    else
        return false;


}

else
    return "Invalid";
}

let arr1=[1, undefined , 3];
let arr2=  [1,null ,3];
console.log(isSame(arr1, arr2));

