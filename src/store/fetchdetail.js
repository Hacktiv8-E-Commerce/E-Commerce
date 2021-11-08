import axios from 'axios'
import { toast } from 'react-toastify';

export const fetchdetail = (productId) => {
    return (dispatch) => {
        const resolveAfter3Sec = new Promise(function (resolve, reject) {
            axios.get(`https://fakestoreapi.com/products/${productId}`)
                .then(res => {
                    const data = res.data
                    dispatch({
                        type: "SET_DETAIL",
                        payload: [data]
                    })
                    dispatch({
                        type: "SET_LOAD",
                        payload: false
                    })
                    return resolve()
                })
        })
        toast.promise(
            resolveAfter3Sec,
            {
                pending: 'Loading Data',
                success: 'Data has been loaded',
                error: 'Data has been loaded'
            }
        )
    }
}