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
export const DWARF = 'Dwarf';
export const ELF = 'Elf';
export const FEYCHILD_GNOME = 'Feychild Gnome';
export const BLEACHLING_GNOME = 'Bleachling Gnome';
export const HALF_ELF = 'Half-Elf';
export const HALF_ORC = 'Half-Orc';
export const HALFLING = 'Halfling';

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

export const ANDROID_RACE = new Race({
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
});
export const HUMAN_RACE = new Race({
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
});
export const KASATHA_RACE = new Race({
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
});
export const KORSHA_LASHUNTA_RACE = new Race({
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
});
export const DAMAYA_LASHUNTA_RACE = new Race({
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
});
export const SHIRREN_RACE = new Race({
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
});
export const VESK_RACE = new Race({
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
});
export const YSOKI_RACE = new Race({
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
});

export const DWARF_RACE = new Race({
  name: DWARF,
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
});

export const ELF_RACE = new Race({
  name: ELF,
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
      ability: Abilities.CONSTITUTION,
      modifier: -2
    })
  ]
});

export const FEYCHILD_GNOME_RACE = new Race({
  name: FEYCHILD_GNOME,
  hp: 4,
  size: Sizes.SMALL,
  abilityModifiers: [
    new AbilityModifier({
      ability: Abilities.CONSTITUTION,
      modifier: 2
    }),
    new AbilityModifier({
      ability: Abilities.CHARISMA,
      modifier: 2
    }),
    new AbilityModifier({
      ability: Abilities.STRENGTH,
      modifier: -2
    })
  ]
});

export const BLEACHLING_GNOME_RACE = new Race({
  name: BLEACHLING_GNOME,
  hp: 4,
  size: Sizes.SMALL,
  abilityModifiers: [
    new AbilityModifier({
      ability: Abilities.CONSTITUTION,
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
});

export const HALF_ELF_RACE = new Race({
  name: HALF_ELF,
  hp: 4,
  size: Sizes.MEDIUM,
  hasUnspecifiedModifiers: true,
  abilityModifiers: [
    new AbilityModifier({
      ability: null,
      modifier: 2
    })
  ]
});

export const HALF_ORC_RACE = new Race({
  name: HALF_ORC,
  hp: 6,
  size: Sizes.MEDIUM,
  hasUnspecifiedModifiers: true,
  abilityModifiers: [
    new AbilityModifier({
      ability: null,
      modifier: 2
    })
  ]
});

export const HALFLING_RACE = new Race({
  name: HALFLING,
  hp: 2,
  size: Sizes.SMALL,
  abilityModifiers: [
    new AbilityModifier({
      ability: Abilities.DEXTERITY,
      modifier: 2
    }),
    new AbilityModifier({
      ability: Abilities.CHARISMA,
      modifier: 2
    }),
    new AbilityModifier({
      ability: Abilities.STRENGTH,
      modifier: -2
    })
  ]
});

const races = [
  ANDROID_RACE,
  HUMAN_RACE,
  KASATHA_RACE,
  KORSHA_LASHUNTA_RACE,
  DAMAYA_LASHUNTA_RACE,
  SHIRREN_RACE,
  VESK_RACE,
  YSOKI_RACE,
  DWARF_RACE,
  ELF_RACE,
  FEYCHILD_GNOME_RACE,
  BLEACHLING_GNOME_RACE,
  HALF_ELF_RACE,
  HALF_ORC_RACE,
  HALFLING_RACE
]

export default races;

