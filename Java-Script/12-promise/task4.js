function login(regNo, pin) {
    let userdetials =
        [
            { registrationNumber: 115, password: "hello@1", candidateName: "ponarasu" },
            { registrationNumber: 116, password: "hello@12", candidateName: "gokul" },
            { registrationNumber: 117, password: "hello@123", candidateName: "suja" }
        ]

    return new Promise((resolve, reject) => {
        let isSame = false
        for (let i = 0; i < userdetials.length; i++) {
            if (regNo == userdetials[i].registrationNumber && pin == userdetials[i].password) {
                resolve(userdetials[i].candidateName)
                isSame = true
            }
        }
        if (isSame == false) {
            reject("Your username or password is invalid")
        }
    })
}

function classTen(result) {
    let students =
        [
            { studentName: "ponarasu", gender: "male", mark: [50, 60, 70, 45, 80] },
            { studentName: "gokul", gender: "male", mark: [50, 60, 40, 45, 80] },
            { studentName: "suja", gender: "female", mark: [71, 60, 70, 67, 80] }
        ]
    for (let j = 0; j < students.length; j++) {

        if (result == students[j].studentName) {
            return students[j]
        }
    }
}

function passOrFail(marksArray) {
    let passMark = 45
    console.log(marksArray);
    let result = "passed in the exam"
    let count = 0
    for (let i = 0; i < marksArray.length; i++) {
        if (marksArray[i] < passMark) {
            count++
            result = "faild in "+count+ " subject"
        }

    }
    return result
}

login(117, "hello@123").then((result) => {
    console.log(result);
    let validationOfName = classTen(result)
    console.log(validationOfName);
    let pOf = passOrFail(validationOfName.mark)
    console.log(pOf);
}).catch((err) => {
    console.log(err);

});



