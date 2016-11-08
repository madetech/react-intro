import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import films from '../reducers/films'

const reducer = combineReducers({ films })
const middlewares = applyMiddleware(thunk)
const store = createStore(reducer, middlewares)

export default store
