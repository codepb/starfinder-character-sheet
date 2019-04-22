import * as React from "react";
import { FC } from "react";

interface SavingThrowsProps {
  fortitude: number;
  reflex: number;
  will: number;
}

const SavingThrows: FC<SavingThrowsProps> = ({ fortitude, reflex, will }) => {
  return (
    <>
      <div>
        <label>Fortitude</label> <span>{fortitude}</span>
      </div>
      <div>
        <label>Reflex</label> <span>{reflex}</span>
      </div>
      <div>
        <label>Will</label> <span>{will}</span>
      </div>
    </>
  );
};

export default SavingThrows;
