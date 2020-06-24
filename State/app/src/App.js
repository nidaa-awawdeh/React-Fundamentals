import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Michael",
    };

    setTimeout(this.changeName.bind(this), 5000);
  }

  changeName = () => {
    this.setState({ name: "Whiskey" });
  };

  render() {
    return (
      <div>
        <h2>Our state is {this.state.name}</h2>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
