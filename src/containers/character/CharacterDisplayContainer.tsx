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
import { Grid, Typography, Button } from "@material-ui/core";
import useDetails from "../../character/useDetails";
import { useLevels } from "../../services/classService";
import { useState } from "react";
import AddLevel from "../../components/levels/AddLevel";
import { Class } from "../../rules/classes";
import AssignSkills from "../../components/skills/AssignSkills";
import NotesContainer from "../notes/NotesContainer";

enum Page {
  Sheet,
  AddLevel,
  AddSkills
}

const CharacterDisplayContainer: React.FC = () => {
  const { abilityScores, abilityModifiers } = useAbilityScores();
  const {
    skillLevels,
    classSkills,
    trainedSkills,
    skills,
    checkSkill,
    uncheckSkill
  } = useSkills();
  const [page, setPage] = useState(Page.Sheet);
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
        <AssignSkills
          skillLevels={skillLevels}
          skills={skills[currentLevel - 1] || {}}
          onSkillChange={(key, value) => {
            value
              ? checkSkill(key, currentLevel)
              : uncheckSkill(key, currentLevel);
          }}
          classSkills={classSkills}
        />
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
      <Grid container spacing={24}>
        <Grid item md={6} xs={12}>
          <Initiative initiative={initiative} />
        </Grid>

        <Grid item md={6} xs={12}>
          <HealthAndResolve {...healthAndResolve} />
        </Grid>

        <Grid item md={6} xs={12}>
          <SavingThrows {...savingThrows} />
        </Grid>

        <Grid item md={6} xs={12}>
          <AbilityScoreModifiers
            abilityScores={abilityScores}
            abilityModifiers={abilityModifiers}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <AttackBonuses {...attackBonsues} />
        </Grid>
        <Grid item md={6} xs={12}>
          <ArmorClasses {...armorClasses} />
        </Grid>
        <Grid item md={6} xs={12}>
          <SkillsDisplay
            skillLevels={skillLevels}
            classSkills={classSkills}
            trainedSkills={trainedSkills}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <NotesContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default CharacterDisplayContainer;
