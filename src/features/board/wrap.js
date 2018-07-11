import React from 'react'
import Player from '../player'
import Board from '../board'

function Wrap(props) {
    return(
        <div style={{
            position: 'relative',
            width: 600,
            height: 600,
            border: '2px solid #333',
            margin: '20px auto'
        }}>
            <Board />
            <Player />
        </div>
    )
}

export default Wrap;