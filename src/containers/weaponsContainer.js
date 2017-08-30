import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WeaponsList from '../components/weaponsList';
import * as weaponActions from '../actions/weaponActions';

function mapStateToProps(state) {
  return {
    weapons: state.weapons
  };
}

function mapDispatchToProps(dispatch) {
  return {
      weaponActions: bindActionCreators(weaponActions, dispatch)
  };
}


const WeaponsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WeaponsList);

export default WeaponsContainer;