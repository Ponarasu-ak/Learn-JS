let a = [1,2,6,3]
let b 
for(let i =0 ;i<a.length;i++)
{
    for(let j = i ; j<a.length;j++)
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