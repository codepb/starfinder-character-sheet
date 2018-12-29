import * as React from "react";

interface NameInputProps {
  value: string;
  onChange?: (name: string) => void;
}

const NameInput: React.FC<NameInputProps> = ({
  value,
  onChange
}) => (
  <input value={value} onChange={e => onChange && onChange(e.target.value)} />
);

export default NameInput;
