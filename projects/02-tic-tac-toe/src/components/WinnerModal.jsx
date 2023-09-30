import { Square } from './Square'  // Importa el componente Square

// Define el componente funcional WinnerModal que recibe 'winner' y 'resetGame' como propiedades
export function WinnerModal ({ winner, resetGame }) {
    // Si no hay ganador (null), no mostrar nada (retorna null)
    if (winner === null) return null

    // Determina el texto a mostrar según si hay ganador o empate
    const winnerText = winner === false ? 'Empate' : 'Ganó:'

    // Devuelve la sección del modal con el texto del ganador y un botón para reiniciar el juego
    return (
        <section className='winner'>
            <div className='text'>
                <h2>{winnerText}</h2>

                <header className='win'>
                    {winner && <Square>{winner}</Square>}  {/* Muestra el símbolo del ganador si hay un ganador */}
                </header>

                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>  {/* Botón para reiniciar el juego */}
                </footer>
            </div>
        </section>
    )
}
