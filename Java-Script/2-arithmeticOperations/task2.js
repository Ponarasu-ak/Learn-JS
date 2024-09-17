//Write a program to add 8 to the number 2345 and then divide it by 3.
// Now, the modulus of the quotient is taken with 5 and then multiply 
//the resultant value by 5. Display the final result

let a = 8;let b = 2345;let c = 3 ;let d = 5; let e = 5
answer = ((a+b)/3)%5
result = answer*5
console.log(result);
//Now solve the above question using assignment operators (+=, -=, *=).
l = a+=b
console.log(l);
m = l/=c
console.log(e);
n = m%=d
console.log(n);
o = n*e
console.log(o);