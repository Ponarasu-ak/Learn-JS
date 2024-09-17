let a = 2
let b = 4
let c = 6
let d = 18
if (d % a == 0) {

    if (d % b == 0) {
        if (d % c == 0) {
            console.log(" divided by 2,4 and 6");
        }
        else {
            console.log(" divided by 2 ,4");
        }
    }
    else if (d % c == 0) {
        console.log(" divided by 2 and 6");
    }

    else {
        console.log(" divided by 2");
    }
}
else {
    console.log(" not divided by 2,4 and 6");
}