import React, { Component } from 'react';
import Display from '../containers/Display';
class DisplayRoot extends Component{
    render(){
      return (
        <div>
          <h1>Display Root</h1>
          <Display></Display>
        </div>
      );
    }
  }
export default DisplayRoot;