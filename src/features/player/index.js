import React from 'react'
import { connect } from 'react-redux'
import handleMovement from './movement'

function Player(props) {
    return (
        <div 
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundColor: '#333',
                width: 200,
                height: 30,
                transition: 'left 0.1s'
            }}
        ></div>
    )
}

function mapStateToProps(state) {
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player))