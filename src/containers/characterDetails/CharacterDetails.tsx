import * as React from "react";
import AlignmentSelection from "../../components/characterDetails/AlignmentSelection";
import useDetails from "../../character/useDetails";
import DeitySelection from "../../components/characterDetails/DeitySelection";
import DescriptionInput from "../../components/characterDetails/DescriptionInput";
import HomeWorldSelection from "../../components/characterDetails/HomeWorldSelection";
import LanguagesInput from "../../components/characterDetails/LanguagesInput";
import NameInput from "../../components/characterDetails/NameInput";
import SizeSelection from "../../components/characterDetails/SizeSelection";

const CharacterDetails: React.FC = () => {
  const {
    details,
    setAlignment,
    setDeity,
    setDescription,
    setHomeWorld,
    setLanguages,
    setName,
    setSize
  } = useDetails();
  return (
    <>
      <div>
        <label>Name: </label>
        <NameInput value={details.name} onChange={setName} />
      </div>
      <div>
        <label>Alignment: </label>
        <AlignmentSelection value={details.alignment} onChange={setAlignment} />
      </div>
      <div>
        <label>Deity: </label>
        <DeitySelection value={details.deity} onChange={setDeity} />
      </div>
      <div>
        <label>Description: </label>
        <DescriptionInput
          value={details.description}
          onChange={setDescription}
        />
      </div>
      <div>
        <label>Home World: </label>
        <HomeWorldSelection value={details.homeWorld} onChange={setHomeWorld} />
      </div>
      <div>
        <label>Languages: </label>
        <LanguagesInput value={details.languages} onChange={setLanguages} />
      </div>
      <div>
        <label>Size: </label>
        <SizeSelection value={details.size} onChange={setSize} />
      </div>
    </>
  );
};

export default CharacterDetails;
