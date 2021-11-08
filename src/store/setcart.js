import Swal from 'sweetalert2'

export const setcart = (item, fetchcart) => {
    let othercart = JSON.parse(localStorage.getItem('cart')).filter(product => product.userId !== JSON.parse(localStorage.getItem('login')).id)
    let mycart = JSON.parse(localStorage.getItem('cart')).filter(product => product.userId === JSON.parse(localStorage.getItem('login')).id)
    let filter = []
    if (mycart.length !== 0) {
        filter = mycart[0].products.filter(product => product.productId !== Number(item))
        if (mycart[0].products.filter(product => product.productId === Number(item)).length === 1) {
            Swal.fire({
                icon: 'info',
                title: 'item has been added',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                icon: 'success',
                title: 'items added',
                showConfirmButton: false,
                timer: 1500
            })
        }
    } else {
        Swal.fire({
            icon: 'success',
            title: 'items added',
            showConfirmButton: false,
            timer: 1500
        })
    }
    filter.push({ productId: Number(item), quantity: 1 })
    othercart.push({ userId: JSON.parse(localStorage.getItem('login')).id, products: filter })

    localStorage.setItem('cart', JSON.stringify(othercart));

    fetchcart()
}