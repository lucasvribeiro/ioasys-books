import React from "react";

import Card from "../../components/Card/Card";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Card className="book-card">
        <div className="book-cover-container">capa</div>
        <div className="book-info-container">
          <div className="book-top-info">
            <h3>Book title</h3>
            <p>Author</p>
          </div>

          <div className="book-bottom-info">
            <p>pages</p>
            <p>editora</p>
            <p>published</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
