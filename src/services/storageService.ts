import { Character } from "../character/CharacterContext";
import lzString from "lz-string";
import { saveAs } from "file-saver";

interface CharacterStorageVersion {
  version: string;
}

interface CharacterStorage extends Character, CharacterStorageVersion {}

const version = "1";

const key = "character";

const save = (characterState: Character) => {
  localStorage.setItem(key, JSON.stringify({ ...characterState, version }));
};

const load = () => {
  const storedCharacterJSON = localStorage.getItem("character");
  if (storedCharacterJSON == null) {
    return null;
  }
  const storedCharacterVersion = JSON.parse(
    storedCharacterJSON
  ) as CharacterStorageVersion;
  return processVersion(storedCharacterVersion);
};

const processVersion = (characterStorageVersion: CharacterStorageVersion) => {
  if (characterStorageVersion.version == version) {
    const characterStorage = characterStorageVersion as CharacterStorage;
    const { version, ...character } = characterStorage;
    return character as Character;
  }
  throw new Error("unknown version");
};

const downloadCharacter = (characterState: Character) => {
  const serializedState = JSON.stringify({ ...characterState, version });
  const compressed = lzString.compress(serializedState);
  const blob = new Blob([compressed], { type: "text/plain;charset=utf-8" });
  saveAs(
    blob,
    `${
      characterState.details.name
        ? characterState.details.name
        : "StarfinderCharacter"
    }.sfsheet`
  );
};

const uploadChracter = (file: File): Promise<Character> => {
  return new Promise(resolve => {
    const reader = new FileReader();
    function processFileContents() {
      const fileContents = reader.result as string;
      const uncompressed = lzString.decompress(fileContents);
      const deserialized = JSON.parse(uncompressed) as CharacterStorageVersion;
      const character = processVersion(deserialized);
      resolve(character);
    }

    reader.onloadend = processFileContents;
    reader.readAsText(file);
  });
};

export { save, load, downloadCharacter, uploadChracter };
