import * as React from "react";
import useArmor from "../../character/useArmor";
import { Typography, Button, Fab, Theme } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import withStyles, { CSSProperties } from "@material-ui/core/styles/withStyles";
import { sendAlert, closeAlert } from "../../components/layout/Alert";
import armors, { Armor } from "../../rules/armor";
import { useState } from "react";
import Select from "../../components/form/Select";

type Classes = "addButton";

const styles = (theme: Theme): Record<Classes, CSSProperties> => ({
  addButton: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

const ArmorDetails: React.FC<{ armor: Armor }> = ({ armor }) => (
  <>
    <Typography variant="h5">{armor.model}</Typography>
    <div>
      <strong>Kinetic Armor Class:</strong> {armor.kacBonus}
    </div>
    <div>
      <strong>Energy Armor Class:</strong> {armor.eacBonus}
    </div>
    <div>
      <strong>Level:</strong> {armor.level}
    </div>
    <div>
      <strong>Price:</strong> {armor.price}
    </div>
  </>
);

const AddArmor: React.FC<{ onAdd: (armor: Armor) => void }> = ({ onAdd }) => {
  const [selectedArmor, setSelectedArmor] = useState(null as Armor | null);

  return (
    <>
      <div>
        <Select
          id="armor-select"
          label="Armor"
          options={armors.map(a => a.model)}
          value={(selectedArmor && selectedArmor.model) || ""}
          onChange={e =>
            setSelectedArmor(armors.find(a => a.model === e.target.value)!)
          }
        />
      </div>
      {selectedArmor && (
        <>
          <div>
            <ArmorDetails armor={selectedArmor} />
          </div>
          <Button
            color="primary"
            onClick={() => onAdd(selectedArmor)}
            disabled={selectedArmor == null}
          >
            Add Armor
          </Button>
        </>
      )}
    </>
  );
};

const ArmorContainer: React.FC<{ classes: Record<Classes, string> }> = ({
  classes
}) => {
  const { armor, addArmor, equipArmor, unequipArmor } = useArmor();

  return (
    <>
      {armor.map(a => (
        <div key={a.id}>
          <Typography variant="h6">{a.model}</Typography>
          {a.equipped ? (
            <Button color="primary" onClick={() => unequipArmor(a.id)}>
              Unequip
            </Button>
          ) : (
            <Button color="primary" onClick={() => equipArmor(a.id)}>
              Equip
            </Button>
          )}
        </div>
      ))}
      <Fab
        className={classes.addButton}
        color="primary"
        onClick={() =>
          sendAlert(
            <AddArmor
              onAdd={armor => {
                addArmor({ ...armor, equipped: false, id: "" });
                closeAlert();
              }}
            />
          )
        }
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default withStyles(styles)(ArmorContainer);
