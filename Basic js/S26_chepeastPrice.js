const prices=[
    {band:"Realme",price:16000,colour:"lightblue"},
    {band:"Xiome",price:23000,colour:"lightblue"},
    {band:"Samsung",price:26000,colour:"lightblue"},
    {band:"Apple",price:100000,colour:"lightblue"},
    {band:"Vivo",price:17000,colour:"lightblue"},
    {band:"Oppo",price:13000,colour:"lightblue"}
]

function cheapvalue(prices){
    let min=prices[0];
    for(const num of prices){
        if(num.price<min.price)
            min=num;
    }
    return min;

}

const cheapeast=cheapvalue(prices);
console.log(cheapeast);