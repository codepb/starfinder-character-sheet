import * as React from "react";

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
    <select onChange={onChange} value={value}>
      {options.map(r => (
        <option value={r} key={r}>
          {r}
        </option>
      ))}
    </select>
    <button onClick={onNext}>Next</button>
  </>
);

export default SelectionPage;
