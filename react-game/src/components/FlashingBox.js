import React from "react";

class FlashingBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetIndex: 0
    };
  }

  componentDidMount() {
    // when the component mounts, add a interval timer to tick the index's of the colors
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // after every tick, check to see if component has cycled thru all the color sequence
    if(prevState.targetIndex + 1 === prevProps.colorSequence.length){
      // if it has, clear the tick interval
      clearInterval(this.interval);
    }
  }

  tick() {
    this.setState((prevState) => {
      return { targetIndex: prevState.targetIndex + 1 };
    });

  }


  render() {
    const styleObj = {
      backgroundColor: this.props.colorSequence[this.state.targetIndex]
    }
    return (
      <div className="box flashing-box" style={styleObj}>
      </div>);
  }
}

export default FlashingBox;

