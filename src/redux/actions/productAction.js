import api from "../../utils/api"
import ActionTypes from "../actionTypes"

//! THUNK Aksiyonu
export const getProducts = (restId) => (dispatch) => {

    //* reducer a yüklenmenin başladığını bildiriyoruz
    dispatch({
        type: ActionTypes.PRODUCT_LOADING,
    })

    api.get(`products?restaurantId=${restId}`).then((res) =>
        dispatch({
            type: ActionTypes.PRODUCT_SUCCESS,
            payload: res.data,
        })
    ).catch((err) =>
        dispatch({
            type: ActionTypes.PRODUCT_ERROR,
            payload: err.message
        })
    )
}