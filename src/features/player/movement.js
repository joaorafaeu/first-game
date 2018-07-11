import store from '../../config/store'
import { BOARD_WIDTH } from '../../config/constants'

export default function handleMovement(player) {

    function getNewPosition(direction) {
        const oldPos = store.getState().player.position
        switch(direction) {
            case 'LEFT':
              return [oldPos[0]-40, oldPos[1]]
            case 'RIGHT':
              return [oldPos[0]+40, oldPos[1]]
            default:
              console.log(direction)
        }
    }

    function observeBoundaries(oldPos, newPos) {
        return (newPos[0] >= 0 && newPos[0] <= (BOARD_WIDTH - 200))
                ? newPos : oldPos
    }

    function directionMove(direction) {
        const oldPos = store.getState().player.position
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: observeBoundaries(oldPos, getNewPosition(direction))
            }
        })
    }

    function handleKeyDown(e) {
        switch(e.keyCode) {
            case 37:
              return directionMove('LEFT')
            case 39:
              return directionMove('RIGHT')

            default:
              console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player;
}