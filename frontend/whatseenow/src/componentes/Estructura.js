import React from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import Header from "./Header";
import Targetapeliculas from "./Targetapeliculas";
import "./estructura.css";
import axios from "axios";

import Registro from "./Registro";

export default class Estructura extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    busquedaestructura: "",
    datos: [],
    ren: false,
    indiceE: 0,
  };

  busquedav = (valorsito) => {
    this.setState({ busquedaestructura: valorsito });
    console.log(valorsito);

    let req = valorsito;
    req =
      "https://api.themoviedb.org/3/search/movie?api_key=a804b0da37710e733d1d87cf53bb816b&query=" +
      req;

    console.log(req);
    const self = this;
    axios
      .get(req)
      .then((response) => {
        // handle success
        console.log(response);
        self.setState({ datos: response.data.results });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    console.log(this.state.datos);
    self.setState({ indiceE: 0 });
  };

  render() {
    return (
      <div>
        <Header busqueda={this.busquedav} />
        <div className="contenido">
          <div className="iconoizq">
            <LeftOutlined
              onClick={() => {
                if (this.state.indiceE > 0) {
                  this.setState({ indiceE: this.state.indiceE - 1 });
                }
              }}
            />
          </div>
          <div className="targeta">
            {this.state.datos.length > 0 && (
              <Targetapeliculas
                datos={this.state.datos}
                indice={this.state.indiceE}
              />
            )}
          </div>

          <div>
            <div className="iconoder">
              {this.state.indiceE <= this.state.datos.length && (
                <RightOutlined
                  onClick={() => {
                    if (this.state.indiceE < this.state.datos.length - 1) {
                      this.setState({ indiceE: this.state.indiceE + 1 });
                    }
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
