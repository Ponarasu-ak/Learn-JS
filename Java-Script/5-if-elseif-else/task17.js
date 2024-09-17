let a = 50
let b = 51
let c = 60
d = c-a 
e = c-b
if (a!=b)
{
if (d<0)
{
    d = -d
}
if (e<0)
{
    e = -e
}
if (e>d)
{
    console.log("a is near");
}
else if (e<d) 
{
    console.log("b is near");
}
}
else if(a==b)
{
    console.log("both are same");
}



