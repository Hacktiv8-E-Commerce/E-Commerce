export const settotal = (products, cart) => {
    let total = 0
    for (let itemcart of cart) {
        let cart = products.filter(product => product.id === itemcart.productId)
        total = total + cart[0].price * itemcart.quantity    
    }
    return total
}