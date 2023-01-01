import React from "react";
import { Header } from "./components/Header";
import { BrowserRouter as Router} from "react-router-dom";
import 'boxicons';
import { Paginas } from './components/paginas';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Paginas />
        </Router>
      


    </div>
  );
}

export default App;
