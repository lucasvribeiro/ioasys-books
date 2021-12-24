import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Input from "../../components/Input/Input";
import Popup from "../../components/Popup/Popup";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

import "./Login.css";

const Login = () => {
  let navigate = useNavigate();

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

  // const refreshToken = () => {
  //   console.log(auth["refresh-token"]);
  //   axios
  //     .post(
  //       "https://books.ioasys.com.br/api/v1/auth/refresh-token",
  //       {
  //         refreshToken: auth["refresh-token"],
  //       },
  //       { headers: { Authorization: auth.authorization } }
  //     )
  //     .then((res) => {
  //       console.log("token refrescado");
  //       console.log(res.data);
  //       console.log(res.headers);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const emailChanged = (e) => {
    setEmail(e.target.value);
  };

  const passwordChanged = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (user && auth) {
      navigate("/home", { state: { user, auth } });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, auth]);

  return (
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
  );
};

export default Login;
