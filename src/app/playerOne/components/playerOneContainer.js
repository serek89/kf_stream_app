import React from 'react'
import { connect } from 'react-redux'

const PlayerOneContainer = (props) =>
<div>
    {props.playerOne.name}
</div>

const mapStateToProps = state => ({
    playerOne: state.playerOne
})

export default connect(mapStateToProps, {})(PlayerOneContainer)