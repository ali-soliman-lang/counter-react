import React , { Component } from 'react';
import { connect } from 'react-redux';
import { increase , decrease } from './actions/action';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.increase}>+</button>
        <div>{this.props.count}</div>
        <button onClick={this.props.decrease}>-</button>
      </div>
    );
  }
}


// this is function to get data from rootreduser
function mapStateToProps(state) {
  return {
    count : state.count,
  }
}

// this is function send action inside dispatch to reduser
function mapDispatchToProps(dispatch) {
  return {
    increase : () => dispatch(increase()), // action one
    decrease : () => dispatch(decrease()) // action two
  }
}


export default connect(mapStateToProps , mapDispatchToProps)(App);