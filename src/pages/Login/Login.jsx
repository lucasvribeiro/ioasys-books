import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  getAuthorization,
  getUser,
  setAuthorization,
  setUser,
} from "../../services/auth";

import Input from "../../components/Input/Input";
import Popup from "../../components/Popup/Popup";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

import "./Login.css";

const Login = () => {
  let navigate = useNavigate();

  const [user] = useState(getUser());
  const [auth] = useState(getAuthorization());

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [popupIsVisible, setPopupIsVisible] = useState(false);

  const login = () => {
    axios
      .post("https://books.ioasys.com.br/api/v1/auth/sign-in", {
        email,
        password,
      })
      .then((res) => {
        setAuthorization(res.headers.authorization);
        setUser(res.data);
        navigate("/home");

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

  useEffect(() => {
    if (auth && user) navigate("/home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !auth && (
      <div className="login-page">
        <div className="login-page-container">
          <Header theme="light" />

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
    )
  );
};

export default Login;
