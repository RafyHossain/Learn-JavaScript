function totalFine( fare ) {
    
   if(typeof fare==="number" && fare>=1)
   {
    let fine=fare+(fare*0.2)+30;
    return fine;
   }

   else
    return  "Invalid" ;
   
}

function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return "Invalid";
    }
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char !== ' ') {
            if (char >= 'a' && char <= 'z') {
                result += char.toUpperCase();
            } else {
                result += char;
            }
        }
    }
    return result;
}



function  bestTeam( player1, player2 ) {
      if (typeof player1 === "object"  && typeof player2 === "object" ) {
        let total1=player1.foul+player1.cardR+player1.cardY;
        let total2=player2.foul+player2.cardR+player2.cardY;

        if(total1<total2)
            return player1.name;
        else if(total1>total2)
            return player2.name;
        else
            return "Tie";
      }

      else
        return "Invalid";

}



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

