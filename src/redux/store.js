import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; 
import thunk from "redux-thunk";
import drawerReducer from "./reducers/drawerReducer";
import { productsReducer } from "./reducers/productsReducer";
import { productDetailReducer } from "./reducers/productDetailReducer";


let initialState ={

}

const rootReducer = combineReducers({
	drawerState:drawerReducer,
	productsState:productsReducer,
	productState:productDetailReducer
})

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store;