import * as React from "react";
import CharacterContext, { BasicStats, Details } from "./CharacterContext";
import Alignment from "../rules/alignments";
import Size from "../rules/Size";

const useDetails = (): {
  details: Details;
  setAlignment: (newAlignment: Alignment) => void;
  setDeity: (deity: string) => void;
  setDescription: (description: string) => void;
  setHomeWorld: (homeWorld: string) => void;
  setLanguages: (languages: string[]) => void;
  setName: (name: string) => void;
  setSize: (size: Size) => void;
} => {
  const [{ details }, { setDetails }] = React.useContext(CharacterContext);
  return {
    details,
    setAlignment: newAlignment =>
      setDetails({ ...details, alignment: newAlignment }),
    setDeity: deity => setDetails({ ...details, deity }),
    setDescription: description => setDetails({ ...details, description }),
    setHomeWorld: homeWorld => setDetails({ ...details, homeWorld }),
    setLanguages: languages => setDetails({ ...details, languages }),
    setName: name => setDetails({ ...details, name }),
    setSize: size => setDetails({ ...details, size })
  };
};

export default useDetails;
