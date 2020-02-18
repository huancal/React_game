import React, { Component } from 'react'
import cards from "./cards.json";
import Images from "./components/Images";
import "./App.css";
import ImgContainer from './components/ImgContainer';




class App extends Component {
  //  setting this.state to images array
  state = {
    cards,
    topScore: 0,
    score: 0,
    message: "",
    shakeit: "false",
    clickedArr : [],
  };

  // img click function
   
  clickPicture = id => {
    const shuffledImg = this.shuffledImg(cards);
    this.setState({ cards: shuffledImg });

    if (this.state.clickedArr.includes(id)) {
      this.setState({ score: 0, clickedArr: [], message: "Brick! You lose! Click on an image to start over! ", shakeit: "true" });
    }

    else {
      this.setState({
        clickedArr: this.state.clickedArr.concat([id]),
        score: this.state.score + 1,
        message: "Swish!",
        shakeit: "false"
      });
    }

    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score })
    }
  }

  // shuffling images randomnly 
    shuffledImg = (picturesArr) => {
      
      for (let i = picturesArr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [picturesArr[i], picturesArr[j]] = [picturesArr[j], picturesArr[i]];
    }

    return picturesArr;
  }
  
   render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Laker GM React Game </h1>
          </header>
          <h3 className="App-intro">
            <strong>Click on an Laker to earn points, add to your total by clicking on a unique player each turn. You lose if the same player is clicked twice</strong>
            <p className="score"><strong>SCORE: {this.state.score}   | TOPScore: {this.state.topScore}</strong></p>
            <p className="message"><strong>{this.state.message}</strong></p>
          </h3>
          <ImgContainer
            shakeHeader={this.state.shakeit}
            pictures={
              this.state.cards.map(picture => (
              
                <Images
                  clickPicture={this.clickPicture}
                  id={picture.id}
                  key={picture.id}
                  name={picture.name}
                  image={picture.image}
                />
              ))}
          />
        </div>
      );
  }
}


export default App; 