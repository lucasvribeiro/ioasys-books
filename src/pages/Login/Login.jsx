import React from "react";

import Input from "../../components/Input/Input";
import Popup from "../../components/Popup/Popup";

import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <Input id="email" type="email" placeholder="Email" />
      <Input id="password" type="password" placeholder="Senha" />

      <Popup content="E-mail e/ou senha inválidos." title="teste">
        teste
      </Popup>
    </div>
  );
};

export default Login;
