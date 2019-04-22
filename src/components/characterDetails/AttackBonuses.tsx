import * as React from "react";
import { FC } from "react";
import { rollD20 } from "../../services/dice";

interface AttackBonusesProps {
  melee: number;
  ranged: number;
  thrown: number;
}

const makeAttackRoll = (modifier: number) => () => {
  const roll = rollD20();
  return `${roll} + ${modifier} -> ${roll + modifier}`;
};

const makeAndAlertAttackRoll = (modifier: number) => () =>
  alert(makeAttackRoll(modifier)());

const AttackBonuses: FC<AttackBonusesProps> = ({ melee, ranged, thrown }) => {
  return (
    <>
      <div>
        <label>Melee</label> <span>{melee}</span>{" "}
        <button onClick={makeAndAlertAttackRoll(melee)}>
          Make attack roll
        </button>
      </div>
      <div>
        <label>Ranged</label> <span>{ranged}</span>{" "}
        <button onClick={makeAndAlertAttackRoll(ranged)}>
          Make attack roll
        </button>
      </div>
      <div>
        <label>Thrown</label> <span>{thrown}</span>{" "}
        <button onClick={makeAndAlertAttackRoll(thrown)}>
          Make attack roll
        </button>
      </div>
    </>
  );
};

export default AttackBonuses;
