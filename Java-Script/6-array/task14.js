let a = [1,2,[1,2,],4,[1,2,2]]
console.log(typeof(a[2]));
for(let i = 0;i<a.length;i++)
{
    if(typeof a[i] == 'object')
    {
        let b = 0
        let d = a[i]
        console.log(d)
        for(let j = 0;j<d.length;j++)
        {    
            b = d[j]+b  
            console.log(b);        
        }
        a[i] = b
    }
}
console.log(a);


