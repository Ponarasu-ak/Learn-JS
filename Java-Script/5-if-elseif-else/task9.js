// Write a program to check if a year is leap year or not.
// If a year is divisible by 4 then it is leap year but if 
//the year is century year like 2000, 1900, 2100
// then it must be divisible by 400.
let a = 1900
if(a%400==0)
{
    console.log("leap yr");
}
else
{
    console.log("non leap yr ");
}