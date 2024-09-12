import { applyMiddleware, combineReducers, createStore } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import productReducer from "./reducers/productReducer";
import { thunk } from "redux-thunk";
import basketReducer from "./reducers/basketReducer";

const rootReducer = combineReducers({
    products: productReducer,
    restaurants: restaurantReducer,
    cart: basketReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))