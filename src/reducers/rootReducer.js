import {combineReducers} from 'redux';
import character from './characterReducer';
import abilityScores from './abilityScoreReducer';

const rootReducer = combineReducers({
    character,
    abilityScores
});

export default rootReducer;