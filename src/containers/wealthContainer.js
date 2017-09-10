import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as wealthActions from '../actions/wealthActions';
import Wealth from '../components/wealth';

function mapStateToProps(state) {
  return {
      money: state.wealth.money,
      otherWealth: state.wealth.other
  };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(wealthActions, dispatch);
  return {
    moneyChanged: actions.updateMoney,
    otherWealthChanged: actions.updateOtherWealth
  };
}

const WealthContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Wealth);

export default WealthContainer;