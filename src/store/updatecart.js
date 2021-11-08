export const updatecart = (type, productId, refresh) => {
    let othercart = JSON.parse(localStorage.getItem('cart')).filter(product => product.userId !== JSON.parse(localStorage.getItem('login')).id)
    let mycart = JSON.parse(localStorage.getItem('cart')).filter(product => product.userId === JSON.parse(localStorage.getItem('login')).id)
    let indexproduct = mycart[0].products.findIndex(product => product.productId === productId)
    let myproduct = mycart[0].products.filter(product => product.productId === productId)
    let filter = mycart[0].products.filter(product => product.productId !== productId)

    if (type === "increment") {
        filter.splice(indexproduct, 0, { productId: productId, quantity: myproduct[0].quantity + 1 })
    } else if (type === "decrement") {
        if (myproduct[0].quantity === 1) {
            filter.splice(indexproduct, 0)
        } else {
            filter.splice(indexproduct, 0, { productId: productId, quantity: myproduct[0].quantity - 1 })
        }
    } else {
        filter.splice(indexproduct, 0)
    }

    othercart.push({ userId: JSON.parse(localStorage.getItem('login')).id, products: filter })
    localStorage.setItem('cart', JSON.stringify(othercart));
    refresh()
}