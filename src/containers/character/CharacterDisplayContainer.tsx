import * as React from "react";
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
import DisplayAbilityScoresContainer from "../abilities/DisplayAbilityScoresContainer";
import DisplayCharacterDetails from "../characterDetails/DisplayCharacterDetails";
import LevelUpAbilityScoresContainer from "../abilities/LevelUpAbilityScoresContainer";
import SavingThrowsContainer from "../characterDetails/SavingThrowsContainer";
import InitiativeContainer from "../characterDetails/InitiativeContainer";
import AttackBonusesContainer from "../characterDetails/AttackBonusesContainer";

enum Page {
  Sheet,
  AddLevel,
  AddAbilities,
  AddSkills
}

const CharacterDisplayContainer: React.FC = () => {
  const [page, setPage] = useState(Page.Sheet);
  const [tab, setTab] = useState(0);
  const healthAndResolve = useHealth();
  const attackBonsues = useAttackBonuses();
  const armorClasses = useArmorClasses();
  const { details, race, theme } = useDetails();
  const levels = useLevels();
  const [levelClass, setLevelClass] = useState(levels[0][0]);
  const { addClassLevel } = useBasicStats();

  const currentLevel = levels.reduce((rv, curr) => curr[1] + rv, 0);
  if (page === Page.AddLevel) {
    const levelIsMultipleOfFive = (currentLevel + 1) % 5 === 0;
    console.log(currentLevel);
    return (
      <AddLevel
        classes={Object.values(Class)}
        currentClass={levelClass}
        onChange={(selectedClass: string) =>
          setLevelClass(selectedClass as Class)
        }
        onConfirm={() => {
          addClassLevel(levelClass);
          setPage(levelIsMultipleOfFive ? Page.AddAbilities : Page.AddSkills);
        }}
        onGoBack={() => setPage(Page.Sheet)}
      />
    );
  }

  if (page === Page.AddAbilities) {
    return (
      <>
        <LevelUpAbilityScoresContainer level={currentLevel} />
        <Button onClick={() => setPage(Page.AddSkills)}>Next</Button>
      </>
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
        {race}, {theme},{" "}
        {levels
          .map(([characterClass, level]) => `${characterClass}(${level})`)
          .join("/")}
      </Typography>
      <Button onClick={() => setPage(Page.AddLevel)}>Add Level</Button>
      <AppBar position="static" color="default">
        <Tabs
          value={tab}
          onChange={(_, value) => setTab(value)}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Details" />
          <Tab label="Abilities" />
          <Tab label="Skills" />
          <Tab label="Attack" />
          <Tab label="Health &amp; Defense" />
          <Tab label="Notes" />
        </Tabs>
      </AppBar>
      {tab === 0 && <DisplayCharacterDetails />}
      {tab === 1 && (
        <Container>
          <DisplayAbilityScoresContainer />
          <Divider />
          <SavingThrowsContainer />
        </Container>
      )}
      {tab === 2 && <DisplaySkillsContainer />}
      {tab === 3 && (
        <Container>
          <InitiativeContainer />
          <Divider />
          <AttackBonusesContainer />
        </Container>
      )}
      {tab === 4 && (
        <>
          <HealthAndResolve {...healthAndResolve} />

          <ArmorClasses {...armorClasses} />
        </>
      )}
      {tab === 5 && <NotesContainer />}
    </>
  );
};

export default CharacterDisplayContainer;
