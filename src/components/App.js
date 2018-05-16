import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import logo from "./logo.svg";
import "./style/App.css";
import Form from "./Form";
import Success from "./Success";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Form} />
        <Route path="/success" component={Success} />
      </div>
    );
  }
}

export default App;
