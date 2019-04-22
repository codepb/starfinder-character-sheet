import * as React from "react";
import { FC } from "react";

interface InitiativeProps {
  initiative: number;
}

const Initiative: FC<InitiativeProps> = ({ initiative }) => {
  return (
    <>
      <div>
        <label>Initiative</label> <span>{initiative}</span>
      </div>
    </>
  );
};

export default Initiative;
