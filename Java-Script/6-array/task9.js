let a = [-3,-1,-3,-100,-1,-3,0]
let b = []
let c = []
let d
for(let i=0;i<a.length;i++)
{
    let hi = 0
    for(let j=0;j<a.length;j++)
    {
        if(a[i]===b[j])
        {
            hi = 1
        }
    }
    if(hi==0)
    {
        b.push(a[i])
    }
}
console.log(b);
for(let k = 0; k< b.length;k++)
{
    for(let l =k;l<b.length;l++)
    {
        if(b[k]<b[l+1])
        {
        d = b[l+1]
        b[l+1] = b[k]
        b[k] = d
        }
    }
}
console.log(b);
console.log(b[1]);




