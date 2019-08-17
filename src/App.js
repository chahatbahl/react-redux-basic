import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { defaultFunction } from './actions';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(defaultFunction('Hello'));
  }

  render() {
    return (
      <div>
        {this.props.default}Chahat
      </div>
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  console.log('chahat---------------', state);
  return {
    default: state.default === 'Helglo' ? 'Here ' : 'Yo '
  };
}
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
