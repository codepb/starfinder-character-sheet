import * as React from "react";
import Select from "../form/Select";

interface SelectionPageProps {
  options: string[];
  value: string;
  onNext: () => void;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectionPage: React.FC<SelectionPageProps> = ({
  options,
  value,
  onNext,
  onChange
}) => (
  <>
    <Select options={options} value={value} onChange={onChange} />
    <button onClick={onNext}>Next</button>
  </>
);

export default SelectionPage;
