class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello JSX and the World!</h1>
                <NIDAA />
            
            </div>
        );
    }
}

 class NIDAA extends React.Component{
    render() {
        return (
            <div>
                <p> second Component</p>
             </div>
         )
     }
 }

ReactDOM.render(<App />, document.getElementById('app'));