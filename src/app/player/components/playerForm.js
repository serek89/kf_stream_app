import React from 'react'
import { connect } from 'react-redux'
import actions from '../duck/action'

const PlayerForm = ({ setName }) => {
    const nameImput = React.createRef()

    const setPlayerName = (event) => {
        event.preventDefault()
        setName(nameImput.current.value)
    }

   return (
    <form onSubmit={ setPlayerName }>
        <input ref={ nameImput } />
        <button type="submit">save</button>
    </form>
   )
}

const mapDispatchToProps = dispatch => ({
    setName: playerName => dispatch(actions.setName(playerName))
})

export default connect(null, mapDispatchToProps)(PlayerForm)