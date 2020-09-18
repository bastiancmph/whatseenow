import React from "react";
import Estructura from "./componentes/Estructura";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registro from "./componentes/Registro";

function App() {
  return (
    <Router>
      <Route path="/registro" component={Registro} />
      <Route exact path="/home" component={Estructura} />
    </Router>
  );
}

export default App;
