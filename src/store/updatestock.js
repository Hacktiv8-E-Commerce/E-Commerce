export const updatestock = (type, product, item, getIndex, quantity) => {
    return (dispatch) => {
        let index = getIndex(item.id)
        let stock = product
        if (type === "increment") {
            stock.splice(index, 1, { id: item.id, title: item.title, price: item.price, category: item.category, description: item.description, image: item.image, stock: item.stock + 1 })
        } else if (type == "decrement") {
            if (item.stock >= 1) {
                stock.splice(index, 1, { id: item.id, title: item.title, price: item.price, category: item.category, description: item.description, image: item.image, stock: item.stock - 1 })
            }
        } else {
            stock.splice(index, 1, { id: item.id, title: item.title, price: item.price, category: item.category, description: item.description, image: item.image, stock: item.stock - quantity })
        }
        localStorage.setItem('stock', JSON.stringify(stock))
        dispatch({
            type: "SET_STOCK",
            payload: stock
        })
    }
}