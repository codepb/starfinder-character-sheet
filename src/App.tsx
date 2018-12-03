import React, { Component } from "react";
import "./App.css";
import AbilityScoresContainer from "./containers/skills/AbilityScoresContainer";
import { CharacterProvider } from "./character/CharacterContext";

const App: React.FC = () => (
  <CharacterProvider>
    <AbilityScoresContainer />
  </CharacterProvider>
);

export default App;
