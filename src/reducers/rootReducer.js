import {combineReducers} from 'redux';
import character from './characterReducer';
import abilityScores from './abilityScoreReducer';
import initiative from './initiativeReducer';

const rootReducer = combineReducers({
    character,
    abilityScores,
    initiative
});

export default rootReducer;