import * as React from "react";

const CharacterContext = React.createContext({});

const CharacterProvider: React.FC = () => {
  const [state, setState] = React.useState({});
  return <CharacterContext.Provider value={state} />;
};

export default CharacterContext;

export { CharacterProvider };
