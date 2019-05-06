import { useContext } from "react";
import CharacterContext, { OwnedWeapon } from "./CharacterContext";
import { generateGuid } from "../services/guidService";

const useWeapons = () => {
  const [{ weapons }, { setWeapons }] = useContext(CharacterContext);

  return {
    weapons,
    addWeapon: (weapons: OwnedWeapon) => {
      const id = generateGuid();
      const newWeapons = { ...weapons, id: id };

      setWeapons(previous => [...previous, newWeapons]);
    },
    removeWeapon: (id: string) => {
      setWeapons(previous => previous.filter(a => a.id !== id));
    }
  };
};

export default useWeapons;
