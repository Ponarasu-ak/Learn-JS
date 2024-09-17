a = [1, 2 , 1,2,1,3]
b = []
c= []
for (let i = 0; i <a.length; i++) 
{ 
  let isSame = false
  
  for(let j = 0 ; j<a.length; j++)
  {
    if(a[i] === b[j])
    {
      c.push(b[j])
      console.log(c[j]+" is repeated "+c[j]+" times");
      isSame = true
     
    }  
  } 
  if (isSame == false)
    {
    b.push(a[i])
    }  
}
console.log(b);

 