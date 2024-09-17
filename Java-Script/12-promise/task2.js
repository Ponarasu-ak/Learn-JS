function validation(number) {
    let detials =
        [
        { phoneNumber: "9876502889", otp: "1" },
        { phoneNumber: "9876502189", otp: "12" },
        { phoneNumber: "9856502889", otp: "123" }
        ]

    return new Promise((resolve, reject) => {
        let isSame = false
        for (let i = 0; i < detials.length; i++) {
            if (detials[i].phoneNumber == number) {
                isSame = true
                resolve(detials[i].otp)

            }
        }
        if (isSame == false) {
            let output = "phonenumber"
            reject(output)
        }


    })


}
validation("9876502189")
    .then(function (ans) { console.log(ans); })
    .catch(function (output) { console.log(output + " " + "invalid"); })