let electronics =
    [{ category: "mobile", brand: "google", price: 50000, model: "pixel 6", discount: 5, gst: 12 },
    { category: "mobile", brand: "moto", price: 9000, model: "edge 30", discount: 5, gst: 12 },
    { category: "laptop", brand: "asus", price: 90000, model: "vivobook", discount: 5, gst: 12, },
    { category: "laptop", brand: "razor", price: 50000, model: "mercury 14", discount: 5, gst: 12 },
    { category: "television", brand: "samsung", price: 20000, model: "frame", discount: 5, gst: 12 },
    { category: "television", brand: "sony", price: 70000, model: "bravia", discount: 5, gst: 12 },
    { category: "airconditioner", brand: "blue star", price: 15000, model: "2 ton", discount: 5, gst: 12 },
    { category: "airconditioner", brand: "carrier", price: 36000, model: "4 ton", discount: 5, gst: 12 },
    { category: "fan", brand: "usha", price: 2900, model: "manuel fan", discount: 5, gst: 12 },
    { category: "fan", brand: "crompton", price: 1500, model: "automated fan", discount: 5, gst: 12 }]
    
const toRemoveDuplicate = electronics.map((x) => {
    let categorys = x.category
    return categorys
})
let duplicateRemovedArray = []
toRemoveDuplicate.forEach(element => {
    let isSame = false
    duplicateRemovedArray.forEach((x) => {
        if (element == x) isSame = true
    })
    if (isSame == false) duplicateRemovedArray.push(element)
})
let addedDiscount = electronics.filter((x) => {
    x.price >= 50000
    let discount = x.price * x.discount / 100
    let Gst = x.price * x.gst / 100
    let NetPrice = x.price - discount + Gst
    return x.netprice = NetPrice
})
let withOutDiscount = electronics.filter((y) => {
    y.price < 50000
    let Gst = y.price * y.gst / 100
    let NetPrice = y.price + Gst
    return y.netprice = NetPrice
})
let object = {}
duplicateRemovedArray.forEach((x) => {
    let display = []
    electronics.forEach((y) => {
        if (x == y.category) {
            display.push(y)
            object[x] = display
        }
    })
})
console.log(object);

