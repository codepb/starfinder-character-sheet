import * as React from "react";
import useAbilityScores, { AbilityScores } from "./useAbilityScores";
import { Race } from "../rules/races";
import { Skills } from "./useSkills";
import { Theme } from "../rules/themes";
import { Class } from "../rules/classes";

interface Character {
  baseAbilityScores: AbilityScores;
  baseSkills: Skills;
  basicStats: BasicStats;
}

export interface BasicStats {
  race: Race;
  theme: Theme;
  class: Class;
}

interface CharacterUpdaters {
  setBaseAbilityScores: React.Dispatch<React.SetStateAction<AbilityScores>>;
  setBasicStats: React.Dispatch<React.SetStateAction<BasicStats>>;
  setBaseSkills: React.Dispatch<React.SetStateAction<Skills>>;
}

const initialBaseAbilityScores: AbilityScores = {
  strength: 0,
  charisma: 0,
  constitution: 0,
  dexterity: 0,
  intelligence: 0,
  wisdom: 0
};

const initialBaseSkills: Skills = {};

const initalBasicStats: BasicStats = {
  race: Race.ANDROID,
  theme: Theme.THEMELESS,
  class: Class.Envoy
};

const initialCharacter: Character = {
  baseAbilityScores: initialBaseAbilityScores,
  baseSkills: initialBaseSkills,
  basicStats: initalBasicStats
};

const initialContext: [Character, CharacterUpdaters] = [
  initialCharacter,
  {
    setBaseAbilityScores: () => {},
    setBaseSkills: () => {},
    setBasicStats: () => {}
  }
];

const CharacterContext: React.Context<
  [Character, CharacterUpdaters]
> = React.createContext(initialContext);

const CharacterProvider: React.FC<React.Attributes> = ({ children }) => {
  const [baseAbilityScores, setBaseAbilityScores] = React.useState(
    initialBaseAbilityScores
  );
  const [baseSkills, setBaseSkills] = React.useState(initialBaseSkills);
  const [basicStats, setBasicStats] = React.useState(initalBasicStats);
  return (
    <CharacterContext.Provider
      value={[
        {
          baseAbilityScores,
          baseSkills,
          basicStats
        },
        {
          setBaseAbilityScores,
          setBaseSkills,
          setBasicStats
        }
      ]}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;

export { CharacterProvider };
