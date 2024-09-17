let electronics =
    [
        { category: "mobile", brand: "google", price: 50000, model: "pixel 6", discount: 5, gst: 12 },
        { category: "mobile", brand: "moto", price: 9000, model: "edge 30", discount: 5, gst: 12 },
        { category: "laptop", brand: "msi", price: 50000, model: "book 14", discount: 5, gst: 12 },
        { category: "laptop", brand: "asus", price: 90000, model: "vivobook", discount: 5, gst: 12, },
        { category: "laptop", brand: "razor", price: 50000, model: "mercury 14", discount: 5, gst: 12 },
        { category: "television", brand: "samsung", price: 20000, model: "frame", discount: 5, gst: 12 },
        { category: "television", brand: "sony", price: 70000, model: "bravia", discount: 5, gst: 12 },
        { category: "airconditioner", brand: "blue star", price: 15000, model: "2 ton", discount: 5, gst: 12 },
        { category: "airconditioner", brand: "carrier", price: 36000, model: "4 ton", discount: 5, gst: 12 },
        { category: "fan", brand: "usha", price: 2900, model: "manuel fan", discount: 5, gst: 12 },
        { category: "fan", brand: "crompton", price: 1500, model: "automated fan", discount: 5, gst: 12 },
        { category: "charger", brand: "crompton", price: 1500, model: "automated fan", discount: 5, gst: 12 }
    ]
let category = []
for (let i = 0; i < electronics.length; i++) {
    category.push(electronics[i].category)
}
console.log(category);
let duplicateRemoved = []
for (let j = 0; j < category.length; j++) {
    let isSame = false
    for (let k = 0; k < duplicateRemoved.length; k++) {
        if (category[j] == duplicateRemoved[k]) {
            isSame = true
        }
    }
    if (isSame == false) {
        duplicateRemoved.push(category[j])
    }
}
console.log(duplicateRemoved);
for (let i = 0; i < electronics.length; i++) {
    if (electronics[i].price >= 50000) {
        let DISCOUNT = electronics[i].price * electronics[i].discount / 100
        console.log(DISCOUNT);
        let GST = electronics[i].price * electronics[i].gst / 100
        console.log(GST);
        let NETPRICE = electronics[i].price - DISCOUNT + GST
        console.log(NETPRICE);
        electronics[i].netPrice = NETPRICE
    }
    else {
        if (electronics[i].price < 50000) {
            electronics[i].discount = null
            let GST = electronics[i].gst * electronics[i].price / 100
            console.log(GST);
            let NETPRICE = electronics[i].price + GST
            console.log(NETPRICE);
            electronics[i].netPrice = NETPRICE
        }
    }
}
console.log(electronics);
let object = {};
for (let l = 0; l < duplicateRemoved.length; l++) {
    let display = []
    for (let m = 0; m < electronics.length; m++) {
        if (duplicateRemoved[l] == electronics[m].category) {
            display.push(electronics[m])
            object[duplicateRemoved[l]] = display
        }
    }
}
console.log(object);



