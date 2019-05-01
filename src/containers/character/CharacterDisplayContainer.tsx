import * as React from "react";
import AbilityScoreModifiers from "../../components/abilities/AbilityScoreModifiers";
import useAbilityScores from "../../character/useAbilityScores";
import SkillsDisplay from "../../components/skills/SkillsDisplay";
import useSkills from "../../character/useSkills";
import useBasicStats from "../../character/useBasicStats";
import useHealth from "../../character/useHealth";
import HealthAndResolve from "../../components/characterDetails/HealthAndResolve";
import useInitiative from "../../character/useInitiative";
import Initiative from "../../components/characterDetails/Initiative";
import SavingThrows from "../../components/characterDetails/SavingThrows";
import useSavingThrows from "../../character/useSavingThrows";
import AttackBonuses from "../../components/characterDetails/AttackBonuses";
import useAttackBonuses from "../../character/useAttackBonuses";
import useArmorClasses from "../../character/useArmorClasses";
import ArmorClasses from "../../components/characterDetails/ArmorClasses";
import {
  Grid,
  Typography,
  Button,
  AppBar,
  Tabs,
  Tab,
  Divider
} from "@material-ui/core";
import useDetails from "../../character/useDetails";
import { useLevels } from "../../services/classService";
import { useState } from "react";
import AddLevel from "../../components/levels/AddLevel";
import { Class } from "../../rules/classes";
import NotesContainer from "../notes/NotesContainer";
import AssignSkillsContainer from "../skills/AssignSkillsContainer";
import DisplaySkillsContainer from "../skills/DisplaySkillsContainer";
import Container from "../../components/layout/Container";

enum Page {
  Sheet,
  AddLevel,
  AddSkills
}

const CharacterDisplayContainer: React.FC = () => {
  const { abilityScores, abilityModifiers } = useAbilityScores();
  const [page, setPage] = useState(Page.Sheet);
  const [tab, setTab] = useState(0);
  const healthAndResolve = useHealth();
  const savingThrows = useSavingThrows();
  const initiative = useInitiative();
  const attackBonsues = useAttackBonuses();
  const armorClasses = useArmorClasses();
  const { details } = useDetails();
  const levels = useLevels();
  const [levelClass, setLevelClass] = useState(levels[0][0]);
  const { addClassLevel } = useBasicStats();

  const currentLevel = levels.reduce((rv, curr) => curr[1] + rv, 0);
  if (page === Page.AddLevel) {
    return (
      <AddLevel
        classes={Object.values(Class)}
        currentClass={levelClass}
        onChange={(selectedClass: string) =>
          setLevelClass(selectedClass as Class)
        }
        onConfirm={() => {
          addClassLevel(levelClass);
          setPage(Page.AddSkills);
        }}
        onGoBack={() => setPage(Page.Sheet)}
      />
    );
  }

  if (page === Page.AddSkills) {
    return (
      <>
        <AssignSkillsContainer level={currentLevel} />
        <Button onClick={() => setPage(Page.Sheet)}>Finish</Button>
      </>
    );
  }

  return (
    <>
      <Typography variant="h3" align="center">
        {details.name}
      </Typography>
      <Typography align="center">
        {levels
          .map(([characterClass, level]) => `${characterClass}(${level})`)
          .join(" / ")}
      </Typography>
      <Button onClick={() => setPage(Page.AddLevel)}>Add Level</Button>
      <AppBar position="static" color="default">
        <Tabs
          value={tab}
          onChange={(e, value) => setTab(value)}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Abilities" />
          <Tab label="Skills" />
          <Tab label="Attack" />
          <Tab label="Health &amp; Defense" />
          <Tab label="Notes" />
        </Tabs>
      </AppBar>
      {tab === 0 && (
        <Container>
          <AbilityScoreModifiers
            abilityScores={abilityScores}
            abilityModifiers={abilityModifiers}
          />
          <Divider />
          <SavingThrows {...savingThrows} />
        </Container>
      )}
      {tab === 1 && <DisplaySkillsContainer />}
      {tab === 2 && (
        <Container>
          <Initiative initiative={initiative} />
          <Divider />
          <AttackBonuses {...attackBonsues} />
        </Container>
      )}
      {tab === 3 && (
        <>
          <HealthAndResolve {...healthAndResolve} />

          <ArmorClasses {...armorClasses} />
        </>
      )}
      {tab === 4 && <NotesContainer />}
    </>
  );
};

export default CharacterDisplayContainer;
