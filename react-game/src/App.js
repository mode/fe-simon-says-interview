import React from "react";
import { shuffle, isEqual } from "lodash";
import "./App.css";
import Box from "./components/Box";
import FlashingBox from "./components/FlashingBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSequence: shuffle(["green", "red", "yellow", "blue"]),
      userChoices: []
    };
  }

  handleUserChoice = selectedColor => {
    // first check if the selected color is wrong
    this.checkLossCondition(selectedColor);
    // afterwards, push it into the list of userChoices, with a callback to check the win condition
    this.setState(prevState => {
      return { userChoices: prevState.userChoices.concat(selectedColor) };
    }, this.checkWinCondition);
  };

  checkWinCondition = () => {
    // the user wins if the array of userChoices mirrors the colorSequence
    const { userChoices, colorSequence } = this.state;
    if (isEqual(userChoices, colorSequence)) {
      alert("YOU WIN! 🎉");
      window.location.reload();
    }
  };

  checkLossCondition = nextColorChoice => {
    // the user loses if the correct color choice is not the next selected color
    const correctChoice = this.state.colorSequence[
      this.state.userChoices.length
    ];
    if (correctChoice !== nextColorChoice) {
      alert("Oh no! You lost! 😭");
      window.location.reload();
    }
  };

  render() {
    return (
      <div className="app">
        <div className="row-spaced-between">
          <Box color="green" handleUserChoice={this.handleUserChoice} />
          <Box color="red" handleUserChoice={this.handleUserChoice} />
        </div>

        <div className="row-centered">
          <FlashingBox colorSequence={this.state.colorSequence}></FlashingBox>
        </div>

        <div className="row-spaced-between">
          <Box color="yellow" handleUserChoice={this.handleUserChoice} />
          <Box color="blue" handleUserChoice={this.handleUserChoice} />
        </div>
      </div>
    );
  }
}

export default App;
