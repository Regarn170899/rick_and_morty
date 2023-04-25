import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import RouterConfig from "./components/RouterConfig/RouterConfig";
import {useFavoriteChars} from "@hooks/index";

function App() {
  useFavoriteChars()
  return (
    <div className="App">
    <BrowserRouter>
        <RouterConfig/>
    </BrowserRouter>
    </div>
  );
}

export default App;
