export const setcart = (item) => {
    let othercart = JSON.parse(localStorage.getItem('cart')).filter(product => product.userId !== 4)
    let mycart = JSON.parse(localStorage.getItem('cart')).filter(product => product.userId === 4)
    let filter = []
    if (mycart.length !== 0) {
        filter = mycart[0].products.filter(product => product.productId !== Number(item))
    }
    filter.push({ productId: Number(item), quantity: 1 })
    othercart.push({ userId: 4, products: filter })

    localStorage.setItem('cart', JSON.stringify(othercart));
}