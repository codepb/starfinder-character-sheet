import * as React from "react";

interface SelectProps {
  options: string[];
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => (
  <select onChange={onChange} value={value}>
    {options.map(r => (
      <option value={r} key={r}>
        {r}
      </option>
    ))}
  </select>
);

export default Select;
