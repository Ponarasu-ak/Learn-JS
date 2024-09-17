let a = [1,2,3,1,2,3]
let b = []
for(let i = 0;i<a.length;i++)
{
    let hi = 0
    for(let j =0;j<a.length;j++)
    {
        if(a[i]===b[j])
        {
            hi = hi+1
        }
    }
    if(hi<1)
    {
        b.push(a[i])
    }
} 
console.log(b);
