import {combineReducers} from 'redux';
import character from './characterReducer';
import abilityScores from './abilityScoreReducer';
import initiative from './initiativeReducer';
import armorBonuses from './armorBonusesReducer';

const rootReducer = combineReducers({
    character,
    abilityScores,
    initiative,
    armorBonuses
});

export default rootReducer;