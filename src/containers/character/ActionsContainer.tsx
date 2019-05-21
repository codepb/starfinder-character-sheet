import * as React from "react";
import { downloadCharacter } from "../../services/storageService";
import { Button } from "@material-ui/core";
import { useContext } from "react";
import CharacterContext from "../../character/CharacterContext";

const ActionsContainer: React.FC = () => {
  const [character] = useContext(CharacterContext);

  return (
    <>
      <Button onClick={() => downloadCharacter(character)}>Download</Button>
    </>
  );
};

export default ActionsContainer;
