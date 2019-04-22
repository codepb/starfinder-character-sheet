import * as React from "react";
import SelectionPage from "../../components/characterCreation/SelectionPage";
import { Class } from "../../rules/classes";
import useBasicStats from "../../character/useBasicStats";
import Container from "../../components/layout/Container";

interface ClassSelectionProps {
  onNext(): void;
  onPrevious(): void;
}

const ClassSelection: React.FC<ClassSelectionProps> = ({
  onNext,
  onPrevious
}) => {
  const {
    basicStats: { class: characterClass },
    setClass
  } = useBasicStats();
  return (
    <SelectionPage
      id="class-select"
      label="Class"
      options={Object.values(Class)}
      value={characterClass}
      onChange={event => setClass(event.target.value as Class)}
      onNext={onNext}
      onPrevious={onPrevious}
    />
  );
};

export default ClassSelection;
