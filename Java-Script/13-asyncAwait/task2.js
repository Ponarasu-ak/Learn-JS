function sort(array) {
    return new Promise((resolve, reject) => {
        if (array.length == 6) {
            setTimeout(() => {
                for (let i = 0; i < array.length; i++) {
                    for (let j = i; j < array.length; j++) {
                        if (array[i] < array[j + 1]) {
                            let temp = array[j + 1]
                            array[j + 1] = array[i]
                            array[i] = temp
                            resolve(array)
                        }
                    }
                }  
            }, 5000);

        }
        else {
            reject("enter 6 number in array")
        }

    })
}

let a = [4,6,7,3,2,]
async function bubbleSort(a)
{
    console.log(a);
    try {
        await sort(a)
        console.log(a);
        
    } catch (error) {
        console.log(error);
    }
}
bubbleSort(a)