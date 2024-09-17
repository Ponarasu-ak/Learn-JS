let a = [1,2,3,9]
let b = [5,5,6]
let c = []
for(let k =0 ; k<a.length;k++)
{
    if (a[k] == undefined)
    {
        a[k] = 0
    }
    if (b[k] == undefined)
    {
        b[k] = 0
    }
}
if(a.length>b.length)
{
    for(let i=0; i<b.length;i++)
    {
        c.push(a[i]+b[i])
    }
    for(let j =b.length;j<a.length;j++)
    {
        c.push(a[j])
    }
}
else if(b.length>a.length)
{
    for(let i=0; i<a.length;i++)
    {
        c.push(a[i]+b[i])
    }
    for(let j =a.length;j<b.length;j++)
    {
        c.push(b[j])
    }
}
else{
if(a.length == b.length)
{
    for(let i = 0 ; i<a.length;i++)
    {
        c.push(a[i]+b[i])
    }
}
}
console.log(c);