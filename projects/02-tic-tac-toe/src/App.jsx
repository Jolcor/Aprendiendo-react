import { useState } from 'react'

import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'

function App () {
  // Estado para el tablero del juego tic-tac-toe
  const [board, setBoard] = useState(() => {
    // Obtener el estado del tablero desde el almacenamiento local o inicializarlo con null
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  // Estado para el turno del jugador actual
  const [turn, setTurn] = useState(() => {
    // Obtener el turno desde el almacenamiento local o inicializarlo con TURNS.X
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // Estado para el ganador del juego (null si no hay ganador, false si hay empate)
  const [winner, setWinner] = useState(null)

  // Función para reiniciar el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null))  // Reiniciar el tablero al estado inicial
    setTurn(TURNS.X)  // Establecer el turno nuevamente en X
    setWinner(null)  // Reiniciar el estado del ganador a null

    resetGameStorage()  // Reiniciar los datos del juego en el almacenamiento local
  }

  // Función para actualizar el tablero según las jugadas de los jugadores
  const updateBoard = (index) => {
    // No actualizar la posición si ya está ocupada o hay un ganador
    if (board[index] || winner) return

    // Actualizar el tablero con la jugada del jugador actual
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambiar al turno del otro jugador
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Guardar el estado actual del juego en el almacenamiento local
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    // Comprobar si hay un ganador o si es un empate
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)  // Establecer false en caso de empate
    }
  }

  return (
    <main className='board'>
      <h1>Tres en raya</h1>
      <button onClick={resetGame}>Reiniciar juego</button>  {/*Botón para reiniciar el juego*/}
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />  {/* Mostrar modal del ganador*/}
    </main>
  )
}

export default App  // Exportar el componente App como exportación por defecto
