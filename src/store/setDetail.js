// import axios from 'axios'

// export const setDetail = (productId) => {
//     return async (dispatch) => {
//         const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
//         const data = await res.data
//         dispatch({
//             type: "SET_DETAIL",
//             payload: [data]
//         })
//     }
// }

export const setDetail = (filter) => {
    return (dispatch) => {
        dispatch({
            type: "SET_DETAIL",
            payload: filter
        })
    }
}