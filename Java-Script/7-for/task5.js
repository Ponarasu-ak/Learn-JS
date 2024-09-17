let a = "2456782948"
let b = ""

for (let i = 0; i < a.length; i++) {
    let isSame = false
    if (a[i] % 2 == 0 && a[i + 1] % 2 == 0) {
        b += a[i] + "-"
        isSame = true
    }
    if (isSame == false) b += a[i]
}
console.log(b);