import { Character } from "../character/CharacterContext";
import lzString from "lz-string";
import { saveAs } from "file-saver";
import SpellDetails from "../components/spells/SpellDetails";
import { Skills } from "../character/useSkills";

interface CharacterStorageVersion {
  version: string;
}

interface CharacterStorage extends Character, CharacterStorageVersion {}

const version = "1";

const key = "character";

const FILE_EXTENSION = "sfsheet";

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

interface OriginalCharacterStorage {
  abilities: string;
  abilityScores: {
    abilityPoints: {
      Strength: number;
      Dexterity: number;
      Constitution: number;
      Intelligence: number;
      Wisdom: number;
      Charisma: number;
    };
    defaultRaceBonus: string;
    defaultThemeBonus: string;
  };
  armor: {
    name: string;
    penalty: number;
    maxDexterity: number;
    speedAdjustment: number;
    bulk: number | undefined;
    level: number;
    bonuses: {
      misc: number;
      damageReduction: string;
      resistances: string;
      energy: number;
      kinetic: number;
    };
  };
  attackBonuses: {
    Melee: { misc: number };
    Ranged: { misc: number };
    Thrown: { misc: number };
  };
  character: {
    abilityScores: [];
    alignment: string;
    class: string;
    deity: string;
    description: string;
    gender: string;
    homeworld: string;
    name: string;
    race: string;
    theme: string;
  };
  currentHealth: {
    hitPoints: number;
    staminaPoints: number;
    resolvePoints: number;
  };
  equipment: { name: string; quantity: string; level: string };
  experience: { current: number; nextLevel: number };
  feats: string[];
  initiative: number;
  languages: string;
  savingThrows: {
    Fortitude: { misc: number };
    Reflex: { misc: number };
    Will: { misc: number };
  };
  skills: {
    professions: {
      Profession1: { name: string; ability: string };
      skillBonuses: {
        Acrobatics: SkillDetails;
        Athletics: SkillDetails;
        Bluff: SkillDetails;
        Computers: SkillDetails;
        Culture: SkillDetails;
        Diplomacy: SkillDetails;
        Disguise: SkillDetails;
        Engineering: SkillDetails;
        Intimidate: SkillDetails;
        "Life Science": SkillDetails;
        Medicine: SkillDetails;
        Mysticism: SkillDetails;
        Perception: SkillDetails;
        "Physical Science": SkillDetails;
        Piloting: SkillDetails;
        Profession1: SkillDetails;
        Profession2: SkillDetails;
        "Sense Motive": SkillDetails;
        "Sleight of Hand": SkillDetails;
        Stealth: SkillDetails;
        Survival: SkillDetails;
      };
    };
  };
  spells: {
    known: string[];
    levels: {
      [1]: SpellDetails;
      [2]: SpellDetails;
      [3]: SpellDetails;
      [4]: SpellDetails;
      [5]: SpellDetails;
      [6]: SpellDetails;
    };
  };
  wealth: { money: number; other: string };
  weapons: {
    ammo: number;
    damage: string;
    id: {};
    level: number;
    range: number;
    special: string;
    type: string;
    usage: number;
    weapon: string;
  }[];
}

interface SpellDetails {
  spellsPerDay: number;
  spellSlotsUsed: number;
}

interface SkillDetails {
  ranks: number;
  misc: number;
  isExtraClassSkill: boolean;
}

const processVersion = (characterStorageVersion: CharacterStorageVersion) => {
  if (characterStorageVersion.version == version) {
    const characterStorage = characterStorageVersion as CharacterStorage;
    const { version, ...character } = characterStorage;
    return character as Character;
  } else if (characterStorageVersion["character"]) {
    // original format
    const characterStorage = (characterStorageVersion as any) as OriginalCharacterStorage;
    // TODO map to character
  }
  throw new Error("unknown version");
};

const downloadCharacter = (characterState: Character) => {
  const serializedState = JSON.stringify({ ...characterState, version });
  const compressed = lzString.compressToUTF16(serializedState);
  const blob = new Blob([compressed], { type: "text/plain;charset=utf-16" });
  saveAs(
    blob,
    `${
      characterState.details.name
        ? characterState.details.name
        : "StarfinderCharacter"
    }.${FILE_EXTENSION}`
  );
};

const uploadChracter = (file: File): Promise<Character> => {
  return new Promise(resolve => {
    const reader = new FileReader();
    function processFileContents() {
      if (
        file.name
          .split(".")
          .pop()!
          .toLowerCase() === ".json"
      ) {
        const fileContents = reader.result as string;
        const deserialized = JSON.parse(
          fileContents
        ) as CharacterStorageVersion;
        const character = processVersion(deserialized);
        resolve(character);
        return;
      }
      const fileContents = reader.result as string;
      const uncompressed = lzString.decompressFromUTF16(fileContents);
      const deserialized = JSON.parse(uncompressed) as CharacterStorageVersion;
      const character = processVersion(deserialized);
      resolve(character);
    }

    reader.onloadend = processFileContents;
    reader.readAsText(file);
  });
};

export { save, load, downloadCharacter, uploadChracter, FILE_EXTENSION };
