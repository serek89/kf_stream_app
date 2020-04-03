import React from 'react'
import { connect } from 'react-redux'

const PlayerContainer = (props) =>
<div>
    {props.player.name}
</div>

const mapStateToProps = state => ({
    player: state.player
})

export default connect(mapStateToProps, {})(PlayerContainer)