import {combineReducers} from 'redux';
import character from './characterReducer';
import abilityScores from './abilityScoreReducer';
import initiative from './initiativeReducer';
import armorBonuses from './armorBonusesReducer';
import health from './healthReducer';

const rootReducer = combineReducers({
    character,
    abilityScores,
    initiative,
    armorBonuses,
    health
});

export default rootReducer;