import * as React from "react";
import useDetails from "../../character/useDetails";
import { withStyles, List, ListItem, ListItemText } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import Container from "../../components/layout/Container";

type Classes = "description";

const styles: Record<Classes, CSSProperties> = {
  description: {
    whiteSpace: "pre"
  }
};

interface DisplayCharacterDetailsProps {
  classes: Record<Classes, string>;
}

const DisplayCharacterDetails: React.FC<DisplayCharacterDetailsProps> = ({
  classes
}) => {
  const { details } = useDetails();
  return (
    <Container>
      <section>
        <div>
          <strong>Size:</strong> {details.size}
        </div>
        <div>
          <strong>Home World:</strong> {details.homeWorld}
        </div>
        <div>
          <strong>Deity:</strong> {details.deity}
        </div>
        <div>
          <strong>Alignment:</strong> {details.alignment}
        </div>
        <div>
          <strong>Languages:</strong>{" "}
          <List dense>
            {(details.languages || []).map(l => (
              <ListItem>
                <ListItemText>{l}</ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      </section>
      <section className={classes.description}>
        <div>
          <strong>Description:</strong>
        </div>
        {details.description}
      </section>
    </Container>
  );
};

export default withStyles(styles)(DisplayCharacterDetails);
