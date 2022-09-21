import './App.css';
import Navbar from './container/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";

import Error from "./container/Error/Error";
import Principal from './container/Principal/Principal';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
      <Routes>
        <Route path="/" element={ <Principal/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </header>
    </div>
  );
}

export default App;
