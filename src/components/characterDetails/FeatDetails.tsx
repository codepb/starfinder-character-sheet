import * as React from "react";
import { Feat } from "../../rules/feats";
import { Typography, Checkbox } from "@material-ui/core";

const FeatDetails: React.FC<{ feat: Feat }> = ({ feat }) => (
  <>
    <Typography variant="h5">{feat.name}</Typography>
    <div>
      <strong>Prerequisites:</strong> {feat.prerequisites}
    </div>
    <div>
      <strong>Combat Feat:</strong>{" "}
      <Checkbox checked={feat.isCombatFeat} disabled />
    </div>
    <div>
      <strong>Benefit:</strong> {feat.benefit}
    </div>
  </>
);

export default FeatDetails;
