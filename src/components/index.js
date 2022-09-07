/** Este es un archivo de barril que nos servirá para manejar las importaciones de los archivos que creamos. Cuando se importa alguno de los componentes y hacemos referencia
 * solo a la carpeta components (en este caso) desde la importación, entonces se va a buscar por defecto en la carpeta index.js
 * Al declarar estos export, las importaciones se podrán manejar de la siguiente forma:
 * import {AddCategory, GifGrid} from './components'
 */
export * from './AddCategory';
export * from './GifGrid';
export * from './GifItem';