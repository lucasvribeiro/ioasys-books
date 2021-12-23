import React from "react";
import Input from "../../components/Input/Input";

import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <Input id="email" type="email" placeholder="Email" />
      <Input id="password" type="password" placeholder="Senha" />
    </div>
  );
};

export default Login;
