let a  = [-1,-1]
let Fmax =a[0]
let Smax =a[1] 
for (let i = 0; i < a.length; i++) 
{
    // if(Fmax == Smax)
    // {
    //     Smax = "need another number "
    // }
    if (a[i] > Fmax)
    {
        Smax = Fmax
        Fmax = a[i]
    } 
    else if (a[i] > Smax && a[i] != Fmax) 
    {
        Smax = a[i]
    }
}
console.log("Smax :", Smax);
console.log("Fmax :", Fmax);

