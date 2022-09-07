// import React from 'react'  /** No es necesario importar react, como estamos en un proyecto de react, ya el framework lo asume */
import {useState} from 'react';
import {AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

    /** Cuando se quiere trabajar con información que cambia el html, es necesario pensar en algún hook de react que permita mantener el estado
     */

    const [categories, setcategories] = useState(['One Punch']);
    const AddNewCategory = (categoryString) => {
        /** validamos si el elemento que se quiere agregar en categories ya existe, para no agregarlo nuevamente*/
        if(categories.includes(categoryString)) return;
        /** Los tres puntos seguidos son el operador spread, que me permite mantener el arreglo del useState*/
        setcategories(old => [...old, categoryString])
        console.log(categoryString);
    }

    return (
    <>
        {/** Sección Titulo */}
        <h1>GifExpertApp</h1>
        {/** Sección Input */}
        {/** Podemos enviar una referencia a una función como una propiedad en nuestro custom component. 
         * <AddCategory onAddCategory={setcategories}></AddCategory>
         * Sin embargo, la implementación queda oculta, por lo tanto
         * se recomienda que el componente hijo devuelva un evento. En el siguiente caso, el componente AddCategory devuelve un evento que se le pasa a la función
         * AddCategory
         */}
       
        <AddCategory onSetCategory={newCategory => AddNewCategory(newCategory)}></AddCategory>
        {/** Listado de Gif */}
        {
            categories.map( (cat) => (
                <GifGrid key={cat} category={cat}/>
            ))
        }
    </>
  )
}
