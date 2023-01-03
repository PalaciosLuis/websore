import React from "react";
import { Header } from "./components/Header";
import { BrowserRouter as Router} from "react-router-dom";
import 'boxicons';
import { Paginas } from './components/paginas';
import { DataProvider } from "./context/Dataprovider";

function App() {
  return (
    <DataProvider>
    <div className="App">
  
      <Router>
        <Header />
        <Paginas />
        </Router>
    </div>
    </DataProvider>
  );
}

export default App;
