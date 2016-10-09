import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'

const defaultState = {}
function weather(state=defaultState) {
    return state
}

const weatherReducer = combineReducers({
    weather,
    form: formReducer,
    routing: routerReducer
})

export default weatherReducer