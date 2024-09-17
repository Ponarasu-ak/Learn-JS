//Write a program to input any character and check whether it is alphabet
//digit or special character
let a = '%'
if ((a>='a'&& a<='z') || (a>='A'&& a<='Z'))
{
    console.log("alphabet");
}
else if(a>=0)
{
    console.log("digit");
}
else 
{
    console.log("special ctr");
}