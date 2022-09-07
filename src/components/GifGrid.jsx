import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category);
   

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2> ) /** Este es un condicional lógico... como un if abreviado que ejecuta el parentesis si el boleano es verdadero */
            }
            {/** No es posible usar la palabra reservada class en estos componentes jsx porque es reservada del framework, en su lugar es necesario usar className */}
            <div className="card-grid">
                {
                    images.map(img => (
                        /** el img también se podría desestructurar con ({id, title}). Si el objeto tiene muchas propiedades se puede usar el operador spread y será posible
                         * acceder a esas propiedades dentro del componente hijo; en este caso, GifItem.
                         */
                        <GifItem key={img.id} image={img}/>
                    ))
                }
            </div>
        </>
    )
}


