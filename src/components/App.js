import React, { Component } from "react";
import logo from "./logo.svg";
import "./style/App.css";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">貸款申請競價</h1>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
