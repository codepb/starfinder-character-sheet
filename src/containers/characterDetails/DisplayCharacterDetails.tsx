import * as React from "react";
import useDetails from "../../character/useDetails";
import { withStyles } from "@material-ui/core";
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
      <section className={classes.description}>{details.description}</section>
    </Container>
  );
};

export default withStyles(styles)(DisplayCharacterDetails);
