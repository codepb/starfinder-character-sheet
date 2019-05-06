import * as React from "react";
import useDetails from "../../character/useDetails";
import { withStyles, List, ListItem, ListItemText } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import Container from "../../components/layout/Container";
import DisplayValue from "../../components/layout/DisplayValue";

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
        <DisplayValue label="Size">{details.size}</DisplayValue>
        <DisplayValue label="Home World">{details.homeWorld}</DisplayValue>
        <DisplayValue label="Deity">{details.deity}</DisplayValue>
        <DisplayValue label="Alignment">{details.alignment}</DisplayValue>
        <DisplayValue label="Languages">
          {(details.languages || []).join(", ")}
        </DisplayValue>
      </section>
      <section className={classes.description}>
        <DisplayValue label="Description">{details.description}</DisplayValue>
      </section>
    </Container>
  );
};

export default withStyles(styles)(DisplayCharacterDetails);
