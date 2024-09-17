let name1 = 'Aee'
if((name1 >= 'a' && name1 <= 'z' )&& (name1 >= 'A' && name1 <= 'Z'))
{
    console.log("combined");
}
else if (name1 >= 'A' && name1 <= 'Z')
{
    console.log("uppercase");
}
else if(name1 >= 'a' && name1 <= 'z')
{
    console.log("lowercase");
}
else 
{
    console.log("enter value in string");
}