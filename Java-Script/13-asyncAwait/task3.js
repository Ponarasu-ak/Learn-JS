async function toCheckType(x) {
    return new Promise((resolve, reject) => {
        if (x == typeof number || typeof string || typeof boolean || typeof object) {
            setTimeout(() => {
                let ans = typeof x
                console.log(typeof x);
                resolve(ans)
            }, 3000);

        }
        else {
            let output = "type of a is undefind"
            reject(output)
        }
    })

}

let a 

async function result(qn) {
    console.log("hi");
    
    try {
        let result = await toCheckType(qn)
        console.log(result);
    } catch (error) {
        console.log(error);
    }

}
result(a)

