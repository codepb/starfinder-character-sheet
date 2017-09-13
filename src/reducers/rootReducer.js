import {combineReducers} from 'redux';
import character from './characterReducer';
import abilityScores from './abilityScoresReducer';
import initiative from './initiativeReducer';
import armor from './armorReducer';
import currentHealth from './currentHealthReducer';
import skills from './skillReducer';
import savingThrows from './savingThrowReducer';
import attackBonuses from './attackBonusesReducer';
import weapons from './weaponsReducer';
import abilities from './abilitiesReducer';
import spells from './spellsReducer';
import feats from './featsReducer';
import languages from './languagesReducer';
import experience from './experienceReducer';
import wealth from './wealthReducer';
import equipment from './equipmentReducer';

const rootReducer = combineReducers({
    character,
    abilityScores,
    initiative,
    armor,
    currentHealth,
    skills,
    savingThrows,
    attackBonuses,
    weapons,
    abilities,
    spells,
    feats,
    languages,
    experience,
    wealth,
    equipment
});

export default rootReducer;