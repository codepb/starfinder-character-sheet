import * as React from "react";
import { FC } from "react";

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
    <>
      <div>
        <label>Kinetic</label> <span>{kinetic}</span>
      </div>
      <div>
        <label>Energy</label> <span>{energy}</span>
      </div>
      <div>
        <label>AC vs Combat Maneuvers</label> <span>{combatManeuvers}</span>
      </div>
    </>
  );
};

export default ArmorClasses;
