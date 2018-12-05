import * as React from "react";
import useAbilityScores, { AbilityScores } from "./useAbilityScores";

interface Character {
  baseAbilityScores: AbilityScores;
}

const initialState: Character = {
  baseAbilityScores: {
    strength: 0,
    charisma: 0,
    constitution: 0,
    dexterity: 0,
    intelligence: 0,
    wisdom: 0
  }
};

const initialContext: [
  Character,
  React.Dispatch<React.SetStateAction<Character>>
] = [initialState, () => {}];

const CharacterContext: React.Context<
  [Character, React.Dispatch<React.SetStateAction<Character>>]
> = React.createContext(initialContext);

const CharacterProvider: React.FC<React.Attributes> = ({ children }) => {
  const [character, setCharacter] = React.useState(initialState);
  return (
    <CharacterContext.Provider value={[character, setCharacter]}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;

export { CharacterProvider };
