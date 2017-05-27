import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
//import Destinations from "./destinations";
import UpdateOrigin from "./updateOrigin";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Quickest Way</h2>
        </div>
        <UpdateOrigin />
      </div>
    );
  }
}

export default App;
