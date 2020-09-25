import { Card } from "antd";
import axios from "./axios.js";
import { Statistic, Button } from "antd";
import React from "react";
import "./Targetapeliculas.css";

const { Meta } = Card;

export default class Targetaspeliculas extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    urlbase: "https://image.tmdb.org/t/p/w500/",
  };

  render() {
    return (
      <div>
        <Card
          style={{ width: 450 }}
          cover={
            <img
              className="imagen"
              alt="example"
              https
              src={
                this.state.urlbase +
                this.props.datos[this.props.indice].poster_path
              }
            />
          }
          actions={[
            <Button
              type="primary"
              onClick={() => {
                axios
                  .post("http://127.0.0.1:8000/api/Peliculas/", {
                    nombre: this.props.datos[this.props.indice].title,
                    genero: this.props.datos[this.props.indice].genre_ids[0],
                    Calificacion: this.props.datos[this.props.indice]
                      .vote_count,
                    imagen:
                      this.state.urlbase +
                      this.props.datos[this.props.indice].poster_path,
                    CortaDescripcion: this.props.datos[this.props.indice]
                      .overview,
                  })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }}
            >
              LIKE
            </Button>,
            <Button
              danger
              onClick={() => {
                axios
                  .post("http://127.0.0.1:8000/api/Peliculas/", {
                    nombre: this.props.datos[this.props.indice].title,
                    genero: this.props.datos[this.props.indice].genre_ids[0],
                    Calificacion: this.props.datos[this.props.indice]
                      .vote_count,
                    imagen:
                      this.state.urlbase +
                      this.props.datos[this.props.indice].poster_path,
                    CortaDescripcion: this.props.datos[this.props.indice]
                      .overview,
                  })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }}
            >
              Dislike
            </Button>,
          ]}
        >
          <Meta
            avatar={
              <Statistic
                title="Votos Positivos"
                value={this.props.datos[this.props.indice].vote_count}
              />
            }
            title={this.props.datos[this.props.indice].title}
            description={this.props.datos[this.props.indice].overview}
          />
        </Card>
      </div>
    );
  }
}
