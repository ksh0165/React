import React, { Component } from 'react';
import Display from './Display';
class DisplayRoot extends Component{
    render(){
      return (
        <div>
          <h1>Display Root</h1>
          <Display number={this.props.number}></Display>
        </div>
      );
    }
  }
export default DisplayRoot;