import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

{/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/}

class Subject extends Component{
  render(){
    return (
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}

class Content extends Component{
  render(){
    return (
      <article>
        <h2>HTML</h2>
          GOOD!!
      </article>
    )
  }
}

class TDC extends Component{
  render(){
    return (
      <nav>
        <ul>
        <li><a href="https://naver.com">네이버</a></li>
        </ul>
      </nav>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <TDC></TDC>
        <Content></Content>
      </div>
    );
  }
}

export default App;
