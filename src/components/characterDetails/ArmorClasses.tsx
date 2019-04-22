import * as React from "react";
import { FC } from "react";
import Container from "../layout/Container";

interface ArmorClassesProps {
  kinetic: number;
  energy: number;
  combatManeuvers: number;
}

const ArmorClasses: FC<ArmorClassesProps> = ({
  kinetic,
  energy,
  combatManeuvers
}) => {
  return (
    <Container>
      <div>
        <label>Kinetic</label> <span>{kinetic}</span>
      </div>
      <div>
        <label>Energy</label> <span>{energy}</span>
      </div>
      <div>
        <label>AC vs Combat Maneuvers</label> <span>{combatManeuvers}</span>
      </div>
    </Container>
  );
};

export default ArmorClasses;
