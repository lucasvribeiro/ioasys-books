import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

import "./Home.css";
import Modalr from "../../components/Modalr/Modalr";

const Home = (props) => {
  let location = useLocation();

  const [user] = useState(location.state.user);
  const [auth] = useState(location.state.auth);

  const [books, setBooks] = useState();

  const [currentBook, setCurrentBook] = useState();
  const [modalIsVisible, setModalIsVisible] = useState(false);

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

  const handleCardClicked = (book) => {
    setCurrentBook(book);
    setModalIsVisible(true);
  };

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  useEffect(() => {
    console.log(currentBook);
  }, [currentBook]);

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
              <Card
                className="book-card"
                onClick={() => handleCardClicked(book)}
              >
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

      {currentBook && (
        <Modalr
          closable={false}
          visible={modalIsVisible}
          onCancel={() => setModalIsVisible(false)}
        >
          <div className="modal-container">
            <img src={currentBook.imageUrl} alt="Book Cover" />

            <div className="modal-content-container">
              <div className="modal-book-top">
                <h1>{currentBook.title}</h1>
                <p>
                  {currentBook.authors.map((author, i) =>
                    currentBook.authors.length === i + 1
                      ? `${author}`
                      : `${author}, `
                  )}
                </p>
              </div>

              <div className="modal-book-middle">
                <h4>INFORMAÇÕES</h4>

                <div className="modal-book-info">
                  <span>Páginas</span>
                  <span>{currentBook.pageCount}</span>
                </div>

                <div className="modal-book-info">
                  <span>Editora</span>
                  <span>{currentBook.publisher}</span>
                </div>

                <div className="modal-book-info">
                  <span>Idioma</span>
                  <span>{currentBook.language}</span>
                </div>

                <div className="modal-book-info">
                  <span>Título Original</span>
                  <span>{currentBook.title}</span>
                </div>

                <div className="modal-book-info">
                  <span>ISBN-10</span>
                  <span>{currentBook.isbn10}</span>
                </div>

                <div className="modal-book-info">
                  <span>ISBN-13</span>
                  <span>{currentBook.isbn13}</span>
                </div>
              </div>

              <div className="modal-book-bottom">
                <h4>RESENHA DA EDITORA</h4>
                <p>
                  <i
                    className="fas fa-quote-left"
                    style={{ fontSize: "24px", marginRight: "8px" }}
                  />
                  {currentBook.description.substring(0, 320)}...
                </p>
              </div>
            </div>
          </div>
        </Modalr>
      )}
    </div>
  );
};

export default Home;
