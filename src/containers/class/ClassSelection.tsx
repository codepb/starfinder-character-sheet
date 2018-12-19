import * as React from "react";
import SelectionPage from "../../components/characterCreation/SelectionPage";
import { Class } from "../../rules/classes";
import useBasicStats from "../../character/useBasicStats";

interface ClassSelectionProps {
  onNext: () => void;
}

const ClassSelection: React.FC<ClassSelectionProps> = ({ onNext }) => {
  const {
    basicStats: { class: characterClass },
    setClass
  } = useBasicStats();
  return (
    <SelectionPage
      options={Object.values(Class)}
      value={characterClass}
      onChange={event => setClass(event.target.value as Class)}
      onNext={onNext}
    />
  );
};

export default ClassSelection;
