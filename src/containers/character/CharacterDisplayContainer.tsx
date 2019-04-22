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
import { Grid, withStyles, Typography } from "@material-ui/core";
import useDetails from "../../character/useDetails";

const CharacterDisplayContainer: React.FC = () => {
  const { abilityScores, abilityModifiers } = useAbilityScores();
  const { skillLevels, classSkills, trainedSkills } = useSkills();
  const healthAndResolve = useHealth();
  const savingThrows = useSavingThrows();
  const initiative = useInitiative();
  const attackBonsues = useAttackBonuses();
  const armorClasses = useArmorClasses();
  const { details } = useDetails();
  return (
    <>
      <Typography variant="h3" align="center">
        {details.name}
      </Typography>
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
      </Grid>
    </>
  );
};

export default CharacterDisplayContainer;
