import {combineReducers} from 'redux';
import character from './characterReducer';
import abilities from './abilitiesReducer';
import initiative from './initiativeReducer';
import armorBonuses from './armorBonusesReducer';
import currentHealth from './currentHealthReducer';

const rootReducer = combineReducers({
    character,
    abilities,
    initiative,
    armorBonuses,
    currentHealth
});

export default rootReducer;