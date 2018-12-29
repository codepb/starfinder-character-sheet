import * as React from "react";
import useAbilityScores, { AbilityScores } from "./useAbilityScores";
import { Race } from "../rules/races";
import { Skills } from "./useSkills";
import { Theme } from "../rules/themes";
import { Class } from "../rules/classes";
import Alignment from "../rules/alignments";
import Size from "../rules/Size";

interface Character {
  baseAbilityScores: AbilityScores;
  baseSkills: Skills;
  basicStats: BasicStats;
  details: Details;
}

export interface BasicStats {
  race: Race;
  theme: Theme;
  class: Class;
}

export interface Details {
  deity: string;
  description: string;
  alignment: Alignment;
  homeWorld: string;
  languages: string[];
  name: string;
  size: Size;
}

interface CharacterUpdaters {
  setBaseAbilityScores: React.Dispatch<React.SetStateAction<AbilityScores>>;
  setBasicStats: React.Dispatch<React.SetStateAction<BasicStats>>;
  setBaseSkills: React.Dispatch<React.SetStateAction<Skills>>;
  setDetails: React.Dispatch<React.SetStateAction<Details>>;
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

const initialDetails: Details = {
  deity: "",
  description: "",
  alignment: Alignment.lawfulGood,
  homeWorld: "",
  languages: [""],
  name: "",
  size: Size.medium
};

const initialCharacter: Character = {
  baseAbilityScores: initialBaseAbilityScores,
  baseSkills: initialBaseSkills,
  basicStats: initalBasicStats,
  details: initialDetails
};

const initialContext: [Character, CharacterUpdaters] = [
  initialCharacter,
  {
    setBaseAbilityScores: () => {},
    setBaseSkills: () => {},
    setBasicStats: () => {},
    setDetails: () => {}
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
  const [details, setDetails] = React.useState(initialDetails);
  return (
    <CharacterContext.Provider
      value={[
        {
          baseAbilityScores,
          baseSkills,
          basicStats,
          details
        },
        {
          setBaseAbilityScores,
          setBaseSkills,
          setBasicStats,
          setDetails
        }
      ]}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;

export { CharacterProvider };
