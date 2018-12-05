import * as React from "react";
import { SetStateAction } from "react";
import CharacterContext from "./CharacterContext";
import AbilityScores from "../components/abilities/AbilityScores";
import { object } from "prop-types";

export interface AbilityScores {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

const forEachKey = <T>(func: (key: keyof T) => any, obj: T): any =>
  (<(keyof T)[]>Object.keys(obj)).reduce(
    (a, b) => ({ ...a, [b]: func(b) }),
    {}
  );

const sumOfPositive = (a, b) => a + (b > 0 ? b : 0);

const sumPositiveObjectValues = obj => Object.values(obj).reduce(sumOfPositive);

const useAbilityScores = (): {
  abilityScores: AbilityScores;
  increment: (key: keyof AbilityScores) => void;
  decrement: (key: keyof AbilityScores) => void;
} => {
  const [character, setCharacter] = React.useContext(CharacterContext);
  return {
    abilityScores: <AbilityScores>(
      forEachKey(
        (key: keyof AbilityScores) => character.baseAbilityScores[key] + 10,
        character.baseAbilityScores
      )
    ),
    increment: (key: keyof AbilityScores) =>
      setCharacter(character => {
        if (
          sumPositiveObjectValues(character.baseAbilityScores) == 10 &&
          character.baseAbilityScores[key] >= 0
        ) {
          return character;
        }
        return {
          baseAbilityScores: {
            ...character.baseAbilityScores,
            [key]: character.baseAbilityScores[key] + 1
          }
        };
      }),
    decrement: (key: keyof AbilityScores) =>
      setCharacter(character => {
        return {
          baseAbilityScores: {
            ...character.baseAbilityScores,
            [key]: character.baseAbilityScores[key] - 1
          }
        };
      })
  };
};

export default useAbilityScores;
