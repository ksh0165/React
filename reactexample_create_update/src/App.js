import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TDC from './components/TDC';
import Subject from './components/Subject';
import Content from './components/Content';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

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
    this.max_id = 1;
    this.state = {
      mode:'create',
      select_id: 1,
      welcome:{title:'welcome',desc:'React!'},
      subject: {title:'WEB', sub:'world wide web!'},
      contents: [{id:1, title:'naver', desc:'https://naver.com'}]    
    }
  }

  getReadContent(){
    var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.select_id){
          return data;
          break;
        }
        i = i + 1;
      }
  }

  getContent(){
    var _title, _desc, _article = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <Content title={_title} desc={_desc}></Content>
    }else if(this.state.mode === "read"){
      var _content = this.getReadContent();
      _article = <Content title={_content.title} desc={_content.desc}></Content>
    }else if(this.state.mode === "create"){
      _article = <CreateContent onSubmit={function(_title,_desc){
        this.max_id = this.max_id+1;
        var newContents = Array.from(this.state.contents);
        newContents.push({id:this.max_id,title:_title,desc:_desc});
        this.setState({contents: newContents, mode:'read', select_id: this.max_id});
        console.log(_title, _desc);
        console.log(this.state.contents);
      }.bind(this)}></CreateContent>
    }else if(this.state.mode === "update"){
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_id,_title,_desc){
        var _contents = Array.from(this.state.contents);
        var i = 0;
        while(i < _contents.length){
          if(_contents[i].id === _id){
            _contents[i] = {id: _id, title: _title, desc: _desc};
            break;
          }
          i = i + 1;
        }
        this.setState({
          contents:_contents,
          mode:'read'
        });
        console.log(_id,_title, _desc);
        console.log(this.state.contents);
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  render() {
    
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={function(){this.setState({mode:'welcome'});}.bind(this)}></Subject>
        <TDC onChangePage={function(id){this.setState({mode:'read', select_id:Number(id)});}.bind(this)} data={this.state.contents}></TDC>
        <Control onChangeMode={function(_mode){this.setState({mode: _mode});}.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
