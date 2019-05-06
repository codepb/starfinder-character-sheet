import { useContext } from "react";
import CharacterContext, { Equipment } from "./CharacterContext";
import { generateGuid } from "../services/guidService";
import { sum } from "../services/mathService";

const useEquipment = () => {
  const [{ weapons, armor, equipment }, { setEquipment }] = useContext(
    CharacterContext
  );

  return {
    equipment,
    totalBulk: [...weapons, ...armor, ...equipment]
      .map(i => i.bulk)
      .reduce(sum, 0),
    addEquipment: (equipment: Equipment) => {
      const id = generateGuid();
      const newEquipment = { ...equipment, id: id };

      setEquipment(previous => [...previous, newEquipment]);
    },
    removeEquipment: (id: string) => {
      setEquipment(previous => previous.filter(a => a.id !== id));
    }
  };
};

export default useEquipment;
