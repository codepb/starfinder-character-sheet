import * as Abilities  from './abilities';
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

  getAbilityModifierForAbility = (ability) => {
    return this.abilityModifiers[ability];
  }
}

export const ANDROID_RACE = new Race({
  name: ANDROID,
  hp: 4,
  size: Sizes.MEDIUM,
  abilityModifiers: {
      [Abilities.DEXTERITY] : 2,
      [Abilities.INTELLIGENCE] : 2,
      [Abilities.CHARISMA] : -2
  }
});
export const HUMAN_RACE = new Race({
  name: HUMAN,
  hp: 4,
  size: Sizes.MEDIUM,
  hasUnspecifiedModifiers: true,
  abilityModifiers: {
    [Abilities.UNSPECIFIED] : 2
  }    
});
export const KASATHA_RACE = new Race({
  name: KASATHA,
  hp: 4,
  size: Sizes.MEDIUM,
  abilityModifiers: {
    [Abilities.STRENGTH] : 2,
    [Abilities.WISDOM] : 2,
    [Abilities.INTELLIGENCE] : -2
  }
});
export const KORSHA_LASHUNTA_RACE = new Race({
  name: KORSHA_LASHUNTA,
  hp: 4,
  size: Sizes.MEDIUM,
  abilityModifiers: {
    [Abilities.STRENGTH] : 2,
    [Abilities.CHARISMA] : 2,
    [Abilities.WISDOM] : -2
  }
});
export const DAMAYA_LASHUNTA_RACE = new Race({
  name: DAMAYA_LASHUNTA,
  hp: 4,
  size: Sizes.MEDIUM,
  abilityModifiers: {
    [Abilities.INTELLIGENCE] : 2,
    [Abilities.CHARISMA] : 2,
    [Abilities.CONSTITUTION] : -2
  }
});
export const SHIRREN_RACE = new Race({
  name: SHIRREN,
  hp: 6,
  size: Sizes.MEDIUM,
  abilityModifiers: {
    [Abilities.CONSTITUTION] : 2,
    [Abilities.WISDOM] : 2,
    [Abilities.CHARISMA] : -2
  }
});
export const VESK_RACE = new Race({
  name: VESK,
  hp: 6,
  size: Sizes.MEDIUM,
  abilityModifiers: {
    [Abilities.CONSTITUTION] : 2,
    [Abilities.STRENGTH] : 2,
    [Abilities.INTELLIGENCE] : -2
  }
});
export const YSOKI_RACE = new Race({
  name: YSOKI,
  hp: 2,
  size: Sizes.SMALL,
  abilityModifiers: {
    [Abilities.DEXTERITY] : 2,
    [Abilities.INTELLIGENCE] : 2,
    [Abilities.STRENGTH] : -2
  }
});

export const DWARF_RACE = new Race({
  name: DWARF,
  hp: 6,
  size: Sizes.MEDIUM,
  abilityModifiers: {
    [Abilities.CONSTITUTION] : 2,
    [Abilities.WISDOM] : 2,
    [Abilities.CHARISMA] : -2
  }
});

export const ELF_RACE = new Race({
  name: ELF,
  hp: 4,
  size: Sizes.MEDIUM,
  abilityModifiers: {
    [Abilities.DEXTERITY] : 2,
    [Abilities.INTELLIGENCE] : 2,
    [Abilities.CONSTITUTION] : -2
  }
});

export const FEYCHILD_GNOME_RACE = new Race({
  name: FEYCHILD_GNOME,
  hp: 4,
  size: Sizes.SMALL,
  abilityModifiers: {
    [Abilities.CONSTITUTION] : 2,
    [Abilities.CHARISMA] : 2,
    [Abilities.STRENGTH] : -2
  }
});

export const BLEACHLING_GNOME_RACE = new Race({
  name: BLEACHLING_GNOME,
  hp: 4,
  size: Sizes.SMALL,
  abilityModifiers: {
    [Abilities.CONSTITUTION] : 2,
    [Abilities.INTELLIGENCE] : 2,
    [Abilities.STRENGTH] : -2
  }
});

export const HALF_ELF_RACE = new Race({
  name: HALF_ELF,
  hp: 4,
  size: Sizes.MEDIUM,
  hasUnspecifiedModifiers: true,
  abilityModifiers: {
    [Abilities.UNSPECIFIED] : 2,
  }
});

export const HALF_ORC_RACE = new Race({
  name: HALF_ORC,
  hp: 6,
  size: Sizes.MEDIUM,
  hasUnspecifiedModifiers: true,
  abilityModifiers: {
    [Abilities.UNSPECIFIED] : 2,
  }
});

export const HALFLING_RACE = new Race({
  name: HALFLING,
  hp: 2,
  size: Sizes.SMALL,
  abilityModifiers: {
    [Abilities.DEXTERITY] : 2,
    [Abilities.CHARISMA] : 2,
    [Abilities.STRENGTH] : -2
  }
});

const races = {
  [ANDROID]: ANDROID_RACE,
  [HUMAN]: HUMAN_RACE,
  [KASATHA]: KASATHA_RACE,
  [KORSHA_LASHUNTA]: KORSHA_LASHUNTA_RACE,
  [DAMAYA_LASHUNTA]: DAMAYA_LASHUNTA_RACE,
  [SHIRREN]: SHIRREN_RACE,
  [VESK]: VESK_RACE,
  [YSOKI]: YSOKI_RACE,
  [DWARF]: DWARF_RACE,
  [ELF]: ELF_RACE,
  [FEYCHILD_GNOME]: FEYCHILD_GNOME_RACE,
  [BLEACHLING_GNOME]: BLEACHLING_GNOME_RACE,
  [HALF_ELF]: HALF_ELF_RACE,
  [HALF_ORC]: HALF_ORC_RACE,
  [HALFLING]: HALFLING_RACE
}

export default races;

