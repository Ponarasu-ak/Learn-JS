let oddOrEven = new Promise((resolve, reject) => {
    let n = 3
    if (n % 2 == 0) {
        setTimeout(() => {
            resolve("even")
        }, 5000);
    }
    else {
        setTimeout(() => {
            reject("odd")
        }, 5000);
    }
})

async function odOrEve() {
    try {
        console.log("hi");
        result = await oddOrEven
        console.log(result);
        console.log("bye");
    } catch (error) {
        console.log(error);
    }
}
odOrEve()
