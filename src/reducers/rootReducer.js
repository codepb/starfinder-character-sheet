import {combineReducers} from 'redux';
import character from './characterReducer';
import abilities from './abilitiesReducer';
import initiative from './initiativeReducer';
import armor from './armorReducer';
import currentHealth from './currentHealthReducer';
import skills from './skillReducer';
import savingThrows from './savingThrowReducer';

const rootReducer = combineReducers({
    character,
    abilities,
    initiative,
    armor,
    currentHealth,
    skills,
    savingThrows
});

export default rootReducer;