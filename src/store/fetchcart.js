import { settotal } from './settotal'

export const fetchcart = (products) => {
    return async (dispatch) => {
        if (JSON.parse(localStorage.getItem('cart'))) {
            //for detail bug refresh
            if (products.length !== 0) {
                const res = JSON.parse(localStorage.getItem('cart')).filter(product => product.userId === JSON.parse(localStorage.getItem('login')).id)
                if (res.length !== 0) {
                    dispatch({
                        type: "SET_CART",
                        payload: res[0].products
                    })

                    // for detail add to cart condition
                    let total = await settotal(products, res[0].products)
                    dispatch({
                        type: "SET_TOTAL",
                        payload: total
                    })
                }
            }
        }
    }
}