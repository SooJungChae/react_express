import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: []
        }
    }

    componentDidMount() {
        fetch('/users')
            .then(res => {
                return res.text()
            })
            .then(members => {
                this.setState({
                    members: JSON.parse(members)
                })
            })
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
          <Grid members={this.state.members} />
      </div>
    );
  }
}

export default App;
