// console.log("hello world");
// function Sum(a,b)
// {
//     let c
//     setTimeout(() => {return c = a+b}, 2000);
// }
// console.log(Sum(10,5));

// setTimeout(() => console.log("hello world1"), 3000);
// setTimeout(() => console.log("hello world2"), 2000);
// setTimeout(() => console.log("hello world3"), 1000);

// console.log("bye");
// setInterval(() => {
//     console.log("yes");
    
// }, 1000);

function sum(a,b){
    
    setTimeout(()=>{
        let c
        c = a+b
        console.log(c);
        return c
    },2000)
}
console.log(sum(10,5));
