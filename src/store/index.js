import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    product: [],
    detailproduct: []
}

const action = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCT":
            return {
                product: action.payload,
                detailproduct: state.detailproduct
            }
        case "SET_DETAIL":
            return {
                product: state.product,
                detailproduct: action.payload
            }
        default:
            return state
    }
}

const store = createStore(action, applyMiddleware(thunk))

export default store