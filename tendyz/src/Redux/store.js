import {reducer} from "./reducers/index";
import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import { prodReducer } from "./reducers/Reducer";
// export const Store = legacy_createStore(reducer,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
import thunk from "redux-thunk";

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        
        }) : compose;


const middleware = [thunk];

const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
);

const rootReducer = combineReducers({
    reducer
});

export const Store = legacy_createStore(reducer, enhancer);


