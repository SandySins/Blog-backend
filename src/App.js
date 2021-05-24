import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Heading from "./Components/Heading";
import Home from './Components/Home/Home'
import Bollywood from './Components/Bollywood/Bollywood'
import { BrowserRouter, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Heading />
      <Navbar />
    <Route path="/" component={Home} exact />
    <Route path="/Bollywood" component={Bollywood} exact />
    </div>
    </BrowserRouter>
  );
}

export default App;
