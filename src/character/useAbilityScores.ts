import * as React from "react";
import CharacterContext from "./CharacterContext";
import { forEachKey } from "../helpers/objectHelpers";

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
  baseAbilityScores: AbilityScores;
  pointsRemaining: number;
  increment: (key: keyof AbilityScores) => void;
  decrement: (key: keyof AbilityScores) => void;
} => {
  const [{ baseAbilityScores }, { setBaseAbilityScores }] = React.useContext(
    CharacterContext
  );
  return {
    abilityScores: <AbilityScores>(
      forEachKey(
        (key: keyof AbilityScores) => baseAbilityScores[key]! + 10,
        baseAbilityScores
      )
    ),
    baseAbilityScores,
    pointsRemaining: 10 - <number>sumPositiveObjectValues(baseAbilityScores),
    increment: (key: keyof AbilityScores) =>
      setBaseAbilityScores(baseAbilityScores => {
        if (
          sumPositiveObjectValues(baseAbilityScores) == 10 &&
          baseAbilityScores[key]! >= 0
        ) {
          return baseAbilityScores;
        }
        return {
          ...baseAbilityScores,
          [key]: baseAbilityScores[key]! + 1
        };
      }),
    decrement: (key: keyof AbilityScores) =>
      setBaseAbilityScores(baseAbilityScores => {
        return {
          ...baseAbilityScores,
          [key]: baseAbilityScores[key]! - 1
        };
      })
  };
};

export default useAbilityScores;
