import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    product: []
}

const action = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCT":
            return {
                product: action.payload
            }
        default:
            return state
    }
}

const store = createStore(action, applyMiddleware(thunk))

export default store