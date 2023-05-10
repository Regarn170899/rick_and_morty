import React from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import RouterConfig from "./components/RouterConfig/RouterConfig";
import { useFavoriteChars } from "@hooks/index";

function App() {
  useFavoriteChars();
  return (
    <div className="App">
      <HashRouter>
        <RouterConfig />
      </HashRouter>
    </div>
  );
}

export default App;
