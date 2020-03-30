import React, { Component } from 'react';
import store from '../store';
import Display from '../components/Display';

export default class extends Component{
    state = {number:store.getState().number}
    constructor(props){
        super(props);
        store.subscribe(function(){
            this.setState({number:store.getState().number});
        }.bind(this));
    }
    render(){
        return <Display number={this.state.number}></Display>
    }
}