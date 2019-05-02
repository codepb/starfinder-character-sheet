import useAbilityScores from "./useAbilityScores";
import { useContext } from "react";
import CharacterContext from "./CharacterContext";

export interface ArmorClasses {
  kinetic: number;
  energy: number;
  combatManeuvers: number;
}

interface ArmorClassesWithMisc extends ArmorClasses {
  misc: ArmorClasses;

  setMiscArmorClasses(key: keyof ArmorClasses, value: number): void;
}

const useArmorClasses = (): ArmorClassesWithMisc => {
  const { abilityModifiers } = useAbilityScores();
  const [
    {
      misc: { armorClasses }
    },
    { setMisc }
  ] = useContext(CharacterContext);

  const kinetic = 10 + (abilityModifiers.dexterity || 0) + armorClasses.kinetic;
  const energy = 10 + (abilityModifiers.dexterity || 0) + armorClasses.energy;
  const combatManeuvers = kinetic + 8;

  return {
    kinetic,
    energy,
    combatManeuvers,
    misc: armorClasses,
    setMiscArmorClasses: (key: keyof ArmorClasses, value: number) => {
      setMisc(previous => ({
        ...previous,
        armorClasses: {
          ...previous.armorClasses,
          [key]: value
        }
      }));
    }
  };
};

export default useArmorClasses;
