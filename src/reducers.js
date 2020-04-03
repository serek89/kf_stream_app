import { combineReducers } from 'redux'
import playerOneReducer from './app/playerOne/duck'
import playerTwoReducer from './app/playerTwo/duck'

const rootReducer = combineReducers({
    playerOne: playerOneReducer,
    playerTwo: playerTwoReducer
})

export default rootReducer