import * as Abilities  from './abilities';
import * as Skills from './skills';

export const ACE_PILOT = 'Ace Pilot';
export const BOUNTY_HUNTER = 'Bounty Hunter';
export const ICON = 'Icon';
export const MERCENARY = 'Mercenary';
export const OUTLAW = 'Outlaw';
export const PRIEST = 'Priest';
export const SCHOLAR_LIFE_SCIENCE = 'Scholar (Life)';
export const SCHOLAR_PHYSICAL_SCIENCE = 'Scholar (Physical)';
export const SPACEFARER = 'Spacefarer';
export const XENOSEEKER = 'Xenoseeker';
export const THEMELESS = 'Themeless';

class Theme {
  name;
  abilityModifiers;
  classSkills =[];
  hasUnspecifiedModifiers = false;

  constructor(params){
    for (let i in params) {
      this[i] = params[i];
    }
  }
}
export const ACE_PILOT_THEME = new Theme({
  name: ACE_PILOT,
  abilityModifiers: {
    [Abilities.DEXTERITY] : 1,
  },
  classSkills: [
    Skills.PILOTING
  ]
});
export const BOUNTY_HUNTER_THEME = new Theme({
  name: BOUNTY_HUNTER,
  abilityModifiers: {
    [Abilities.CONSTITUTION] : 1,
  },
  classSkills: [
    Skills.SURVIVAL
  ]
});
export const ICON_THEME = new Theme({
  name: ICON,
  abilityModifiers: {
    [Abilities.CHARISMA] : 1,
  },
  classSkills: [
    Skills.CULTURE
  ]
});
export const MERCENARY_THEME = new Theme({
  name: MERCENARY,
  abilityModifiers: {
    [Abilities.STRENGTH] : 1,
  },
  classSkills: [
    Skills.ATHLETICS
  ]
});
export const OUTLAW_THEME = new Theme({
  name: OUTLAW,
  abilityModifiers: {
    [Abilities.DEXTERITY] : 1,
  },
  classSkills: [
    Skills.SLEIGHT_OF_HAND
  ]
});
export const PRIEST_THEME = new Theme({
  name: PRIEST,
  abilityModifiers: {
    [Abilities.WISDOM] : 1,
  },
  classSkills: [
    Skills.MYSTICISM
  ]
});
export const SCHOLAR_LIFE_SCIENCE_THEME = new Theme({
  name: SCHOLAR_LIFE_SCIENCE,
  abilityModifiers: {
    [Abilities.INTELLIGENCE] : 1,
  }  ,
  classSkills: [
    Skills.LIFE_SCIENCE
  ]
});
export const SCHOLAR_PHYSICAL_SCIENCE_THEME = new Theme({
  name: SCHOLAR_PHYSICAL_SCIENCE,
  abilityModifiers: {
    [Abilities.INTELLIGENCE] : 1,
  },
  classSkills: [
    Skills.PHYSICAL_SCIENCE
  ]
});
export const SPACEFARER_THEME = new Theme({
  name: SPACEFARER,
  abilityModifiers: {
    [Abilities.CONSTITUTION] : 1,
  },
  classSkills: [
    Skills.PHYSICAL_SCIENCE
  ]
});
export const XENOSEEKER_THEME = new Theme({
  name: XENOSEEKER,
  abilityModifiers: {
    [Abilities.CHARISMA] : 1,
  },
  classSkills: [
    Skills.LIFE_SCIENCE
  ]
});
export const THEMELESS_THEME = new Theme({
  name: THEMELESS,
  hasUnspecifiedModifiers: true,
  abilityModifiers: {
    [Abilities.UNSPECIFIED] : 1,
  }
});

const themes = {
  [ACE_PILOT]: ACE_PILOT_THEME,
  [BOUNTY_HUNTER]: BOUNTY_HUNTER_THEME,
  [ICON]: ICON_THEME,
  [MERCENARY]: MERCENARY_THEME,
  [OUTLAW]: OUTLAW_THEME,
  [PRIEST]: PRIEST_THEME,
  [SCHOLAR_LIFE_SCIENCE]: SCHOLAR_LIFE_SCIENCE_THEME,
  [SCHOLAR_PHYSICAL_SCIENCE]: SCHOLAR_PHYSICAL_SCIENCE_THEME,
  [SPACEFARER]: SPACEFARER_THEME,
  [XENOSEEKER]: XENOSEEKER_THEME,
  [THEMELESS]: THEMELESS_THEME,
}

export default themes;
