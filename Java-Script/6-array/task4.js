a = [1, 2 , 1]
b = [] 
for (let i = 0; i <a.length; i++) 
{ 
  let isSame = false
  
  for(let j = 0 ; j<a.length; j++)
  {
    if(a[i] === b[j])
    {
     isSame = true
    }  
  } 
  if (isSame == false)
    {
    b.push(a[i])
    }  
}
console.log(b);

 