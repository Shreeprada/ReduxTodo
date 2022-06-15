import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./counter.reducer";
import { todoReducer } from "./todo.reducer";
import {applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootreducer=combineReducers({
    counter:counterReducer,
    todo:todoReducer,
});
export const store = legacy_createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)));
// export const store=legacy_createStore(rootreducer);