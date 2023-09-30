import { WINNER_COMBOS } from '../constants.js'  // Importa las combinaciones ganadoras desde las constantes

// Comprueba si hay un ganador basándose en el estado actual del tablero
export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]  // Devuelve el jugador ganador (X u O)
        }
    }
    return null // Devuelve null si no hay ganador
}

// Comprueba si el juego ha terminado en empate
export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
}
