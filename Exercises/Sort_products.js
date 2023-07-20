
const products = [
    {
        name:"igor",
        price: 102
    },
    {
        name:"algo",
        price: 25
    },
    {
        name:"algo",
        price: 23
    }
]
function sortProducts (products) {
return products.sort((a,b) => a.price - b.price)
}
console.log(sortProducts(products))
