import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

/** Este es un hook personalizado de react. No es más que una función de javascript que sirve para reutilizar código */
export const useFetchGifs = (category) => {
    const[images, setImages] =useState([]);
    const[isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    useEffect(() => {getImages()},[]);

    return {
        images: images, //esto se puede sobreescribir  como images sólamente ya que tienen el mismo nombre.
        isLoading: isLoading
    }
}
