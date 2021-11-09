import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    product: [],
    detailproduct: [],
    cart: [],
    total: 0,
    login: {},
    infouser: ['', ''],
    loading: false,
    stock: [],
    search: ''
}

const action = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCT":
            return {
                product: action.payload,
                detailproduct: state.detailproduct,
                cart: state.cart,
                total: state.total,
                login: state.login,
                infouser: state.infouser,
                loading: state.loading,
                stock: state.stock,
                search: state.search
            }
        case "SET_DETAIL":
            return {
                product: state.product,
                detailproduct: action.payload,
                cart: state.cart,
                total: state.total,
                login: state.login,
                infouser: state.infouser,
                loading: state.loading,
                stock: state.stock,
                search: state.search
            }
        case "SET_CART":
            return {
                product: state.product,
                detailproduct: state.detailproduct,
                cart: action.payload,
                total: state.total,
                login: state.login,
                infouser: state.infouser,
                loading: state.loading,
                stock: state.stock,
                search: state.search
            }
        case "SET_TOTAL":
            return {
                product: state.product,
                detailproduct: state.detailproduct,
                cart: state.cart,
                total: action.payload,
                login: state.login,
                infouser: state.infouser,
                loading: state.loading,
                stock: state.stock,
                search: state.search
            }
        case "SET_LOGIN":
            return {
                product: state.product,
                detailproduct: state.detailproduct,
                cart: state.cart,
                total: state.total,
                login: action.payload,
                infouser: state.infouser,
                loading: state.loading,
                stock: state.stock,
                search: state.search
            }
        case "SET_USER":
            return {
                product: state.product,
                detailproduct: state.detailproduct,
                cart: state.cart,
                total: state.total,
                login: state.login,
                infouser: action.payload,
                loading: state.loading,
                stock: state.stock,
                search: state.search
            }
        case "SET_LOAD":
            return {
                product: state.product,
                detailproduct: state.detailproduct,
                cart: state.cart,
                total: state.total,
                login: state.login,
                infouser: state.infouser,
                loading: action.payload,
                stock: state.stock,
                search: state.search
            }
        case "SET_STOCK":
            return {
                product: state.product,
                detailproduct: state.detailproduct,
                cart: state.cart,
                total: state.total,
                login: state.login,
                infouser: state.infouser,
                loading: state.loading,
                stock: action.payload,
                search: state.search
            }
        case "SET_SEARCH":
            return {
                product: state.product,
                detailproduct: state.detailproduct,
                cart: state.cart,
                total: state.total,
                login: state.login,
                infouser: state.infouser,
                loading: state.loading,
                stock: state.stock,
                search: action.payload
            }

        default:
            return state
    }
}

const store = createStore(action, applyMiddleware(thunk))

export default store