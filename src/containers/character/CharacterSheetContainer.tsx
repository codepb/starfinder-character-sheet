import * as React from "react";
import { Race } from "../../character/races";
import AbilityScoresContainer from "../skills/AbilityScoresContainer";
import { Theme } from "../../character/themes";

enum Page {
  start,
  theme,
  race,
  abilityScores
}

const CharacterSheetContainer: React.FC = () => {
  const [page, setPage] = React.useState(Page.start);
  switch (page) {
    case Page.start:
      return (
        <button onClick={() => setPage(Page.theme)}>Create Character</button>
      );
    case Page.theme:
      return (
        <>
          <select>
            {Object.keys(Theme).map(r => (
              <option value={r} key={r}>
                {r}
              </option>
            ))}
          </select>
          <button onClick={() => setPage(Page.race)}>Next</button>
        </>
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
