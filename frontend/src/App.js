import React, { Component } from "react";
import css from "./App.module.css";
import Candidates from "./components/candidates/Candidates";
import Header from "./components/Header";
import Spinner from "./components/Spinner";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      candidates: "",
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      fetch("http://localhost:8080/votes")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.setState({
            candidates: json.candidates,
          });
        });
    }, 1000);
  }

  render() {
    const { candidates } = this.state;

    if (candidates.length === 0) {
      return (
        <div className={css.spinner}>
          <Spinner />
        </div>
      );
    }

    return (
      <div className={css.vote}>
        <Header>Votação</Header>
        <Candidates>{candidates}</Candidates>
      </div>
    );
  }
}
