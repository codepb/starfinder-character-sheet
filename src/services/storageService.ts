import { Character } from "../character/CharacterContext";

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

export { save, load };
