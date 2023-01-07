import React,{useContext} from 'react';
import Nike from "../../images/Nike.jpg";
import {Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";

export const Header = () => {


    const value = useContext(DataContext);
    const [menu,setMenu]=value.menu;

    const toogleMenu =()=>{
        setMenu(true)
    }

    return (
    
        <header>
        
      
            <Link to='/'>
                <div className='logo'>
                    <img src={Nike} alt='logo' width="150" />

                </div>
            </Link>
            <ul>
                <li>
                    <Link to='/'>INICIO</Link>
                </li>
                <li>
                    <Link to='/Productos'>PRODUCTOS</Link>
                </li>


            </ul>
            <div className='cart' onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className='item__total'>0</span>

            </div>
            
     
        </header>
       

    );
}


