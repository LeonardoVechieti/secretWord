import React from 'react'
import './EndScreen.css'

const EndScreen = ({restartGame}) => {
  return (
    <div>
        <h1>Game Over</h1>
        <p>Click the button below to restart the game!</p>
        <button onClick={restartGame}>Restart</button>
    </div>
  )
}

export default EndScreen