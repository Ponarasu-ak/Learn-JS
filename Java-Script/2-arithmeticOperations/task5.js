/*  
          *
        * * *
      * * * * *
        * * *
          *

*/
/*
    * @ @
    * * @
    * * * 
    
*/
for (let row =1; row<=3;row++)
{
    let nl = ""
    for(let clm1 = 1;clm1<=row;clm1++)
    {
        nl = nl+" *"
    }
    for(let clm2 = 2;clm2>=row;clm2--)
    {
        nl = nl+" "
    }
    console.log(nl);
    
}
/*
 
    * * @
    * @ @
    
*/
for(let row =1; row<=2;row++)
{
    let nl1 = ""
    for(let clm1 =2;clm1>=row;clm1-- )
    {
        nl1 = nl1+" *"
    }
    for(let clm2 =1 ; clm2<=row;clm2++)
    { 
        nl1 = nl1+" "
    }
    console.log(nl1);
}

/*
    @ @
    @ *
    * *
*/
for(let row = 1;row<=2;row++)
{
    let nl3 = ""
    for(let clm1 =2; clm1>=row;clm1-- )
    {
        nl3 = nl3+" "
    }
    for(let clm2 = 0; clm2<row;clm2++)
    {
        nl3 = nl3+"*"
    }
    console.log(nl3);
}

/*
    @ *
    @ @
*/

for(let row = 1; row<=2;row++)
{
    let nl2 = ""
    for(let clm1 = 1 ; clm1<=row ; clm1++)
    {
        nl2 = nl2+" "
    }
    for(let clm2 = 1 ; clm2>=row;clm2--)
    {
        nl2 = nl2+" *"
    }
    console.log(nl2);
}









