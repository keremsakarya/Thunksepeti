import { v4 } from "uuid"
import api from "../../utils/api"
import ActionTypes from "../actionTypes"

export const addToBasket = (product, rest) => (dispatch) => {

    //* 1) sepete eklenilecek olan ürünün bilgilerini belirle
    const newItem = {
        id: v4(),
        productId: product.id,
        title: product.title,
        price: product.price,
        photo: product.photo,
        restaurantName: rest.name,
        amount: 1,
    }

    //* 2) elemanı api a ekle
    api.post("/cart", newItem).then(() =>
        //* 3) veri api a eklenirse reducer a da gönder
        dispatch({
            type: ActionTypes.ADD_TO_CART,
            payload: newItem,
        })
    )
}

export const updateItem = (id, newAmount) => (dispatch) => {
    //* api da bulunan elemanı güncelle
    api.patch(`/cart/${id}`, { amount: newAmount }).then((res) => {
        //* istek başarılı olursa reducer a haber ver
        dispatch({
            type: ActionTypes.UPDATE_CART,
            payload: res.data // güncellenecek item
        })
    })
        .catch((err) =>
            //* işlem gerçekleşmezse err içerisindeki mesajı reducer a gönder
            dispatch({ type: ActionTypes.ERROR_CART, payload: err.message })
        )
}

export const deleteItem = (id) => (dispatch) => {
    api.delete(`/cart/${id}`).then(() =>
        dispatch({
            type: ActionTypes.DELETE_FROM_CART,
            payload: id,
        })
    )
}