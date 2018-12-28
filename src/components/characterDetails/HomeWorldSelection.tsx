import * as React from "react";

interface HomeWorldSelectionProps {
  value: string;
  onChange?: (homeWorld: string) => void;
}

const HomeWorldSelection: React.FC<HomeWorldSelectionProps> = ({
  value,
  onChange
}) => (
  <input value={value} onChange={e => onChange && onChange(e.target.value)} />
);

export default HomeWorldSelection;
