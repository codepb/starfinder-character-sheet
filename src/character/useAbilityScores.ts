import * as React from "react";
import CharacterContext from "./CharacterContext";
import { forEachKey } from "../helpers/objectHelpers";
import { classDefinitions } from "../rules/classes";
import { raceDetails } from "../rules/races";
import { themeDetails } from "../rules/themes";
import {
  calculateAbilityScore,
  calculateAbilityModifier
} from "../rules/abilities";

export interface AbilityScores {
  strength?: number;
  dexterity?: number;
  constitution?: number;
  intelligence?: number;
  wisdom?: number;
  charisma?: number;
}

export interface AbilityScoreModifiers extends AbilityScores {
  unspecified?: number;
}

const sumOfPositive = (a, b) => a + (b > 0 ? b : 0);

const sumPositiveObjectValues = obj => Object.values(obj).reduce(sumOfPositive);

const useAbilityScores = (): {
  abilityScores: AbilityScores;
  abilityModifiers: AbilityScores;
  baseAbilityScores: AbilityScores;
  canIncrement: (keyof AbilityScores)[];
  canDecrement: (keyof AbilityScores)[];
  pointsRemaining: number;
  increment: (key: keyof AbilityScores) => void;
  decrement: (key: keyof AbilityScores) => void;
} => {
  const [
    {
      baseAbilityScores,
      basicStats: { race, theme }
    },
    { setBaseAbilityScores }
  ] = React.useContext(CharacterContext);
  const abilityScores = <AbilityScores>(
    forEachKey(
      calculateAbilityScore(baseAbilityScores, race, theme),
      baseAbilityScores
    )
  );
  const abilityModifiers = <AbilityScores>(
    forEachKey(
      calculateAbilityModifier(baseAbilityScores, race, theme),
      baseAbilityScores
    )
  );
  const canIncrement = (key: keyof AbilityScores) =>
    abilityScores[key]! < 18 &&
    (sumPositiveObjectValues(baseAbilityScores) < 10 ||
      baseAbilityScores[key]! < 0);
  const canDecrement = (key: keyof AbilityScores) => abilityScores[key]! > 0;
  const abilityKeys = Object.keys(baseAbilityScores) as (keyof AbilityScores)[];
  return {
    abilityScores,
    abilityModifiers,
    baseAbilityScores,
    canIncrement: abilityKeys.filter(canIncrement),
    canDecrement: abilityKeys.filter(canDecrement),
    pointsRemaining: 10 - <number>sumPositiveObjectValues(baseAbilityScores),
    increment: (key: keyof AbilityScores) =>
      setBaseAbilityScores(baseAbilityScores => {
        if (canIncrement(key)) {
          return {
            ...baseAbilityScores,
            [key]: baseAbilityScores[key]! + 1
          };
        }
        return baseAbilityScores;
      }),
    decrement: (key: keyof AbilityScores) => {
      if (canDecrement(key)) {
        setBaseAbilityScores(baseAbilityScores => {
          return {
            ...baseAbilityScores,
            [key]: baseAbilityScores[key]! - 1
          };
        });
      }
      return baseAbilityScores;
    }
  };
};

export default useAbilityScores;
