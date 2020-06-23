class NamedComponent extends React.Component {

  render() {

    return (
      <div>
        <p>{this.props.name}</p>



        <FirstComponent />
        <SecondComponent />

      </div>
    );
  }
}

class FirstComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>My very first component.</h1>

      </div>
    );
  }
}

class SecondComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>My second component</h2>

      </div>
    );
  }
}

ReactDOM.render(<NamedComponent name="My name is Nidaa" />, document.getElementById('app'));
