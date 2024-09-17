//find odd or even using function
let evenArray = []
let oddArray = []
function evenNo() {
    evenArray.push(i)
}
function oddNo() {
    oddArray.push(i)
}
for (i = 0; i < 100; i++) {
    if (i % 2 == 0) evenNo()
    else oddNo()
}
console.log(oddArray);
console.log(evenArray);