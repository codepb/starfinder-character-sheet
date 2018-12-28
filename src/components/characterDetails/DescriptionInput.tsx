import * as React from "react";

interface DescriptionInputProps {
  value: string;
  onChange?: (description: string) => void;
}

const DescriptionInput: React.FC<DescriptionInputProps> = ({
  value,
  onChange
}) => (
  <textarea
    value={value}
    onChange={e => onChange && onChange(e.target.value)}
  />
);

export default DescriptionInput;
