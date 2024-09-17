let a = [1,2,3]
let b = [4,5,6]
let c = [7,8,9]
let z = a.length+b.length
let d = a.length+b.length+c.length
let f =new Array(d)
console.log(f);
for(let i = 0;i<a.length;i++)
{
    f[i] = a[i]
}
j = 0
for(let i = a.length;i<f.length;i++)
{
    f[i] = b[j]
    j++
}
k = 0
for(let i = z;i<f.length;i++)
{
    f[i] = c[k]
    k++
}
for(let i = 0;i<f.length;i++)
{
console.log(f[i]);
}