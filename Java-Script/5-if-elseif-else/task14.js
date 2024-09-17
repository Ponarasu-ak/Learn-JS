let Tamil = 40
let English = 50
let Maths = 100
let Evs = 100
let Social = 60

if (typeof Tamil ==='number'&& Tamil>=0 && typeof English ==='number' && English >=0 && typeof Maths ==='number' && Maths>=0 && typeof Evs ==='number' && Evs >=0 && typeof Social ==='number'&& Social>=0)
{       
totalMarks = Tamil+English+Maths+Evs+Social
console.log("total marks : "+totalMarks)
totalPercentage = (totalMarks*80)/500
console.log("over all percentage : "+totalPercentage)
if (totalPercentage<35 || Tamil < 40 || English < 40 || Maths<40||Evs<40 || Social< 40 )
{  
    b= "overall grade  is     F"
    //console.log("overall grade  is     F")
}
else if ((totalPercentage>=35)&&(totalPercentage<40))
{
    b= "overall grade  is     E"
    //console.log("overall grade is      E")
}
else if ((totalPercentage>=40)&&(totalPercentage<50))
{
    b= "overall grade  is     D"
    //console.log("overall grade is      D")
}
else if ((totalPercentage>=50)&&(totalPercentage<60))
{
    b= "overall grade  is     C"
    //console.log("overall grade is      C")
}
else if ((totalPercentage>=60)&&(totalPercentage<70))
{
    b= "overall grade  is     B"
    //console.log("overall grade is      B")
}
else if ((totalPercentage>=70)&&(totalPercentage<=80))
{
    b= "overall grade  is     A"
    //console.log("overall grade is      A")
}
console.log(b);
    
}
else
{
    console.log("invalid");
}





