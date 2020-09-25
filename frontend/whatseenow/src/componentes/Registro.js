import React from "react";
import { Form, Input, InputNumber, Button, Result } from "antd";
import "./registro.css";
import Header from "./Header";
import axios from "./axios.js";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export default class Registro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailrepetido: false,
      registroCorrecto: false,
      nombre: "",
      email: "",
      password: "",

      required: "${label} is required!",
      types: {
        email: "${label} is not validate email!",
        number: "${label} is not a validate number!",
      },
      number: {
        range: "${label} must be between ${min} and ${max}",
      },
    };
  }

  enviarin = (values) => {
    console.log("Received values of form: ", values);
    console.log("jiji");
    console.log(values.user.nombre);
    let datos = {
      nombre: values.user.nombre,
      email: values.user.email,
      password: values.user.password,
    };

    axios
      .post("http://127.0.0.1:8000/api/Usuario/", {
        nombre: values.user.nombre,
        email: values.user.email,
        password: values.user.password,
      })
      .then((response) => {
        if (response.status === 201) {
          this.setState({ registroCorrecto: true, emailrepetido: false });
        } else {
          this.setState({ emailrepetido: true, registroCorrecto: false });
        }
      })
      .catch(this.setState({ emailrepetido: true, registroCorrecto: false }));
  };

  render() {
    return (
      <div>
        <Header></Header>
        <div className="formulario">
          <Form
            name="nest-messages"
            validateMessages={this.state}
            onFinish={this.enviarin}
          >
            <Form.Item
              name={["user", "nombre"]}
              label="Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ type: "email", required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "age"]}
              label="Age"
              rules={[{ type: "number", min: 0, max: 99, required: true }]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              name={["user", "password"]}
              label="Constraseña"
              rules={[{ required: true }]}
            >
              <Input.Password
                placeholder="input password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item
              name={["user", "introduction"]}
              label="Confirme la Contraseña"
              rules={[{ required: true }]}
            >
              <Input.Password
                placeholder="input password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Enviar
              </Button>
            </Form.Item>
          </Form>
          {this.state.emailrepetido && (
            <Result
              status="warning"
              title="El Email que ingresaste ya existe"
              extra={
                <Button type="primary" key="console">
                  Go Console
                </Button>
              }
            />
          )}

          {this.state.registroCorrecto && (
            <Result
              status="success"
              title="Bienvenido a nuestra familia <3"
              subTitle="Por favor revisa tu correo para confirmar tu cuenta"
              extra={[
                <Button type="primary" key="console">
                  Go Console
                </Button>,
              ]}
            />
          )}
        </div>
      </div>
    );
  }
}
