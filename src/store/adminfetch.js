import axios from 'axios'
import { toast } from 'react-toastify';

export const adminFetch = () => {
    return (dispatch) => {
        const resolveAfter3Sec = new Promise(function (resolve, reject) {
            axios.get('https://fakestoreapi.com/products')
                .then(result => {
                    let stock = []
                    for (const { id, title, price, category, description, image } of result.data) {
                        stock.push({ id: id, title: title, price: price, category: category, description: description, image: image, stock: 0 })
                    }
                    dispatch({
                        type: "SET_STOCK",
                        payload: stock
                    })
                    localStorage.setItem('stock', JSON.stringify(stock))
                    return resolve()
                })
        });
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