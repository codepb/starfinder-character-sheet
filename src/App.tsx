import React, { Component } from "react";
import "./App.css";
import { CharacterProvider } from "./character/CharacterContext";
import CharacterSheetContainer from "./containers/character/CharacterSheetContainer";

const App: React.FC = () => (
  <CharacterProvider>
    <CharacterSheetContainer />
  </CharacterProvider>
);

export default App;
