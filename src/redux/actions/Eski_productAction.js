import api from "../../utils/api"

//? 1) senkron olanlar
export const setLoading = () => ({
    type: "SET_LOADING",
})

export const setProducts = (payload) => ({
    type: "SET_PRODUCTS",
    payload,
})

export const setError = (payload) => ({
    type: "SET_ERROR",
    payload,
})

//? 2) asenkron olanlar
export const getProducts = () => {
    return (dispatch) => {
        dispatch(setLoading())

        api
            .get("/products")
            .then((res) => dispatch(setProducts(res.data)))
            .catch((err) => dispatch(setError(err.message)))
    }
}