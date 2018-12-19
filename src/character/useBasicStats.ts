import * as React from "react";
import CharacterContext, { BasicStats } from "./CharacterContext";
import { Class } from "../rules/classes";
import { Theme } from "../rules/themes";
import { Race } from "../rules/races";

const useBasicStats = (): {
  basicStats: BasicStats;
  setClass: (newClass: Class) => void;
  setTheme: (newTheme: Theme) => void;
  setRace: (newRace: Race) => void;
} => {
  const [{ basicStats }, { setBasicStats }] = React.useContext(
    CharacterContext
  );
  return {
    basicStats,
    setClass: newClass => setBasicStats({ ...basicStats, class: newClass }),
    setTheme: newTheme => setBasicStats({ ...basicStats, theme: newTheme }),
    setRace: newRace => setBasicStats({ ...basicStats, race: newRace })
  };
};

export default useBasicStats;
