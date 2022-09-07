// import React from 'react'  /** No es necesario importar react, como estamos en un proyecto de react, ya el framework lo asume */
import {useState} from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    /** Cuando se quiere trabajar con información que cambia el html, es necesario pensar en algún hook de react que permita mantener el estado
     */

    const [categories, setcategories] = useState(['One Punch', 'Dragon Ball']);
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
        <button onClick={AddNewCategory}>Agregar</button>
        {/** Listado de Gif */}
        <ol>
            {/** Tomamos el arreglo categories para iterarlo con un map.  */}
            {
                categories.map(category => { 
                    /** el elemento li debe llevar una key unica. Esta llave única no puede ser el indice del map*/
                    return <li key={category}> {category} </li> 
                })
            }
        </ol>
    </>
  )
}
