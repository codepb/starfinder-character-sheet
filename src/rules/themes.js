import AbilityModifier, * as Abilities  from './abilities';

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

const themes = [
  new Theme({
    name: ACE_PILOT,
    abilityModifiers: [
      new AbilityModifier({
        ability: Abilities.DEXTERITY,
        modifier: 1
      })
    ]
  }),
  new Theme({
    name: BOUNTY_HUNTER,
    abilityModifiers: [
      new AbilityModifier({
        ability: Abilities.CONSTITUTION,
        modifier: 1
      })
    ]
  }),
  new Theme({
    name: ICON,
    abilityModifiers: [
      new AbilityModifier({
        ability: Abilities.CHARISMA,
        modifier: 1
      })
    ]
  }),
  new Theme({
    name: MERCENARY,
    abilityModifiers: [
      new AbilityModifier({
        ability: Abilities.STRENGTH,
        modifier: 1
      })
    ]
  }),
  new Theme({
    name: OUTLAW,
    abilityModifiers: [
      new AbilityModifier({
        ability: Abilities.DEXTERITY,
        modifier: 1
      })
    ]
  }),
  new Theme({
    name: PRIEST,
    abilityModifiers: [
      new AbilityModifier({
        ability: Abilities.WISDOM,
        modifier: 1
      })
    ]
  }),
  new Theme({
    name: SCHOLAR,
    abilityModifiers: [
      new AbilityModifier({
        ability: Abilities.INTELLIGENCE,
        modifier: 1
      })
    ]
  }),
  new Theme({
    name: SPACEFARER,
    abilityModifiers: [
      new AbilityModifier({
        ability: Abilities.CONSTITUTION,
        modifier: 1
      })
    ]
  }),
  new Theme({
    name: XENOSEEKER,
    abilityModifiers: [
      new AbilityModifier({
        ability: Abilities.CHARISMA,
        modifier: 1
      })
    ]
  }),
  new Theme({
    name: THEMELESS,
    hasUnspecifiedModifiers: true,
    abilityModifiers: [
      new AbilityModifier({
        ability: null,
        modifier: 1
      })
    ]
  }),
]

export default themes;
