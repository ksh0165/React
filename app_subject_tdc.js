{/**/}
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
      mode:'read',
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
    }
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={function(){this.setState({mode:'welcome'});}.bind(this)}></Subject>
        <TDC onChangePage={function(){this.setState({mode:'read'});}.bind(this)}data={this.state.contents}></TDC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;

{/**/}
import React, { Component } from 'react';
class Subject extends Component{
    render(){
      return (
        <header>
          <h1><a href="/" onClick={function(e){e.preventDefault(); this.props.onChangePage();}.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }
export default Subject;
{/**/}
import React, { Component } from 'react';

class TDC extends Component{
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
      lists.push(
        <li key={data[i].id}>
          <a href={data[i].desc}
            onClick={function(e){e.preventDefault(); this.props.onChangePage();}.bind(this)}
          >
            {data[i].title}</a>
        </li>);
        i = i+1;
      }
      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      )
    }
  }

export default TDC;
