import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { name: "Michael" },
        { name: "Elie" },
        { name: "Matt" },
        { name: "Angelina" },
      ],
    };

    setTimeout(this.addName.bind(this), 5000);
  }

  addName() {
    const newPeople = this.state.people.slice();
    newPeople.push({ name: "Whiskey" });
    this.setState({ people: newPeople });
  }

  render() {
    var peeps = this.state.people.map((p) => {
      return <p key={p.name}>{p.name}</p>;
    });
    return <div>{peeps}</div>;
  }
}

render(<App />, document.getElementById("root"));
