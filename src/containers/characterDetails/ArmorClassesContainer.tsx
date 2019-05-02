import * as React from "react";
import useAttackBonuses from "../../character/useAttackBonuses";
import AttackBonuses from "../../components/characterDetails/AttackBonuses";
import ArmorClasses from "../../components/characterDetails/ArmorClasses";
import useArmorClasses from "../../character/useArmorClasses";

const ArmorClassesContainer: React.FC = () => {
  const {
    kinetic,
    energy,
    combatManeuvers,
    misc,
    setMiscArmorClasses
  } = useArmorClasses();

  return (
    <>
      <ArmorClasses
        kinetic={kinetic}
        energy={energy}
        misc={misc}
        onMiscChange={setMiscArmorClasses}
      />
      <div>
        AC vs Combat Maneuvers: <strong>{combatManeuvers}</strong>
      </div>
    </>
  );
};

export default ArmorClassesContainer;
