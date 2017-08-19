import AbilityModifier, * as Abilities  from './abilities';
import * as Sizes from './sizes';

export const ANDROID = 'Android';
export const HUMAN = 'Human';
export const KASATHA = 'Kasatha';
export const KORSHA_LASHUNTA = 'Korshar Lashunta';
export const DAMAYA_LASHUNTA = 'Damaya Lashunta';
export const SHIRREN = 'Shirren';
export const VESK = 'Vesk';
export const YSOKI = 'Ysoki';

class Race {
  name;
  hp;
  abilityModifiers;
  size;
  hasUnspecifiedModifiers = false;

  constructor(params){
    for (let i in params) {
      this[i] = params[i];
    }
  }
}

const races = [
  new Race({
    name: ANDROID,
    hp: 4,
    size: Sizes.MEDIUM,
    abilityModifiers: [
      new AbilityModifier({
        ability: Abilities.DEXTERITY,
        modifier: 2
      }),
      new AbilityModifier({
        ability: Abilities.INTELLIGENCE,
        modifier: 2
      }),
      new AbilityModifier({
        ability: Abilities.CHARISMA,
        modifier: -2
      })
    ]
  }),
  new Race({
    name: HUMAN,
    hp: 4,
    size: Sizes.MEDIUM,
    hasUnspecifiedModifiers: true,
    abilityModifiers: [
      new AbilityModifier({
        ability: null,
        modifier: 2
      })
    ]
  }),
  new Race({
    name: KASATHA,
    hp: 4,
    size: Sizes.MEDIUM,
    abilityModifiers: [
      new AbilityModifier({
        ability: Abilities.STRENGTH,
        modifier: 2
      }),
      new AbilityModifier({
        ability: Abilities.WISDOM,
        modifier: 2
      }),
      new AbilityModifier({
        ability: Abilities.INTELLIGENCE,
        modifier: -2
      })
    ]
  }),
  new Race({
    name: KORSHA_LASHUNTA,
    hp: 4,
    size: Sizes.MEDIUM,
    abilityModifiers: [
      new AbilityModifier({
        ability: Abilities.STRENGTH,
        modifier: 2
      }),
      new AbilityModifier({
        ability: Abilities.WISDOM,
        modifier: -2
      }),
      new AbilityModifier({
        ability: Abilities.CHARISMA,
        modifier: +2
      })
    ]
  }),
  new Race({
    name: DAMAYA_LASHUNTA,
    hp: 4,
    size: Sizes.MEDIUM,
    abilityModifiers: [
      new AbilityModifier({
        ability: Abilities.INTELLIGENCE,
        modifier: 2
      }),
      new AbilityModifier({
        ability: Abilities.CONSTITUTION,
        modifier: -2
      }),
      new AbilityModifier({
        ability: Abilities.CHARISMA,
        modifier: +2
      })
    ]
  }),
  new Race({
    name: SHIRREN,
    hp: 6,
    size: Sizes.MEDIUM,
    abilityModifiers: [
      new AbilityModifier({
        ability: Abilities.CONSTITUTION,
        modifier: 2
      }),
      new AbilityModifier({
        ability: Abilities.WISDOM,
        modifier: 2
      }),
      new AbilityModifier({
        ability: Abilities.CHARISMA,
        modifier: -2
      })
    ]
  }),
  new Race({
    name: VESK,
    hp: 6,
    size: Sizes.MEDIUM,
    abilityModifiers: [
      new AbilityModifier({
        ability: Abilities.CONSTITUTION,
        modifier: 2
      }),
      new AbilityModifier({
        ability: Abilities.STRENGTH,
        modifier: 2
      }),
      new AbilityModifier({
        ability: Abilities.INTELLIGENCE,
        modifier: -2
      })
    ]
  }),
  new Race({
    name: YSOKI,
    hp: 2,
    size: Sizes.SMALL,
    abilityModifiers: [
      new AbilityModifier({
        ability: Abilities.DEXTERITY,
        modifier: 2
      }),
      new AbilityModifier({
        ability: Abilities.INTELLIGENCE,
        modifier: 2
      }),
      new AbilityModifier({
        ability: Abilities.STRENGTH,
        modifier: -2
      })
    ]
  })
]

export default races;

