import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TDC from './components/TDC';
import Subject from './components/Subject';
import Content from './components/Content';

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



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      welcome:{title:'welcome',desc:'React!'},
      subject: {title:'WEB', sub:'world wide web!'},
      contents: [{id:1, title:'naver', desc:'https://naver.com'}]
    
    }
  }
  render() {
    var _title, _desc = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === "read"){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }else{
      _title = "HTML!";
      _desc = "world wide web!"
    }
    return (
      <div className="App">
        {/*<Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>*/}
        <header>
    <h1><a href="/" onClick={function(e){e.preventDefault(); { /*this.state.mode = 'welcome'; => x */} 
            this.setState({
              mode: 'welcome'
            })
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TDC data={this.state.contents}></TDC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
