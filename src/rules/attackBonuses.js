import * as Abilities from './abilities';

export const MELEE = 'Melee';
export const RANGED = 'Ranged';
export const THROWN = 'Thrown';

const attacks = {
  [MELEE]: [Abilities.STRENGTH],
  [RANGED]: [Abilities.DEXTERITY],
  [THROWN]: [Abilities.STRENGTH]
}

export default attacks;