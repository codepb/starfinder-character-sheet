import * as React from "react";
import useAbilityScores, { AbilityScores } from "./useAbilityScores";
import { Race } from "./races";

interface Character {
  baseAbilityScores: AbilityScores;
  basicStats: BasicStats;
}

interface BasicStats {
  race: Race;
}

interface CharacterUpdaters {
  setBaseAbilityScores: React.Dispatch<React.SetStateAction<AbilityScores>>;
  setBasicStats: React.Dispatch<React.SetStateAction<BasicStats>>;
}

const initialBaseAbilityScores: AbilityScores = {
  strength: 0,
  charisma: 0,
  constitution: 0,
  dexterity: 0,
  intelligence: 0,
  wisdom: 0
};

const initalBasicStats: BasicStats = {
  race: Race.ANDROID
};

const initialCharacter: Character = {
  baseAbilityScores: initialBaseAbilityScores,
  basicStats: initalBasicStats
};

const initialContext: [Character, CharacterUpdaters] = [
  initialCharacter,
  {
    setBaseAbilityScores: () => {},
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
  const [basicStats, setBasicStats] = React.useState(initalBasicStats);
  return (
    <CharacterContext.Provider
      value={[
        {
          baseAbilityScores,
          basicStats
        },
        {
          setBaseAbilityScores,
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
