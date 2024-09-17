function flipkart(productIds) {
    let products = [
        { productName: "cycle", id: "01", cost: 6000 },
        { productName: "iphone", id: "02", cost: 49000 },
        { productName: "iron box", id: "03", cost: 1300 },
        { productName: "fan", id: "04", cost: 1700 }
    ];
    let isAllIn = true;
    for (let i = 0; i < productIds.length; i++) {
        let found = false;
        for (let j = 0; j < products.length; j++) {
            if (productIds[i] === products[j].id) {
                found = true;
                break;
            }
        }
        if (!found) {
            isAllIn = false;
            break;
        }
    }
    return new Promise((resolve, reject) => {
        if (isAllIn) {
            let cart = [];
            for (let i = 0; i < productIds.length; i++) {
                for (let j = 0; j < products.length; j++) {
                    if (productIds[i] === products[j].id) {
                        cart.push(products[j]);
                    }
                }
            }
            resolve(cart);
        } else {
            let output = "Oops! One or more of your products is not listed";
            reject(output);
        }
    });
}
function calculateTotal(cart) {
    console.log(cart);
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
        totalCost += cart[i].cost;
    }
    return totalCost;
}

flipkart(["01", "06"])
    .then((cart) => {
        console.log("Cart:", cart);
        let totalCost = calculateTotal(cart);
        console.log("Total Cost:", totalCost);
    })
    .catch((err) => {
        console.log(err);
    });
