import * as React from "react";
import { FC } from "react";

interface HealthAndResolveProps {
  stamina: number;
  health: number;
  resolve: number;
}

const HealthAndResolve: FC<HealthAndResolveProps> = ({
  stamina,
  health,
  resolve
}) => {
  return (
    <>
      <div>
        <label>Stamina</label> <span>{stamina}</span>
      </div>
      <div>
        <label>Health</label> <span>{health}</span>
      </div>
      <div>
        <label>Resolve</label> <span>{resolve}</span>
      </div>
    </>
  );
};

export default HealthAndResolve;
