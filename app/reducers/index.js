import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

const defaultState = {}
function weather(state=defaultState, action) {
    return state
}

const weatherReducer = combineReducers({
    weather,
    routing: routerReducer
})

export default weatherReducer