function sum() {
    let array = [65, 78, 69, 52, 91]
    let maxMark = array.length*100
    let length = array.length
    let total = 0
    for (let i = 0; i < array.length; i++) 
    {
        total = total + array[i]
    }
    console.log(total);
    percentage(total,maxMark)
    average(total,length)
}
function percentage(tot1,maxMrk) 
{
    console.log(tot1);
    let PERCENTAGE = tot1 * 100 / maxMrk
    console.log(PERCENTAGE);
}
function average(tot2,len ) 
{
    let AVERAGE = tot2 / len
    console.log(AVERAGE);
}
sum()