// let a = "he"
// let b = " is studying and his name is"
// let c = " naveen"
// let d = a.toLowerCase()
// let e = b.toUpperCase()
// let f = c.toLowerCase()
// let g = d.concat(' ',e, f)
// console.log(g);
let a = "he is good and hello clever boy.he is studying"
let b = a.split(" ")
let c = b[0]
let f = c.toUpperCase()
let d = b.slice(-1)
let e = d[0]
let g = e.toUpperCase()
let j = a.split(".")
let k = j[0]
let m = k.split(" ")
let n = m.slice(-1)
let o = n[0]
let p = o.toUpperCase()
let k1 = j[1]
let q = k1.split(" ")
let r = q.slice(0,1)
let s = r[0]
let t = s.toUpperCase()
let v = m.slice(-1)  
let w = f+" "+m.slice(1,-1).join(" ")+" "+p+"."+t+" "+q.slice(1,-1).join(" ")+" "+g
let x = w.replaceAll('is','are')
console.log(x);





