import React, { Component } from 'react';
import { connect } from 'react-redux';
import Save from '../components/save';
import * as loadActions from '../actions/loadActions';

class SaveContainer extends Component {
  save = () => {
    const {state} = this.props;
    const serializedState = JSON.stringify(state);
    const blob = new Blob([serializedState], {type: "text/plain;charset=utf-8"});
    window.saveAs(blob, `${state.character.name ? state.character.name : 'StarfinderCharacter'}.json`);
  }

  load = (contents) => {
    this.props.onLoad(JSON.parse(contents));
  }

  render () {
    return <Save onSave={this.save} onLoad={this.load}/>;
  }
}

function mapStateToProps(state) {
  return {
    state: state     
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: (contents) => dispatch(loadActions.load(contents))
  }
}

const ConnectedSaveContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SaveContainer);

export default ConnectedSaveContainer;