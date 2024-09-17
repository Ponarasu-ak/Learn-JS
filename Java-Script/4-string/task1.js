// to find lenght of the string
let a = "ABCDEF GHIJKLMNOPQRSTUVWXYZ"
let b = a.length
//console.log(b)

// to find the character of the position 
let c = "hi hello"
let d = c.charAt(4)  
//console.log(d);

// to find index of 

let e = "hi hello"
let f = e.indexOf('I')
//console.log(f);

//toupper

let g = "hi hello"
let h = g.toUpperCase()
//console.log(h);

// tolower

let i = "AS IT is"
let j = i.toLowerCase()
//console.log(j);
 
// replace 

let k = "hi hello welcome"
let l = k.replace("welcome" , "WELCOME")
//console.log(l);

// replace all

let m = "I love cats. Cats are very easy to love. Cats are very popular."
let n = m.replaceAll("Cats" , "Dogs")
n = m.replaceAll("cats","fish")
//console.log(n);

//concat()
let o = " did you had "
let p = "you'r food on time..?"
let q = o.concat( "",p)
//console.log(q);

// slice()
let r = "hie hello"
let s = r.slice(0,2)
//console.log(s);

// split

let t = 'you,are a legend'
let u = t.split(',')
console.log(u);
