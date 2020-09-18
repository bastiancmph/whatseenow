import { Card, Avatar } from "antd";

import React from "react";
import { Button } from "antd";
import "./Targetapeliculas.css";

const { Meta } = Card;

export default class Targetaspeliculas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card
          style={{ width: 500 }}
          cover={
            <img
              className="imagen"
              alt="example"
              https
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <Button type="primary">LIKE</Button>,
            <Button danger>Dislike</Button>,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="PELICULA DE PRUEBA"
            description="texto para una pelicula de prueba que estoy aburrido de programar odio el desarrollo web is the description"
          />
        </Card>
      </div>
    );
  }
}
