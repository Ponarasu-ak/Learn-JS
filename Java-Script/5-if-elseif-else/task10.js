// Ask user to enter age, sex ( M or F ), marital status ( Y or N ) 
//and then using following rules print their place of service.
// if employee is female, then she will work only in urban areas.
// if employee is a male and age is in between 20 to 40 then he may work in anywhere
// if employee is male and age is in between 40 t0 60 then he will work in urban areas only.
// And any other input of age should print "ERROR"
 
let a = 70
let sex = "F" 
if (sex == "F")
{
    console.log("work only in urban areas ")
}
if(sex == 'M')
{
    if(a>=20 && a<40)
    {
        console.log("work in anywhere");
    }
    if (a>=40 && a<60)
    {
        console.log("urban areas only");
    }
    console.log("ERROR");
    
}
else
{
console.log("ERROR");
}