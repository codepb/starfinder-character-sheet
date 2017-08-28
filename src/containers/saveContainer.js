import { connect } from 'react-redux';
import Save from '../components/save';
import * as loadActions from '../actions/loadActions';

function mapStateToProps(state) {
  return {
      onSave: () => {
        const serializedState = JSON.stringify(state);
        const blob = new Blob([serializedState], {type: "text/plain;charset=utf-8"});
        window.saveAs(blob, `${state.character.name ? state.character.name : 'StarfinderCharacter'}.json`);
      }      
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: (contents) => {
      dispatch(loadActions.load(JSON.parse(contents)))
    }
  }
}

const SaveContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Save);

export default SaveContainer;