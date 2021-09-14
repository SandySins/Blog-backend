import "./App.css";
import React from "react";

import Home from './Components/Home/Home'
import Bollywood from './Components/Bollywood/Bollywood'
import CardDetails from './Components/Article/Article'
import { BrowserRouter, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="container">
      
    <Route path="/" component={Home} exact />
    <Route path="/Bollywood" component={Bollywood} exact />
 
    <Route path="/CardDetails" component={CardDetails} exact />
    </div>
    </BrowserRouter>
  );
}

export default App;
