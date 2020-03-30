import React, { Component } from 'react';
class Display extends Component{ 
  render(){
      return (
        <div>
        <h1>Display</h1>
        <input type="text" value={this.props.number} readOnly></input>
        </div>
      );
    }
  }
export default Display;