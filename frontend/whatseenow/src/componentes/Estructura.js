import React from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import Header from "./Header";
import Targetapeliculas from "./Targetapeliculas";
import "./estructura.css";
import Registro from "./Registro";

export default class Estructura extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="contenido">
          <div className="iconoizq">
            <LeftOutlined />
          </div>

          <div className="targeta">
            <Targetapeliculas />
          </div>

          <div>
            <div className="iconoder">
              <RightOutlined />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
