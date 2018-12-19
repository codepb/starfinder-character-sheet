import * as React from "react";
import SelectionPage from "../../components/characterCreation/SelectionPage";
import useBasicStats from "../../character/useBasicStats";
import { Race } from "../../rules/races";

interface RaceSelectionProps {
  onNext: () => void;
}

const RaceSelection: React.FC<RaceSelectionProps> = ({ onNext }) => {
  const {
    basicStats: { race },
    setRace
  } = useBasicStats();
  return (
    <SelectionPage
      options={Object.values(Race)}
      value={race}
      onChange={event => setRace(event.target.value as Race)}
      onNext={onNext}
    />
  );
};

export default RaceSelection;
