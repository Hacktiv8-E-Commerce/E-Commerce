import { settotal } from './settotal'

export const fetchcart = (products) => {
    return async (dispatch) => {
        if (JSON.parse(localStorage.getItem('cart'))) {
            const res = JSON.parse(localStorage.getItem('cart')).filter(product => product.userId === 4)
            if (res.length !== 0) {
                dispatch({
                    type: "SET_CART",
                    payload: res[0].products
                })
                let total = await settotal(products, res[0].products)
                dispatch({
                    type: "SET_TOTAL",
                    payload: total
                })
            }
        }
    }
}