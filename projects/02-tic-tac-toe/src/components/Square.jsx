// Define el componente funcional Square que recibe propiedades como 'children', 'isSelected', 'updateBoard' y 'index'
export const Square = ({ children, isSelected, updateBoard, index }) => {
    // Determina la clase CSS para este cuadrado, basada en si está seleccionado o no
    const className = `square ${isSelected ? 'is-selected' : ''}`

    // Función que se ejecuta cuando se hace clic en este cuadrado
    const handleClick = () => {
        updateBoard(index)  // Llama a la función de actualización de tablero pasando el índice del cuadrado
    }

    // Devuelve el contenido del cuadrado y configura el manejo de clics
    return (
        <div onClick={handleClick} className={className}>
            {children}  {/* Muestra el contenido del cuadrado (generalmente 'X' o 'O') */}
        </div>
    )
}
