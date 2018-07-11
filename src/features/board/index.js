import React from 'react'
import { BOARD_WIDTH, BOARD_HEIGHT } from '../../config/constants'

function Board(props) {
    return (
        <div style={{
            position: 'relative',
            width: BOARD_WIDTH,
            height: BOARD_HEIGHT,
        }}>
        </div>
    )
}

export default Board