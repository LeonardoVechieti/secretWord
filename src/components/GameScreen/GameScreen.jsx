import React from 'react'
import './GameScreen.css'

const GameScreen = ({verifyLetter}) => {
  return (
    <div>
        <button onClick={verifyLetter}>Finalizar Jogo</button>
    </div>
  )
}

export default GameScreen