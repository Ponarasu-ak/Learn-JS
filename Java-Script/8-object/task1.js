let ten =
    [
        { studentName : 'charu',age : 16,gender : 'F',mark : [53,66,71,50,79] },
        { studentName : 'naveen',age : 16,gender : 'M',mark : [53,66,71,50,79]},
        { studentName : 'dhana',age : 16,gender : 'M',mark : [91,69,98,86,79] },
        { studentName : 'ali',age : 16,gender : 'M',mark : [91,69,78,86,79]   },
        { studentName : 'sathya',age : 15,gender : 'M',mark : [91,69,78,86,79]},
        { studentName : 'dante',age : 16,gender : 'M',mark : [97,99,88,66,82] },
        {studentName : 'samy',age : 16,gender : 'M',mark : [51,29,68,96,69]   }
    ]

let D = []

for (let i = 0; i < ten.length; i++) {
    let A = ten[i].mark
    console.log(A);
    let B = 0
    for (let j = 0; j < A.length; j++) {
        B = A[j] + B
    }
    console.log(B);
    D.push(B)
    ten[i].totalMarks = B
    let C = B * 100 / 500
    console.log(C);
    ten[i].percentage = C
    if (C >= 35) {
        if (C > 90 && C <= 100) {
            grade = "O"
        }
        if (C > 75 && C < 90) {
            grade = "A"
        }
        if (C > 60 && C < 75) {
            grade = "B"
        }
        if (C > 45 && C < 60) {
            grade = "C"
        }
        if (C > 35 && C < 45) {
            grade = "D"
        }
        if (C < 35) {
            grade = "F"
        }
    }
    console.log(grade);
    ten[i].grade = grade
    let isSame = false
    for (let k = 0; k < A.length; k++) {
        if (A[k] < 35) {
            result = "fail"
            isSame = true
        }
    }
    if (isSame == false) {
        result = "pass"
    }
    ten[i].result = result
}

let G = []

for (let o = 0; o < ten.length; o++) {
    if (ten[o].result == "pass") {
        console.log(ten[o].totalMarks);
        G.push(ten[o].totalMarks)
    }
}

console.log(G);

for (let m = 0; m < G.length; m++) {
    for (let n = 0; n < G.length; n++) {
        if (G[n] < G[n + 1]) {
            let E = G[n + 1]
            G[n + 1] = G[n]
            G[n] = E
        }
    }
}

let H = G
let I = []
console.log(H);
for (let r = 0; r < H.length; r++) {
    let hi = 0
    for (let s = 0; s < H.length; s++) {
        if (H[r] === I[s]) {
            hi = hi + 1
        }
    } console.log(hi);
    if (hi < 1) {
        I.push(H[r])
    }
}

console.log(I);
let rank = 0
console.log(I.length);
for (let p = 0; p < I.length; p++) {

    for (let q = 0; q < ten.length; q++) {
        if (I[p] == ten[q].totalMarks) {
            rank = p + 1
            ten[q].rank = rank
            console.log(rank);
        }

    }
}

for (let r = 0; r < ten.length; r++) {
    if (ten[r].result == 'fail') {
        rank = 'no rank'
        ten[r].rank = rank
    }
}
console.log(ten);

