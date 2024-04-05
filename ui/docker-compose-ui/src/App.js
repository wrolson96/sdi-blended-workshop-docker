import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
//import styled from "styled-components";
// import cors from 'cors';

// app.use(cors());

function App() {
  const [authors, setAuthors] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/authors")
      .then((res) => res.json())
      .then((data) => {
        let names = data.map((author) => {
          return author.name;
        });
        console.log(names);
        setAuthors(names);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {authors ? (
          authors.map((name) => {
            return <p>{name}</p>;
          })
        ) : (
          <p>Loading...</p>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
