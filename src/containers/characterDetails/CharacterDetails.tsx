import * as React from "react";
import AlignmentSelection from "../../components/characterDetails/AlignmentSelection";
import useDetails from "../../character/useDetails";
import DeitySelection from "../../components/characterDetails/DeitySelection";
import DescriptionInput from "../../components/characterDetails/DescriptionInput";
import HomeWorldSelection from "../../components/characterDetails/HomeWorldSelection";
import LanguagesInput from "../../components/characterDetails/LanguagesInput";

const CharacterDetails: React.FC = () => {
  const {
    details,
    setAlignment,
    setDeity,
    setDescription,
    setHomeWorld,
    setLanguages
  } = useDetails();
  return (
    <>
      <AlignmentSelection value={details.alignment} onChange={setAlignment} />
      <DeitySelection value={details.deity} onChange={setDeity} />
      <DescriptionInput value={details.description} onChange={setDescription} />
      <HomeWorldSelection value={details.homeWorld} onChange={setHomeWorld} />
      <LanguagesInput value={details.languages} onChange={setLanguages} />
    </>
  );
};

export default CharacterDetails;
