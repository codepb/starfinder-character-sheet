import * as React from "react";

interface DeitySelectionProps {
  value: string;
  onChange?: (deity: string) => void;
}

const DeitySelection: React.FC<DeitySelectionProps> = ({ value, onChange }) => (
  <input value={value} onChange={e => onChange && onChange(e.target.value)} />
);

export default DeitySelection;
