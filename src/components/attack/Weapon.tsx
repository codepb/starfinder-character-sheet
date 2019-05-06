import * as React from "react";
import { OwnedWeapon } from "../../character/CharacterContext";
import { Typography, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

interface WeaponProps {
  weapon: OwnedWeapon;

  onRemoveWeapon(id: string): void;
}

const Weapon: React.FC<WeaponProps> = ({ weapon, onRemoveWeapon }) => (
  <>
    <Typography variant="subtitle1">
      {weapon.name}{" "}
      <Button
        aria-label="Delete"
        color="secondary"
        onClick={e => {
          e.stopPropagation();
          onRemoveWeapon(weapon.id);
        }}
      >
        <DeleteIcon fontSize="small" />
      </Button>
    </Typography>
  </>
);

export default Weapon;
