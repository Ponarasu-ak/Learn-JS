let a = [10,5,8,9,70,10]
let b = a[0]
for (let i = 0 ; i < a.length; i++)
{
    if (b>a[i])
    {
        b = a[i]
    }
}
console.log(b);