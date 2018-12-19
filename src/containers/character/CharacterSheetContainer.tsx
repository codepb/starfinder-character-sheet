import * as React from "react";
import AbilityScoresContainer from "../abilities/AbilityScoresContainer";
import ThemeSelection from "../theme/ThemeSelection";
import RaceSelection from "../race/RaceSelection";
import ClassSelection from "../class/ClassSelection";
import AssignSkillsContainer from "../skills/AssignSkillsContainer";

enum Page {
  start,
  theme,
  race,
  abilityScores,
  class,
  skills
}

const CharacterSheetContainer: React.FC = () => {
  const [page, setPage] = React.useState(Page.start);
  switch (page) {
    case Page.start:
      return (
        <button onClick={() => setPage(Page.theme)}>Create Character</button>
      );
    case Page.theme:
      return <ThemeSelection onNext={() => setPage(Page.race)} />;
    case Page.race:
      return <RaceSelection onNext={() => setPage(Page.class)} />;
    case Page.class:
      return <ClassSelection onNext={() => setPage(Page.abilityScores)} />;
    case Page.abilityScores:
      return (
        <>
          <AbilityScoresContainer />
          <button onClick={() => setPage(Page.skills)}>next</button>
        </>
      );
    case Page.skills:
      return <AssignSkillsContainer />;
  }
};

export default CharacterSheetContainer;
