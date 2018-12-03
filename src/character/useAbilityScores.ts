import * as React from "react";
import { SetStateAction } from "react";

export interface AbilityScores {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

const useAbilityScores = (): [
  AbilityScores,
  React.Dispatch<SetStateAction<AbilityScores>>
] => {
  return React.useState({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
  });
};

export default useAbilityScores;
