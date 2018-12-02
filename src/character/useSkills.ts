import * as React from "react";
import { SetStateAction } from "react";

interface Skills {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

const useSkills = (): [Skills, React.Dispatch<SetStateAction<Skills>>] => {
  return React.useState({
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10
  });
};

export default useSkills;

export { Skills };
