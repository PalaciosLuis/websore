import React from "react";
import { Header } from "./components/header";
import { ProductosLista } from "./components/products";
import 'boxicons';

function App() {
  return (
    <div className="App">
    <Header />
    <ProductosLista/>
    </div>
  );
}

export default App;
