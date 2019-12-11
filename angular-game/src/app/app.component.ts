import { Component } from "@angular/core";
import { shuffle, isEqual } from "lodash";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  colorSequence = shuffle(["green", "red", "yellow", "blue"]);
  userChoices = [];

  checkLossCondition(colorChoice) {
    const correctChoice = this.colorSequence[this.userChoices.length];
    if (correctChoice !== colorChoice) {
      alert("Oh no! You lost! 😭");
      window.location.reload();
    }
  }

  checkWinCondition() {
    const userHasWon = isEqual(this.colorSequence, this.userChoices);
    if (userHasWon) {
      alert("YOU WIN! 🎉");
      window.location.reload();
    }
  }

  handleUserChoice = colorClicked => {
    this.checkLossCondition(colorClicked);
    this.userChoices.push(colorClicked);
    this.checkWinCondition();
  }
}
