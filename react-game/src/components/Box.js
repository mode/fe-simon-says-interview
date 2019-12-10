import React from "react";

function Box({color, handleUserChoice}) {
  function handleClick(e) {
    handleUserChoice(color)
  }
  return <div className={`box ${color}`} onClick={handleClick}/>;
}

export default Box;
