// fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(
//     data => 
//          data.json()
    
// ).then((values) => {
//     console.log(values.forms[0].name);
// })

async function aa()
{
const value = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
async function toGetValues(link)
{
    try {
        let toStore = await link
        let stored = await toStore.json()
        return stored.id
        
    } catch (error) {
        throw ("err11or")
        
    }
}
let ans = await toGetValues(value)
console.log(ans)
}
aa().catch(err=>console.log(err))