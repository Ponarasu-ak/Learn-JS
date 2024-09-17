//Write a program to calculate profit or loss
let costOfTheProduct = 1500
let sellingPrice = 13890
if (costOfTheProduct>sellingPrice)
{
    loss = sellingPrice-costOfTheProduct
    console.log("loss = "+loss);
}
else if (costOfTheProduct<sellingPrice)
{
    profit = sellingPrice-costOfTheProduct
    console.log("profit = "+profit);
}
