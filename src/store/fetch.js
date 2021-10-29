import axios from 'axios'

export const fetchProduct = () => {
    return async (dispatch) => {
        const res = await axios.get('https://fakestoreapi.com/products?limit=8')
        const data = await res.data
        dispatch({
            type: "SET_PRODUCT",
            payload: data
        })
    }
}