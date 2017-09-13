import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as equipmentActions from '../actions/equipmentActions';
import EquipmentList from '../components/equipmentList';

function mapStateToProps(state) {
  return {
      equipment: state.equipment
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(equipmentActions, dispatch);
}

const EquipmentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EquipmentList);

export default EquipmentContainer;