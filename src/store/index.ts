import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import counterReducer from './module/counter'
import usersReducer from './module/user'

const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger))

export default store
