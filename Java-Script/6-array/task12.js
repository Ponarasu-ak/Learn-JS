// let a = [2,9,9,1,2,4,4,9,4,2,9,-1];
// let b = [];

// for (let i = 0; i < a.length; i++) 
// {
//     let isSame = false
//     for (let j = 0; j < b.length; j++) 
//     {
//         if (a[i] == b[j]) 
//         {
//             isSame = true
//         }
//     }
//     if(isSame == false) 
//     {
//         add=0
//         for(let k = i+1 ;k<a.length;k++)
//         {
//             console.log(a[k]);
//             if (a[i]==a[k])
//             add++
//         }
//         console.log(a[i]+" is repeated " + add +" times");
//         b.push(a[i]);
//     }
// }
// console.log(b);


// method 2

let a = [1,2,1,2,3,1]
let b = []
let c = []

for (let i = 0; i < a.length; i++) 
{
    
    let isSame = false
    for (let j = 0; j < b.length; j++) 
    {
        if (a[i] === b[j]) 
        {
            c[j]++
            isSame = true
            
        }       
    }
    if(!isSame) {
        b.push(a[i])
        c.push(0)
    }
}
console.log(b);
console.log(c);














