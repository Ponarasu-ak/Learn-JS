let a = [1,2,[1,2],4,[1,[1,2],1],6,[1,[2,3],1]]
console.log(a.length);
for (let i = 0; i < a.length; i++) 
{
    if (typeof a[i] == 'object') 
    {
        let e = 0
        let b = a[i]
        for (let j = 0; j < b.length; j++) 
        {
            let d = 0
            if (typeof b[j] == 'object') 
            {
                let c = b[j]
                for (let k = 0; k < c.length; k++) 
                {
                    d = c[k] + d
                }
                b[j] = d
            }
        }
        for (let l = 0; l < b.length; l++) 
        {
            e = b[l] + e
        }
        a[i] = e
    }
}
console.log(a);