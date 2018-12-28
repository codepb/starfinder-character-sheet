import * as React from "react";
import AlignmentSelection from "../../components/characterDetails/AlignmentSelection";
import useDetails from "../../character/useDetails";

const CharacterDetails: React.FC = () => {
  const {
    details: { alignment },
    setAlignment
  } = useDetails();
  return (
    <>
      <AlignmentSelection value={alignment} onChange={setAlignment} />
    </>
  );
};

export default CharacterDetails;
