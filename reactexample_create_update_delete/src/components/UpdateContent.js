import React, { Component } from 'react';


class UpdateContent extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this);
  } 
  
  inputFormHandler(e){
    this.setState({[e.target.name]:e.target.value});
  }

  render(){
    console.log('UpdateContent',this.props.data);
      return (
        <article>
          <h2>Update</h2>
            <form action="/create_process" method="post" 
              onSubmit={function(e){
                e.preventDefault(); 
                this.props.onSubmit(
                  this.state.id,
                  e.target.title.value,
                  e.target.desc.value
                );
              }.bind(this)}>
              <input type="hidden" name="id" value={this.state.id}></input>
              <p><input type="text" name="title" placeholder="title" value={this.state.title} onChange={function(e){console.log(e.target.value); this.setState({title:e.target.value});}.bind(this)}></input></p>
              <p><textarea name="desc" placeholder="description" value={this.state.desc} onChange={function(e){this.setState({desc: e.target.value});}.bind(this)}></textarea></p>
              <p><input type="submit"></input></p>
            </form>
        </article>
      )
    }
  }
export default UpdateContent;  