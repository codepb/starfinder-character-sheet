import * as React from "react";
import { AbilityScores } from "./useAbilityScores";
import { Race } from "../rules/races";
import { Skills } from "./useSkills";
import { Theme } from "../rules/themes";
import { Class } from "../rules/classes";
import Alignment from "../rules/alignments";
import Size from "../rules/Size";
import { useEffect, useState } from "react";
import { mergeDeep } from "../helpers/objectHelpers";

interface Character {
  baseAbilityScores: AbilityScores;
  skills: Skills[];
  basicStats: BasicStats;
  details: Details;
  characterCreated: boolean;
  notes: string;
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

const persistedCharacterJSON = localStorage.getItem("character");

const persistedCharacter =
  persistedCharacterJSON != null ? JSON.parse(persistedCharacterJSON) : [];

interface CharacterUpdaters {
  setBaseAbilityScores: React.Dispatch<React.SetStateAction<AbilityScores>>;
  setBasicStats: React.Dispatch<React.SetStateAction<BasicStats>>;
  setSkills: React.Dispatch<React.SetStateAction<Skills[]>>;
  setDetails: React.Dispatch<React.SetStateAction<Details>>;
  setCharacterCreated: React.Dispatch<React.SetStateAction<boolean>>;
  setNotes: React.Dispatch<React.SetStateAction<string>>;
}

const initialBaseAbilityScores: AbilityScores = mergeDeep(
  {
    strength: 0,
    charisma: 0,
    constitution: 0,
    dexterity: 0,
    intelligence: 0,
    wisdom: 0
  },
  persistedCharacter[0]
);

const initialSkills: Skills[] = persistedCharacter[1] || [];

const initalBasicStats: BasicStats = mergeDeep(
  {
    race: Race.ANDROID,
    theme: Theme.THEMELESS,
    classLevels: { [Class.Envoy]: 1 }
  },
  persistedCharacter[2]
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
  persistedCharacter[3]
);

const initialNotes: string = persistedCharacter[4] || "";

const initialCharacter: Character = {
  baseAbilityScores: initialBaseAbilityScores,
  skills: initialSkills,
  basicStats: initalBasicStats,
  details: initialDetails,
  characterCreated: false,
  notes: initialNotes
};

const initialContext: [Character, CharacterUpdaters] = [
  initialCharacter,
  {
    setBaseAbilityScores: () => {},
    setSkills: () => {},
    setBasicStats: () => {},
    setDetails: () => {},
    setCharacterCreated: () => {},
    setNotes: () => {}
  }
];

const CharacterContext: React.Context<
  [Character, CharacterUpdaters]
> = React.createContext(initialContext);

const CharacterProvider: React.FC<React.Attributes> = ({ children }) => {
  const [baseAbilityScores, setBaseAbilityScores] = useState(
    initialBaseAbilityScores
  );
  const [skills, setSkills] = useState(initialSkills);
  const [basicStats, setBasicStats] = useState(initalBasicStats);
  const [details, setDetails] = useState(initialDetails);
  const [characterCreated, setCharacterCreated] = useState(
    persistedCharacterJSON != null
  );
  const [notes, setNotes] = useState(initialNotes);

  const characterState = [
    baseAbilityScores,
    skills,
    basicStats,
    details,
    notes
  ];

  useEffect(() => {
    localStorage.setItem("character", JSON.stringify(characterState));
  }, characterState);
  return (
    <CharacterContext.Provider
      value={[
        {
          baseAbilityScores,
          skills,
          basicStats,
          details,
          characterCreated,
          notes
        },
        {
          setBaseAbilityScores,
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
