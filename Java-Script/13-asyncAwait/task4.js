function login(regNo, pin) {
    let userdetials =
        [
            { registrationNumber: 115, password: "hello@1", candidateName: "Ponarasu" },
            { registrationNumber: 116, password: "hello@12", candidateName: "Gokul" },
            { registrationNumber: 117, password: "hello@123", candidateName: "Suja" }
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
            { studentName: "Ponarasu",age:23,semester:5, gender: "male", mark: [50, 60, 70, 45, 80] },
            { studentName: "Gokul",age:22,semester:5, gender: "male", mark: [5, 60, 49, 74, 8] },
            { studentName: "Suja",age:22,semester:5, gender: "female", mark: [71, 60, 70, 67, 80] }
        ]

    for (let j = 0; j < students.length; j++) {
        if (result == students[j].studentName) {
            return students[j]
        }
    }
}

function passOrFail(marksArray) {
    let isSame = false
    let passMark = 45
    console.log(marksArray);
    let count = 0
    return new Promise((resolve, reject) => {
        for (let i = 0; i < marksArray.length; i++) {
            if (marksArray[i] < passMark) {
                count++
                isSame = true
            }
        }
        result = "faild in " + count + " subject"
        reject(result)
        if (isSame == false) {
            result = "passed in the exam"
            resolve(result)
        }
    })
}

// AsyncAwait

async function resultOfStudents(registerNumber, passcode) {
    try {
        let logginn = await login(registerNumber, passcode)
        let validationOfName = classTen(logginn)
        console.log(validationOfName);
        try {
            let pOf = await passOrFail(validationOfName.mark)
            console.log(pOf);
        }
        catch (error) {
            console.log(error);
        }
    }
    catch (error) {
        console.log(error);
    }
}


let registerNumber = 116
let passcode = "hello@12"

resultOfStudents(registerNumber, passcode)
