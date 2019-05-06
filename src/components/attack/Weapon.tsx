import * as React from "react";
import { OwnedWeapon } from "../../character/CharacterContext";
import { Typography } from "@material-ui/core";

interface WeaponProps {
  weapon: OwnedWeapon;
}

const Weapon: React.FC<WeaponProps> = ({ weapon }) => (
  <>
    <Typography variant="subtitle1">{weapon.name}</Typography>
  </>
);

export default Weapon;
