import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import calculadoraDucks from "./calculadoraDucks";

const rootReducers = combineReducers({
    result: calculadoraDucks
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    rootReducers,    
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store