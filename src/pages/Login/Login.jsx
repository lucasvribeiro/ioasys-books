import React from "react";

import Input from "../../components/Input/Input";
import Popup from "../../components/Popup/Popup";
import Button from "../../components/Button/Button";

import logo from "../../images/logo.png";

import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-page-container">
        <div className="login-page-header">
          <img src={logo} alt="Ioasys Logo" />
          <span>Books</span>
        </div>

        <div className="login-page-content">
          <Popup content="E-mail e/ou senha inválidos." visible={false}>
            <Input id="email" type="email" placeholder="Email" />
            <Input id="password" type="password" placeholder="Senha" />
          </Popup>
          <Button className="login-button">Entrar</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
