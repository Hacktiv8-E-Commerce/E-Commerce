import axios from 'axios'

export const fetchCategory = () => {
    return (dispatch) => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(res => res.data)
            .then(json => {
                localStorage.setItem('category-list', JSON.stringify(json))
                dispatch({
                    type: "SET_CATEGORY",
                    payload: json
                })
            })
    }
}