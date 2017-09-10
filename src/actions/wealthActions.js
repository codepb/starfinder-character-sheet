import * as types from './types/wealth';

export function updateMoney(newValue) {
  return {
    type: types.UPDATE_MONEY,
    newValue
  };
}

export function updateOtherWealth(newValue) {
  return {
    type: types.UPDATE_OTHER_WEALTH,
    newValue
  };
}