import * as React from "react";
import MultipleTextInput from "../form/MultipleTextInput";

interface LanguagesInputProps {
  value: string[];
  onChange?: (languages: string[]) => void;
}

const LanguagesInput: React.FC<LanguagesInputProps> = ({ value, onChange }) => (
  <MultipleTextInput value={value} onChange={onChange} />
);

export default LanguagesInput;
