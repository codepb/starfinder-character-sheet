import * as React from "react";
import { AbilityScores } from "./useAbilityScores";
import { Race } from "../rules/races";
import { Skills, SkillLevels } from "./useSkills";
import { Theme } from "../rules/themes";
import { Class } from "../rules/classes";
import Alignment from "../rules/alignments";
import Size from "../rules/Size";
import { useEffect, useState } from "react";
import { mergeDeep } from "../helpers/objectHelpers";
import { save, load } from "../services/storageService";

export interface SkillsLevels {
  levels: Skills[];
  misc: SkillLevels;
}

export interface AbilityLevels {
  levels: AbilityScores[];
  misc: AbilityScores;
}

export interface Character {
  abilityLevels: AbilityLevels;
  skills: SkillsLevels;
  basicStats: BasicStats;
  details: Details;
  notes: string;
}

interface CharacterWithCreated extends Character {
  characterCreated: boolean;
}

export interface BasicStats {
  race: Race;
  theme: Theme;
  classLevels: Record<Class, number>;
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

const loadedCharacter = load();

const persistedCharacter =
  loadedCharacter != null ? loadedCharacter : ({} as Character);

interface CharacterUpdaters {
  setAbilityLevels: React.Dispatch<React.SetStateAction<AbilityLevels>>;
  setBasicStats: React.Dispatch<React.SetStateAction<BasicStats>>;
  setSkills: React.Dispatch<React.SetStateAction<SkillsLevels>>;
  setDetails: React.Dispatch<React.SetStateAction<Details>>;
  setCharacterCreated: React.Dispatch<React.SetStateAction<boolean>>;
  setNotes: React.Dispatch<React.SetStateAction<string>>;
}

const initialAbilityLevels: AbilityLevels = mergeDeep(
  {
    levels: [
      {
        strength: 0,
        charisma: 0,
        constitution: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0
      }
    ],
    misc: {
      strength: 0,
      charisma: 0,
      constitution: 0,
      dexterity: 0,
      intelligence: 0,
      wisdom: 0
    }
  },
  persistedCharacter.abilityLevels
);

const initialSkills: SkillsLevels = mergeDeep(
  { levels: [], misc: {} },
  persistedCharacter.skills
);

const initalBasicStats: BasicStats = mergeDeep(
  {
    race: Race.ANDROID,
    theme: Theme.THEMELESS,
    classLevels: { [Class.Envoy]: 1 }
  },
  persistedCharacter.basicStats
);

const initialDetails: Details = mergeDeep(
  {
    deity: "",
    description: "",
    alignment: Alignment.lawfulGood,
    homeWorld: "",
    languages: [""],
    name: "",
    size: Size.medium
  },
  persistedCharacter.details
);

const initialNotes: string = persistedCharacter.notes || "";

const initialCharacter: CharacterWithCreated = {
  abilityLevels: initialAbilityLevels,
  skills: initialSkills,
  basicStats: initalBasicStats,
  details: initialDetails,
  characterCreated: false,
  notes: initialNotes
};

const initialContext: [CharacterWithCreated, CharacterUpdaters] = [
  initialCharacter,
  {
    setAbilityLevels: () => {},
    setSkills: () => {},
    setBasicStats: () => {},
    setDetails: () => {},
    setCharacterCreated: () => {},
    setNotes: () => {}
  }
];

const CharacterContext: React.Context<
  [CharacterWithCreated, CharacterUpdaters]
> = React.createContext(initialContext);

const CharacterProvider: React.FC<React.Attributes> = ({ children }) => {
  const [abilityLevels, setAbilityLevels] = useState(initialAbilityLevels);
  const [skills, setSkills] = useState(initialSkills);
  const [basicStats, setBasicStats] = useState(initalBasicStats);
  const [details, setDetails] = useState(initialDetails);
  const [characterCreated, setCharacterCreated] = useState(
    loadedCharacter != null
  );
  const [notes, setNotes] = useState(initialNotes);

  const characterState = [abilityLevels, skills, basicStats, details, notes];
  const character = { abilityLevels, skills, basicStats, details, notes };

  useEffect(() => {
    save(character);
  }, characterState);
  return (
    <CharacterContext.Provider
      value={[
        {
          ...character,
          characterCreated
        },
        {
          setAbilityLevels: setAbilityLevels,
          setSkills,
          setBasicStats,
          setDetails,
          setCharacterCreated,
          setNotes
        }
      ]}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;

export { CharacterProvider };
