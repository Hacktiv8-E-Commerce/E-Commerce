import axios from 'axios'

export const fetchdetail = (productId) => {
    return async (dispatch) => {
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        const data = await res.data
        dispatch({
            type: "SET_DETAIL",
            payload: [data]
        })
    }
}