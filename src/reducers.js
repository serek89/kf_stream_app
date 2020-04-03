import { combineReducers } from 'redux'
import playerReducer from './app/player/duck'

const rootReducer = combineReducers({
    player: playerReducer,
})

export default rootReducer