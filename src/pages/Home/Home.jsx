import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

import "./Home.css";

const Home = (props) => {
  let location = useLocation();

  const [user, setUser] = useState(location.state.user);
  const [auth, setAuth] = useState(location.state.auth);

  const [books, setBooks] = useState();

  const getBooks = () => {
    axios
      .get(
        "https://books.ioasys.com.br/api/v1/books?page=1&amount=12&category=scienceFiction",
        {
          headers: { authorization: `Bearer ${auth.authorization}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        setBooks(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBooks();
  }, [auth]);

  return (
    <div className="home-page">
      <div className="home-page-container">
        <div className="home-page-header-container">
          <Header theme="dark" />

          <div className="header-welcome">
            <span>
              Bem vindo, <b>{user.name}!</b>
            </span>

            <Button
              bgColor="transparent"
              fnColor="#333333"
              border="1px solid #333333"
              padding="3px"
              width="32px"
              height="32px"
              borderRadius="50%"
            >
              <i className="fas fa-sign-out-alt" />
            </Button>
          </div>
        </div>

        <div className="home-page-books-container">
          {books &&
            books?.map((book) => (
              <Card className="book-card">
                <div className="book-cover-container">
                  <img src={book.imageUrl} alt="Book Cover" />
                </div>
                <div className="book-info-container">
                  <div className="book-top-info">
                    <h4>{book.title}</h4>
                    <p>
                      {book.authors.map((author, i) =>
                        book.authors.length === i + 1
                          ? `${author}`
                          : `${author}, `
                      )}
                    </p>
                  </div>

                  <div className="book-bottom-info">
                    <p>{book.pageCount} páginas</p>
                    <p>Editora {book.publisher}</p>
                    <p>Publicado em {book.published}</p>
                  </div>
                </div>
              </Card>
            ))}
        </div>

        <div className="home-page-footer-container">
          <span>Página 1 de 100</span>
          <Button
            bgColor="transparent"
            fnColor="#333333"
            border="1px solid #333333"
            padding="4px"
            width="32px"
            height="32px"
            borderRadius="50%"
          >
            <i className="fas fa-chevron-left" />
          </Button>
          <Button
            bgColor="transparent"
            fnColor="#333333"
            border="1px solid #333333"
            padding="4px"
            width="32px"
            height="32px"
            borderRadius="50%"
          >
            <i className="fas fa-chevron-right" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
