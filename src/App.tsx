import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";
import "./App.css";
import { CharacterProvider } from "./character/CharacterContext";
import CharacterSheetContainer from "./containers/character/CharacterSheetContainer";
import Alert from "./components/layout/Alert";

const App: React.FC = () => (
  <CharacterProvider>
    <CssBaseline />
    <Alert />
    <CharacterSheetContainer />
  </CharacterProvider>
);

export default App;
