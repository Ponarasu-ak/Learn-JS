let classDetials =
    [{ studentName: 'naveen', age: 18, gender: 'M', mark: [53, 66, 71, 50, 79] },
    { studentName: 'ali', age: 16, gender: 'M', mark: [91, 69, 78, 86, 79] },
    { studentName: 'sathya', age: 15, gender: 'M', mark: [91, 69, 78, 86, 79] },
    { studentName: 'samy', age: 16, gender: 'M', mark: [51, 29, 68, 96, 69] }]

classDetials.forEach((x) => {
    let markForIteration = x.mark
    let totalMarks = 0
    markForIteration.forEach((y) => {
        totalMarks = totalMarks + y
    })
    x.totalMarks = totalMarks
    let percentage = totalMarks * 100 / 500
    x.percentage = percentage
    if (percentage > 35) {
        if (percentage >= 80 && percentage <= 100) Grade = "A"
        if (percentage >= 60 && percentage <= 79) Grade = "B"
        if (percentage >= 45 && percentage <= 59) Grade = "C"
        if (percentage >= 35 && percentage <= 44) Grade = "D"
        if (percentage < 35) Grade = "F"
    }
    x.Grade = Grade
    let Result = markForIteration.every((x) => {
        return res = x > 35
    })
    let ress = ""
    if (Result == true) {
        ress = "pass";
    }
    else {
        ress = "fail";
    }
    x.Result = ress
}
)
let totalMarksArray = []
classDetials.forEach((x) => {
    totalMarksArray.push(x.totalMarks)
})
let a = totalMarksArray
let removedDuplicate = [];
a.forEach(val => {
    console.log(val);
    let isSame = false;
    removedDuplicate.forEach(existingVal => {
        if (val == existingVal) {
            isSame = true;
        }
    });
    if (isSame == false) {
        removedDuplicate.push(val);
    }
});
console.log(removedDuplicate);
removedDuplicate.forEach((val, ind, arr) => {
    arr.forEach((v, i, a) => {
        if (arr[ind] > a[i]) {
            let temp = a[i];
            a[i] = arr[ind];
            arr[ind] = temp;
        }
    });
});
console.log(removedDuplicate);
classDetials.forEach((x) => {
    let Rnk = 0
    if (x.Result == "pass") {
        removedDuplicate.forEach((x,xi) => {
            classDetials.forEach((y, ) => {
                if (x === y.totalMarks) {
                    Rnk = xi+ 1
                    y.Rank = Rnk
                }
            })
        })
    }
    else {
        x.Rank = "No rank"
    }
})
console.log(classDetials);











