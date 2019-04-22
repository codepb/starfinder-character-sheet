import * as React from "react";
import { FC } from "react";
import Container from "../layout/Container";

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
    <Container>
      <div>
        <label>Stamina</label> <span>{stamina}</span>
      </div>
      <div>
        <label>Health</label> <span>{health}</span>
      </div>
      <div>
        <label>Resolve</label> <span>{resolve}</span>
      </div>
    </Container>
  );
};

export default HealthAndResolve;
