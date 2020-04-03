import types from './types'

const setName = name => ({
    type: types.SET_NAME, name
})

const reset = () => ({
    type: types.RESET
})

export default {
    setName,
    reset
}