function small(number, capital) {
    let SA = "abcdefghijklmnopqrstuvwxyz"
    let isSame = false
    for (let i = 0; i < number.length; i++) {
        for (let j = 0; j < SA.length; j++) {
            if (number[i] == SA[j]) {
                isSame = true
                output = "remove small alphabet"
                return output
            }
            
        }
    }
    if (isSame == false) {
        capital(number)
    }
}
function caps(number,splCtr) {
    
    let CA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let isSame = false
    for (let i = 0; i < number.length; i++) {
        for (let j = 0; j < CA.length; j++) {
            if (number[i] == CA[j]) {
                isSame = true
                output = "remove capital alphabet"
                return output
            }
            
        }
    }
    if (isSame == false) {
        splCtr(number)
    }
}
function specialcharacter(number,len) {
    
    let splCtr = "!@#$%^&*_+|?><:;"
    isSame = false
    for (let i = 0; i < number.length; i++) {
        for (let j = 0; j < splCtr.length; j++) {
            if (number[i] == splCtr[j]) {
                isSame = true
                output = "remove special character"
                return output
            }
            
        }
    }
    if (isSame == false) {
        len(number)
    }
}
function length(number,spc) {
    
    isSame = false
    if (number.length != 10) {
        isSame = true
        output = "number is incorrect"
        return output
    }
    if (isSame == false) {
        spc(number)
    }
}
function space(number) {
    
    let SPACE = " "
    console.log(SPACE.length);
    isSame = false
    for (let j = 0; j < number.length; j++) {
        if (SPACE == number[j]) {
            isSame = true
            output = "remove space"
            return output
        }

    }
    if (isSame == false) {
        output = "number is valid"
        return output
    }
}
phoneNumber = "98A1532100"
small(phoneNumber, function () {
    caps(phoneNumber, function () {
        specialcharacter(phoneNumber, function () {
            length(phoneNumber, function () {
                space(phoneNumber)
            }
            )
        }
        )
    }
    )
}
)
console.log(output);

// callback hell 
// inversion control
// prymid of doom