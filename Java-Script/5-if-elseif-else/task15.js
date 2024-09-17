let Tamil = 70
let English = 50
let Maths = 70
let Evs = 23
let Social = 80
if (Tamil<40)
{
    console.log(" Grade for Tamil is    F")
}
else if ((Tamil>=40)&&(Tamil<60))
{
    console.log(" Grade for Tamil is    E")
}
else if ((Tamil>=60)&&(Tamil<70))
{
    console.log(" Grade for Tamil is      D")
}
else if ((Tamil>=70)&&(Tamil<80))
{
    console.log(" Grade for Tamil is      C")
}
else if ((Tamil>=80)&&(Tamil<90))
{
    console.log(" Grade for Tamil is      B")
}
else if ((Tamil>=90)&&(Tamil<=100))
{
    console.log(" Grade for Tamil is      A")
}
if (English<40)
{  
    console.log(" Grade for English is    F")
}
else if ((English>=40)&&(English<60))
{
    console.log(" Grade for English is    E")
}
else if ((English>=60)&&(English<70))
{
    console.log(" Grade for English is    D")
}
else if ((English>=70)&&(English<80))
{
    console.log(" Grade for English is    C")
}
else if ((English>=80)&&(English<90))
{
    console.log(" Grade for English is    B")
}
else if ((English>=90)&&(English<=100))
{
    console.log(" Grade for English is    A")
}
if (Maths<40)
{
    console.log(" Grade for Maths is      F")
}
else if ((Maths>=40)&&(Maths<60))
{
    console.log(" Grade for Maths is      E")
}
else if ((Maths>=60)&&(Maths<70))
{
    console.log(" Grade for Maths is      D")
}
else if ((Maths>=70)&&(Maths<80))
{
    console.log(" Grade for Maths is      C")
}
else if ((Maths>=80)&&(Maths<90))
{
    console.log(" Grade for Maths is      B")
}
else if ((Maths>=90)&&(Maths<=100))
{
    console.log(" Grade for Maths is      A")
}
if (Evs<40)
{
    console.log(" Grade for Evs is        F")
}
else if ((Evs>=40)&&(Evs<60))
{
    console.log(" Grade for Evs is        E")
}
else if ((Evs>=60)&&(Evs<70))
{
    console.log(" Grade for Evs is        D")
}
else if ((Evs>=70)&&(Evs<80))
{
    console.log(" Grade for Evs is        C")
}
else if ((Evs>=80)&&(Evs<90))
{
    console.log(" Grade for Evs is        B")
}
else if ((Evs>=90)&&(Evs<=100))
{
    console.log(" Grade for Evs is        A")
}
if (Social<40)
{
    console.log(" Grade for Social is     F")
}
else if ((Social>=40)&&(Social<60))
{
    console.log(" Grade for Social is     E")
}
else if ((Social>=60)&&(Social<70))
{
    console.log(" Grade for Social is     D")
}
else if ((Social>=70)&&(Social<80))
{
    console.log(" Grade for Social is     C")
}
else if ((Social>=80)&&(Social<90))
{
    console.log(" Grade for Social is     B")
}
else if ((Social>=90)&&(Social<=100))
{
    console.log(" Grade for Social is     A")
}
if ((Tamil>=25&&English>=25)&&(Maths>=25&&Evs>=25))
{
    if(Social>=25)
    {
        console.log(" passed in the exam");
    }
   
}
else
{
    console.log(" failed in the exam");
}
totalMarkOfAllSubject = (Tamil+English+Maths+Evs+Social)
console.log(" Total Subject marks = "+totalMarkOfAllSubject);
if(totalMarkOfAllSubject>=125)
{
    console.log(" passed ");
}
else if (totalMarkOfAllSubject<25)
{
    console.log(" fail");
}
percentageOfAllSubject = (totalMarkOfAllSubject*100)/500
console.log(" Total percentage = " +percentageOfAllSubject);
if(percentageOfAllSubject>=25)
{
    console.log(" passed ");
}
else if (percentageOfAllSubject<25)
{
    console.log(" fail");
}
