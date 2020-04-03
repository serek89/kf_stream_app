import types from './types'

const INITIAL_STATE = {
    name: 'Player',
    deck: null,
  }

  const playerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.SET_NAME:
        return {
          ...state,
          name: action.name
        }
      case types.RESET:
        return {
          name: 'Player',
          deck: null
        }
      default: 
        return state
    }
  }

  export default playerReducer