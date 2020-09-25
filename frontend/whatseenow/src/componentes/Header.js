import React from "react";

import { Button, Input, Popover } from "antd";
import "./header.css";
import Modal1 from "./Modal1";
const { Search } = Input;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
      mostrarReferencia: false,
    };
  }

  render() {
    return (
      <div>
        <header className="header">
          <div className="txWhatseenow">
            <h2>What see now </h2>
          </div>

          <div className="buscador">
            <Search
              placeholder="Busca una pelicula"
              onSearch={(value) => {
                this.props.busqueda(value);
              }}
            />
          </div>

          <div className="btcuenta">
            <Modal1></Modal1>
          </div>

          <div className="btingresar">
            <Button onClick={{}}>Registrate</Button>
          </div>
        </header>
      </div>
    );
  }
}
