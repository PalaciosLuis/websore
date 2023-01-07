import React from "react";
import { Header } from "./components/Header";
import { BrowserRouter as Router} from "react-router-dom";
import 'boxicons';
import { Paginas } from './components/paginas';
import { DataProvider } from "./context/Dataprovider";
import  {Carrito}  from "./components/Carrito";

function App() {
  return (
    <DataProvider>
    <div className="App">
  
      <Router>
        <Header />
        <Paginas />
        <Carrito />
        </Router>
    </div>
    </DataProvider>
  );
}

export default App;
