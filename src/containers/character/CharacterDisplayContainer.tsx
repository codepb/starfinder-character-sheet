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
import { Grid, withStyles } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

const styles: Record<string, CSSProperties> = {
  container: {
    maxWidth: 1000,
    width: "100%",
    margin: "0 auto"
  }
};

interface CharacterDisplayContainerProps {
  classes: Record<string, string>;
}

const CharacterDisplayContainer: React.FC<CharacterDisplayContainerProps> = ({
  classes
}) => {
  const { abilityScores, abilityModifiers } = useAbilityScores();
  const { skillLevels, classSkills, trainedSkills } = useSkills();
  const healthAndResolve = useHealth();
  const savingThrows = useSavingThrows();
  const initiative = useInitiative();
  const attackBonsues = useAttackBonuses();
  const armorClasses = useArmorClasses();
  return (
    <Grid container spacing={24} className={classes.container}>
      <Grid item xs={6}>
        <Initiative initiative={initiative} />
      </Grid>

      <Grid item xs={6}>
        <HealthAndResolve {...healthAndResolve} />
      </Grid>

      <Grid item xs={6}>
        <SavingThrows {...savingThrows} />
      </Grid>

      <Grid item xs={6}>
        <AbilityScoreModifiers
          abilityScores={abilityScores}
          abilityModifiers={abilityModifiers}
        />
      </Grid>
      <Grid item xs={6}>
        <AttackBonuses {...attackBonsues} />
      </Grid>
      <Grid item xs={6}>
        <ArmorClasses {...armorClasses} />
      </Grid>
      <Grid item xs={6}>
        <SkillsDisplay
          skillLevels={skillLevels}
          classSkills={classSkills}
          trainedSkills={trainedSkills}
        />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CharacterDisplayContainer);
