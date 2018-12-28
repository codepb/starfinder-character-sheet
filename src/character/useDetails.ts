import * as React from "react";
import CharacterContext, { BasicStats, Details } from "./CharacterContext";
import Alignment from "../rules/alignments";

const useDetails = (): {
  details: Details;
  setAlignment: (newAlignment: Alignment) => void;
} => {
  const [{ details }, { setDetails }] = React.useContext(CharacterContext);
  return {
    details,
    setAlignment: newAlignment =>
      setDetails({ ...details, alignment: newAlignment })
  };
};

export default useDetails;
