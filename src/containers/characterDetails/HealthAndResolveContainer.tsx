import * as React from "react";
import HealthAndResolve from "../../components/characterDetails/HealthAndResolve";
import useHealth from "../../character/useHealth";

const HealthAndResolveContainer: React.FC = () => {
  const { max, damage, addDamage, restoreHealth, restoreStamina } = useHealth();

  return (
    <HealthAndResolve
      maxHealth={max.health}
      maxResolve={max.resolve}
      maxStamina={max.stamina}
      damage={damage}
      addDamage={addDamage}
      restoreHealth={restoreHealth}
      restoreStamina={restoreStamina}
    />
  );
};

export default HealthAndResolveContainer;
