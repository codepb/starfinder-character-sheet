import * as React from "react";
import useAbilityScores, { AbilityScores } from "./useAbilityScores";

interface Character {
  abilityScores: AbilityScores;
}

const CharacterContext: React.Context<Character> = React.createContext({
  abilityScores: {
    strength: 10,
    charisma: 10,
    constitution: 10,
    dexterity: 10,
    intelligence: 10,
    wisdom: 10
  }
});

const CharacterProvider: React.FC<React.Attributes> = ({ children }) => {
  const getAbilityScores = (): AbilityScores => {
    const [abilityScores, _] = useAbilityScores();
    const scores: AbilityScores = {
      strength: 10 + abilityScores.strength,
      charisma: 10 + abilityScores.charisma,
      constitution: 10 + abilityScores.constitution,
      dexterity: 10 + abilityScores.dexterity,
      intelligence: 10 + abilityScores.intelligence,
      wisdom: 10 + abilityScores.wisdom
    };
    return scores;
  };
  const character: Character = {
    abilityScores: getAbilityScores()
  };
  return (
    <CharacterContext.Provider value={character}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;

export { CharacterProvider };
