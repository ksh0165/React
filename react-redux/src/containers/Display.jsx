import Display from '../components/Display';
import {connect} from 'react-redux';
import store from '../store';
/*
import React, { Component } from 'react';
import store from '../store';


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
}*/
function mapReduxStateToReactProps(state){
    return {
        number:state.number
    }
}
export default connect(mapReduxStateToReactProps)(Display);

