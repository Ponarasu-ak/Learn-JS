let pass = 4
let validate = new Promise(function(resolve,reject)
{
    if(pass>=45)
    {
        resolve("pass")
    }
    if(pass<45)
    {
        reject("fail")
    }

}
)
validate.then(function(passed)
{
    console.log(passed);
}
)
.catch(function (faild) 
{
    console.log(faild);    
})