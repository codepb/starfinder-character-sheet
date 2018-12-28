import * as React from "react";
import CharacterContext, { BasicStats, Details } from "./CharacterContext";
import Alignment from "../rules/alignments";

const useDetails = (): {
  details: Details;
  setAlignment: (newAlignment: Alignment) => void;
  setDeity: (deity: string) => void;
  setDescription: (description: string) => void;
  setHomeWorld: (homeWorld: string) => void;
  setLanguages: (languages: string[]) => void;
} => {
  const [{ details }, { setDetails }] = React.useContext(CharacterContext);
  return {
    details,
    setAlignment: newAlignment =>
      setDetails({ ...details, alignment: newAlignment }),
    setDeity: deity => setDetails({ ...details, deity }),
    setDescription: description => setDetails({ ...details, description }),
    setHomeWorld: homeWorld => setDetails({ ...details, homeWorld }),
    setLanguages: languages => setDetails({ ...details, languages })
  };
};

export default useDetails;
