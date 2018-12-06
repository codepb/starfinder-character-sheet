import * as React from "react";
import { Race } from "../../character/races";
import AbilityScoresContainer from "../skills/AbilityScoresContainer";

enum Page {
  start,
  race,
  abilityScores
}

const CharacterSheetContainer: React.FC = () => {
  const [page, setPage] = React.useState(Page.start);
  switch (page) {
    case Page.start:
      return (
        <button onClick={() => setPage(Page.race)}>Create Character</button>
      );
    case Page.race:
      return (
        <>
          <select>
            {Object.keys(Race).map(r => (
              <option value={r} key={r}>
                {r}
              </option>
            ))}
          </select>
          <button onClick={() => setPage(Page.abilityScores)}>Next</button>
        </>
      );
    case Page.abilityScores:
      return <AbilityScoresContainer />;
  }
};

export default CharacterSheetContainer;
