// helper function to create a randomized array
// taken from https://stackoverflow.com/a/2450976/3950610
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
//
// helper function to check if two arrays that contain simple strings are equal or not
function arraysAreEqual(firstArray, secondArray) {
  const makeStringFromArray = myArray => {
    return myArray
      .slice(0)
      .sort()
      .join(",");
  };
  return makeStringFromArray(firstArray) === makeStringFromArray(secondArray);
}

const appState = {
  colorSequence: shuffle(["green", "red", "yellow", "blue"]),
  userChoices: []
};

function addUserChoice(selectedColor) {
  // first check if the users choice, makes them lose the game
  const correctChoice = appState.colorSequence[appState.userChoices.length];
  if (selectedColor !== correctChoice) {
    alert("Oh no! You lost! 😭");
    window.location.reload();
  }

  // then add their selection to user choices
  appState.userChoices.push(selectedColor);

  // lastly check if the user has won the game
  if (arraysAreEqual(appState.userChoices, appState.colorSequence)) {
    alert("YOU WIN! 🎉");
    window.location.reload();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  // take the random sequence of colors, and add a transparent color at the end
  // so that when the page loads, the flashingbox goes thru all the colors and ends with transparent
  const colorsToFlash = appState.colorSequence.concat("transparent");
  const flashingBox = document.querySelector(".flashing-box");
  colorsToFlash.forEach((color, idx) => {
    setTimeout(() => {
      flashingBox.style.backgroundColor = color;
    }, idx * 1000);
  });

  // listen to all the clicks on the app container
  const appContainer = document.querySelector(".app");
  appContainer.addEventListener("click", event => {
    // if a click is on a box, that is not the flashing box
    const elClassList = event.target.classList;
    if (elClassList.contains("box") && !elClassList.contains("flashing-box")) {
      // register that box's color as a user choice
      const boxColor = event.target.classList[1];
      addUserChoice(boxColor);
    }
  });
});
