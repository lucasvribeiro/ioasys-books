import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Input from "../../components/Input/Input";
import Popup from "../../components/Popup/Popup";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";

import "./Login.css";

import {
  getAuthorization,
  getUser,
  setAuthorization,
  setUser,
} from "../../services/auth";

const Login = () => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [user] = useState(getUser());
  const [auth] = useState(getAuthorization());

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [popupIsVisible, setPopupIsVisible] = useState(false);

  const login = () => {
    setLoading(true);

    axios
      .post("https://books.ioasys.com.br/api/v1/auth/sign-in", {
        email,
        password,
      })
      .then((res) => {
        setAuthorization(res.headers.authorization);
        setUser(res.data);
        setLoading(false);

        navigate("/home");

        setPopupIsVisible(false);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401 || error.response.status === 400) {
          setPopupIsVisible(true);
        }

        setLoading(false);
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
              content="E-mail e/ou senha incorretos."
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

            <Button onClick={login} className="login-button" disabled={loading}>
              {loading && (
                <>
                  <Loader loading={true} size="small"></Loader>
                  &nbsp;&nbsp;
                </>
              )}
              Entrar
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default Login;
