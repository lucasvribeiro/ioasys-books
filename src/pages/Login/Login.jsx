import React from "react";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <Input id="email" type="email" placeholder="Email" />
      <Input id="password" type="password" placeholder="Senha" />

      <Button>Entrar</Button>
    </div>
  );
};

export default Login;
