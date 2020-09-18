import React from "react";
import Sider from "./sider";
import requests from "./requests";
import { Input } from "antd";
import Row from "./Row";
import Demo from "./login";
import "./home.css";
const { Search } = Input;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowF: "",
      mostrarReferencia: false,
    };
  }

  render() {
    return (
      <div>
        <div className="general">
          <div className="buscador">
            <Search
              placeholder="input search text"
              onSearch={(busqueda) => {
                console.log(busqueda);
                this.setState({ rowF: busqueda });
                this.setState({ mostrarReferencia: true });
              }}
              style={{
                width: 200,
                alignContent: "center",
                alignSelf: "center",
              }}
            />
          </div>

          {console.log(this.state.rowF)}
          {this.state.mostrarReferencia && (
            <Row
              title={this.state.rowF}
              fetchUrl="http://127.0.0.1:8000/api/Usuario/"
            />
          )}

          <Demo />
        </div>
      </div>
    );
  }
}
