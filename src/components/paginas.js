import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { Inicio } from "./Inicio";
import { ProductosLista } from './Productos';
export const Paginas = () => {
    /*DATOSSSSSS
    SWICHT ---------------------> ROUTES
    COMPONENT -----------------> ELEMENT 
    {<FUNCION/>}

    */
    return (
        <section>

       
            <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Productos" element={<ProductosLista />} />
           

            </Routes>
      
       

        </section>
    );
}


