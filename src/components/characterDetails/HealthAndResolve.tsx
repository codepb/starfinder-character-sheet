import * as React from "react";
import { useState } from "react";
import { FC } from "react";
import { HealthAndResolve as HealthAndResolveType } from "../../character/CharacterContext";
import { Button, TextField } from "@material-ui/core";
import { sendAlert, closeAlert } from "../layout/Alert";
import DisplayValue from "../layout/DisplayValue";

interface HealthAndResolveProps {
  maxStamina: number;
  maxHealth: number;
  maxResolve: number;
  damage: HealthAndResolveType;

  addDamage(amount: number): void;
  restoreStamina(amount: number): void;
  restoreHealth(amount: number): void;
}

const AmountAlert: React.FC<{
  onSubmit: (amount: number) => void;
  submitText: string;
}> = ({ onSubmit, submitText }) => {
  const [damage, setDamage] = useState(0);

  return (
    <>
      <div>How much?</div>
      <TextField
        type="number"
        value={damage}
        onChange={e => setDamage(Number(e.target.value))}
        InputLabelProps={{
          shrink: true
        }}
        margin="normal"
      />
      <Button color="primary" onClick={e => onSubmit(damage)}>
        {submitText}
      </Button>
    </>
  );
};

const HealthAndResolve: FC<HealthAndResolveProps> = ({
  maxStamina,
  maxHealth,
  maxResolve,
  damage,
  addDamage,
  restoreStamina,
  restoreHealth
}) => {
  return (
    <>
      <DisplayValue label="Stamina">
        {maxStamina - damage.stamina}/{maxStamina}
      </DisplayValue>
      <DisplayValue label="Health">
        {maxHealth - damage.health}/{maxHealth}
      </DisplayValue>
      <DisplayValue label="Resolve">
        {maxResolve - damage.resolve}/{maxResolve}
      </DisplayValue>
      <Button
        color="primary"
        onClick={() =>
          sendAlert(
            <AmountAlert
              onSubmit={value => {
                addDamage(value);
                closeAlert();
              }}
              submitText="Add Damage"
            />
          )
        }
      >
        Add Damage
      </Button>
      <Button
        color="primary"
        onClick={() =>
          sendAlert(
            <AmountAlert
              onSubmit={value => {
                restoreStamina(value);
                closeAlert();
              }}
              submitText="Restore Stamina"
            />
          )
        }
      >
        Restore Stamina
      </Button>
      <Button
        color="primary"
        onClick={() =>
          sendAlert(
            <AmountAlert
              onSubmit={value => {
                restoreHealth(value);
                closeAlert();
              }}
              submitText="Restore Health"
            />
          )
        }
      >
        Restore Health
      </Button>
    </>
  );
};

export default HealthAndResolve;
