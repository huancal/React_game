import React, { Component } from 'react'
import cards from "./cards.json";
import Header from "./components/Header";
import Images from "./components/Images";
import "./App.css";



 class App extends Component {
  
   
   
   
   render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Click Game </h1>
        </header>
        <h3 className="App-intro">
          <strong>Click on an image to earn points, add to your total by clicking on a unique image each turn. You lose if the same image is clicked twice</strong>
          <p className ="score"><strong>SCORE:    | TOPScore:</strong></p>
          <p className= "message"></p>
        </h3>







      </div>
    )
  }
}


export default App; 