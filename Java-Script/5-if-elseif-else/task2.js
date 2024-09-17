// A school has following rules for grading system:
// a. Below 25 - F
// b. 25 to 45 - E
// c. 45 to 50 - D
// d. 50 to 60 - C
// e. 60 to 80 - B
// f. Above 80 - A
// Ask user to enter marks and print the corresponding grade.

let a = 79
if (a<25)
{
    console.log("F");
}
else if ((a>=25)&&(a<45))
{
    console.log("E");
}
else if ((a>=45)&&(a<50))
{
    console.log("D");
}
else if ((a>=50)&&(a<60))
{
    console.log("C");
}
else if ((a>=60)&&(a<80))
{
    console.log("B");
}
else if ((a>=80)&&(a<100))
{
    console.log("A");
}
else 
{
    console.log("your number  is invalid");
}