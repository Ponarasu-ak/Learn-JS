let a = [4,3,1,2]
let b
for(let i=0;i<a.length;i++)
{
    for(let j=i;j<a.length;j++)
    {
        if(a[i]>a[j+1])
        {
            b = a[j+1]
            a[j+1] = a[i]
            a[i] = b
        }
    }
}
console.log(a);