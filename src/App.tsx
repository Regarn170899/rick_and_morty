import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import RouterConfig from "./component/RouterConfig/RouterConfig";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <RouterConfig/>
    </BrowserRouter>

    </div>
  );
}

export default App;
