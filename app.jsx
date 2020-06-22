class App extends React.Component {
  render() {
    var style = { color: 'red' };
    return (
      <div>
        <h1 style={style}>Hello {this.props.name}!</h1>
        {/* <p>
                    This JSX will not be rendered because it is commented out using JavaScript
                 </p> */}
            <h2 className="React">Nidaa </h2>
      </div>
    );
  }
}

ReactDOM.render(<App name="student" />, document.getElementById('app'));