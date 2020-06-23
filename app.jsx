class App extends React.Component {
  render() {
    var name = this.props.name;
    if (name === 'Tim') {
      name = 'favorite instructor';
    } else if (name === 'Matt' || name === 'Elie') {
      name = 'very solid instructor';
    }
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{name}</p>
        {name === 'student' ? (
          <h1>Good job on the course so far!</h1>
        ) : (
          <h1>Hello, {name}!</h1>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App name="Moxie" />, document.getElementById('app'));