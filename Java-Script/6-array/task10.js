let a = [1,2,3,6]
let b 
let c 
for(let i = 0;i<a.length;i++)
{
    for(let j = 0;a.length;j++)
    {
        if (a[i]<a[j+1])
        {
            b = a[j+1]
            c = a[i]

        }

    }
}
console.log(c);
console.log(b);