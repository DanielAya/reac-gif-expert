import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

    const[images, setImages] =useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    /** Nunca ejecutar directamente una función desde un funcional component porque siempre que se renderice el componente se volverá a ejecutar la función 
     * Con el useEffect es posible disparar efectos secundarios; es decir, algún proceso que se puede ejecutar cuando algo suceda; por ejemplo si cambia un counter
     * o la categoria cambie o el componente se renderiza por primera vez. Se puede disparar efectos en cualquier punto que se necesite
    */

    /**
     * El segundo argumento del hook useEffect son las dependencias, si el arreglo de dependencias se deja vacío entonces significa que se ejecutará sólo la primera vez
     * que se renderice este componente. En AddCategory este componente se está creando cada vez que se agrega una nueva categoria desde el input; las anteriores categorias
     * ya se han renderizado y no se vuelven a renderizar
     */
    useEffect(() => {getImages()},[]);

    return (
        <>
            <h3>{category}</h3>
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


