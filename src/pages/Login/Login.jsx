import React, { useEffect, useState } from "react";

import Input from "../../components/Input/Input";
import Popup from "../../components/Popup/Popup";
import Button from "../../components/Button/Button";

import logo from "../../images/logo.png";

import "./Login.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState();
  const [auth, setAuth] = useState();

  const [popupIsVisible, setPopupIsVisible] = useState(false);

  const login = () => {
    axios
      .post("https://books.ioasys.com.br/api/v1/auth/sign-in", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.headers);

        setUser(res.data);
        setAuth(res.headers);
        setPopupIsVisible(false);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setPopupIsVisible(true);
        }
      });
  };

  const emailChanged = (e) => {
    setEmail(e.target.value);
  };

  const passwordChanged = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-page">
      <div className="login-page-container">
        <div className="login-page-header">
          <img src={logo} alt="Ioasys Logo" />
          <span>Books</span>
        </div>

        <div className="login-page-content">
          <Popup
            content="E-mail e/ou senha inválidos."
            visible={popupIsVisible}
          >
            <Input
              value={email}
              onChange={emailChanged}
              id="email"
              type="email"
              placeholder="Email"
            />
            <Input
              value={password}
              onChange={passwordChanged}
              id="password"
              type="password"
              placeholder="Senha"
            />
          </Popup>
          <Button onClick={login} className="login-button">
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
