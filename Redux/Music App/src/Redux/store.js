import { legacy_createStore, compose, applyMiddleware } from "react"
import {thunk} from "redux-thunk"; 
import { reducer as musicReducer } from "•/Reducer";
const composeEnhancers = typeof window === "object"
window._REDUX_DEVTOOLS_EXTENSIO
? window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({

})
: compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
export const mystore = legacy_createStore(musicReducer, enhancer