import * as React from "react";
import useAttackBonuses from "../../character/useAttackBonuses";
import AttackBonuses from "../../components/characterDetails/AttackBonuses";

const AttackBonusesContainer: React.FC = () => {
  const {
    melee,
    ranged,
    thrown,
    baseAttackBonus,
    misc,
    setMiscAttackBonuses
  } = useAttackBonuses();

  return (
    <>
      <AttackBonuses
        melee={melee}
        ranged={ranged}
        thrown={thrown}
        misc={misc}
        onMiscChange={setMiscAttackBonuses}
      />
      <div>
        Base Attack Bonus: <strong>{baseAttackBonus}</strong>
      </div>
    </>
  );
};

export default AttackBonusesContainer;
