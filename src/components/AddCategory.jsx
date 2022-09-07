import { useState } from "react"

export const AddCategory = ({onSetCategory}) => {

    /** Cada componente puede tener su propio estado */

    const [inputValue, setInputValue] = useState([])

    /** Recibimos el target desestructurado del event.target */
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    /** Función personalizada para prevenir que el explorador se actualice cuando se hace enter en el input */
    const onThisSubmit = (event) => {
        event.preventDefault();

        /** Evitamos usar la propiedad como función para que la implementación no quede oculta */
        //onAddCategory(old => [...old, imputValue]);

        /** Emitimos el valor de intputValue */
        onSetCategory(inputValue);
        
        /** Hacemos que el formulario quede vacío */
        setInputValue('');
    }

  return (
    <form onSubmit={(event) => onThisSubmit(event)}>
        <input
            type="text"
            placeholder="buscar gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
