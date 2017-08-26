import * as Abilities  from './abilities';

export const ACE_PILOT = 'Ace Pilot';
export const BOUNTY_HUNTER = 'Bounty Hunter';
export const ICON = 'Icon';
export const MERCENARY = 'Mercenary';
export const OUTLAW = 'Outlaw';
export const PRIEST = 'Priest';
export const SCHOLAR = 'Scholar';
export const SPACEFARER = 'Spacefarer';
export const XENOSEEKER = 'Xenoseeker';
export const THEMELESS = 'Themeless';

class Theme {
  name;
  abilityModifiers;
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
  }
});
export const BOUNTY_HUNTER_THEME = new Theme({
  name: BOUNTY_HUNTER,
  abilityModifiers: {
    [Abilities.CONSTITUTION] : 1,
  }
});
export const ICON_THEME = new Theme({
  name: ICON,
  abilityModifiers: {
    [Abilities.CHARISMA] : 1,
  }
});
export const MERCENARY_THEME = new Theme({
  name: MERCENARY,
  abilityModifiers: {
    [Abilities.STRENGTH] : 1,
  }
});
export const OUTLAW_THEME = new Theme({
  name: OUTLAW,
  abilityModifiers: {
    [Abilities.DEXTERITY] : 1,
  }
});
export const PRIEST_THEME = new Theme({
  name: PRIEST,
  abilityModifiers: {
    [Abilities.WISDOM] : 1,
  }
});
export const SCHOLAR_THEME = new Theme({
  name: SCHOLAR,
  abilityModifiers: {
    [Abilities.INTELLIGENCE] : 1,
  }
});
export const SPACEFARER_THEME = new Theme({
  name: SPACEFARER,
  abilityModifiers: {
    [Abilities.CONSTITUTION] : 1,
  }
});
export const XENOSEEKER_THEME = new Theme({
  name: XENOSEEKER,
  abilityModifiers: {
    [Abilities.CHARISMA] : 1,
  }
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
  [SCHOLAR]: SCHOLAR_THEME,
  [SPACEFARER]: SPACEFARER_THEME,
  [XENOSEEKER]: XENOSEEKER_THEME,
  [THEMELESS]: THEMELESS_THEME,
}

export default themes;
