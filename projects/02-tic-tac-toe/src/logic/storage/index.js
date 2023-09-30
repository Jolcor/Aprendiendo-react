// Función para guardar el estado del juego en el almacenamiento local
export const saveGameToStorage = ({ board, turn }) => {
    // Guardar el tablero y el turno en el almacenamiento local
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

// Función para reiniciar el almacenamiento local del juego
export const resetGameStorage = () => {
    // Eliminar el tablero y el turno del almacenamiento local
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}
