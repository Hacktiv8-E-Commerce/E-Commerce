import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    product: [],
    detailproduct: [],
    cart: [],
    total: 0
}

const action = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCT":
            return {
                product: action.payload,
                detailproduct: state.detailproduct,
                cart: state.cart,
                total: state.total
            }
        case "SET_DETAIL":
            return {
                product: state.product,
                detailproduct: action.payload,
                cart: state.cart,
                total: state.total
            }
        case "SET_CART":
            return {
                product: state.product,
                detailproduct: state.detailproduct,
                cart: action.payload,
                total: state.total
            }
        case "SET_TOTAL":
            return {
                product: state.product,
                detailproduct: state.detailproduct,
                cart: state.cart,
                total: action.payload
            }
        default:
            return state
    }
}

const store = createStore(action, applyMiddleware(thunk))

export default store