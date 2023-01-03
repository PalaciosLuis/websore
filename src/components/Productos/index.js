import React,{useContext} from 'react';
import IMG from "../../images/img01.jpg";
import { DataContext } from "../../context/Dataprovider";

export const ProductosLista = () => {

    const value=useContext(DataContext)
    const [productos]=value.productos
    console.log(productos)
    return (

        <>
            <h1 className='title'>PRODUCTOS</h1>
            <div className='productos'>
                <div className='producto'>
                    <a href='#'>

                        <div className='producto__img'>
                            <img src={IMG} alt=''></img>

                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className='price'>S/120</p>

                    </div>
                    <div className='button'>
                        <button className='btn'>
                            Añadir al carrito

                        </button>
                        <div >
                            <a href='#' className='btn'>vista</a>
                        </div>
                    </div>
                </div>


                <div className='producto'>
                    <a href='#'>

                        <div className='producto__img'>
                            <img src={IMG} alt=''></img>

                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className='price'>S/120</p>

                    </div>
                    <div className='button'>
                        <button className='btn'>
                            Añadir al carrito

                        </button>
                        <div >
                            <a href='#' className='btn'>vista</a>
                        </div>
                    </div>
                </div>


                <div className='producto'>
                    <a href='#'>

                        <div className='producto__img'>
                            <img src={IMG} alt=''></img>

                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className='price'>S/120</p>

                    </div>
                    <div className='button'>
                        <button className='btn'>
                            Añadir al carrito

                        </button>
                        <div >
                            <a href='#' className='btn'>vista</a>
                        </div>
                    </div>
                </div>

                <div className='producto'>
                    <a href='#'>

                        <div className='producto__img'>
                            <img src={IMG} alt=''></img>

                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className='price'>S/120</p>

                    </div>
                    <div className='button'>
                        <button className='btn'>
                            Añadir al carrito

                        </button>
                        <div >
                            <a href='#' className='btn'>vista</a>
                        </div>
                    </div>
                </div>


                <div className='producto'>
                    <a href='#'>

                        <div className='producto__img'>
                            <img src={IMG} alt=''></img>

                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className='price'>S/120</p>

                    </div>
                    <div className='button'>
                        <button className='btn'>
                            Añadir al carrito

                        </button>
                        <div >
                            <a href='#' className='btn'>vista</a>
                        </div>
                    </div>
                </div>


                <div className='producto'>
                    <a href='#'>

                        <div className='producto__img'>
                            <img src={IMG} alt=''></img>

                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className='price'>S/120</p>

                    </div>
                    <div className='button'>
                        <button className='btn'>
                            Añadir al carrito

                        </button>
                        <div >
                            <a href='#' className='btn'>vista</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};





