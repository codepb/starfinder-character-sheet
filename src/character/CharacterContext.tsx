import * as React from "react";
import { AbilityScores } from "./useAbilityScores";
import { Race } from "../rules/races";
import { Skills, SkillLevels } from "./useSkills";
import { Theme } from "../rules/themes";
import { Class } from "../rules/classes";
import Alignment from "../rules/alignments";
import Size from "../rules/Size";
import { useEffect, useState } from "react";
import { mergeDeep } from "../helpers/objectHelpers";
import { save, load } from "../services/storageService";
import { SavingThrows } from "./useSavingThrows";
import { AttackBonuses } from "./useAttackBonuses";
import { ArmorClasses } from "./useArmorClasses";
import { FeatName } from "../rules/feats";
import { Armor } from "../rules/armor";

export interface SkillsLevels {
  levels: Skills[];
  misc: SkillLevels;
}

export interface AbilityLevels {
  levels: AbilityScores[];
  misc: AbilityScores;
}

export interface OwnedArmor extends Armor {
  equipped: boolean;
  id: string;
}

export enum WeaponType {
  Melee,
  Ranged,
  Other
}

export interface OwnedWeapon {
  id: string;
  type: WeaponType;
  name: string;
  level: number;
  price: number;
  damage: string;
  damageType: string;
  range: number;
  critical: string;
  capacity?: number;
  usage?: number;
  bulk: number;
  special: string;
  powered: boolean;
}

export interface Equipment {
  id: string;
  name: string;
  bulk: number;
  level?: number;
}

export interface Character {
  abilityLevels: AbilityLevels;
  skills: SkillsLevels;
  basicStats: BasicStats;
  details: Details;
  notes: string;
  misc: MiscBonuses;
  damage: HealthAndResolve;
  feats: FeatName[];
  armor: OwnedArmor[];
  weapons: OwnedWeapon[];
  equipment: Equipment[];
}

interface CharacterWithCreated extends Character {
  characterCreated: boolean;
}

export interface BasicStats {
  race: Race;
  theme: Theme;
  classLevels: Record<Class, number>;
}

export interface Details {
  deity: string;
  description: string;
  alignment: Alignment;
  homeWorld: string;
  languages: string[];
  name: string;
  size: Size;
}

export interface MiscBonuses {
  initiative: number;
  savingThrows: SavingThrows;
  attackBonuses: AttackBonuses;
  armorClasses: ArmorClasses;
}

const loadedCharacter = load();

const persistedCharacter =
  loadedCharacter != null ? loadedCharacter : ({} as Character);

interface CharacterUpdaters {
  setAbilityLevels: React.Dispatch<React.SetStateAction<AbilityLevels>>;
  setBasicStats: React.Dispatch<React.SetStateAction<BasicStats>>;
  setSkills: React.Dispatch<React.SetStateAction<SkillsLevels>>;
  setDetails: React.Dispatch<React.SetStateAction<Details>>;
  setCharacterCreated: React.Dispatch<React.SetStateAction<boolean>>;
  setNotes: React.Dispatch<React.SetStateAction<string>>;
  setMisc: React.Dispatch<React.SetStateAction<MiscBonuses>>;
  setDamage: React.Dispatch<React.SetStateAction<HealthAndResolve>>;
  setFeats: React.Dispatch<React.SetStateAction<FeatName[]>>;
  setArmor: React.Dispatch<React.SetStateAction<OwnedArmor[]>>;
  setWeapons: React.Dispatch<React.SetStateAction<OwnedWeapon[]>>;
  setEquipment: React.Dispatch<React.SetStateAction<Equipment[]>>;
}

const initialAbilityLevels: AbilityLevels = mergeDeep(
  {
    levels: [
      {
        strength: 0,
        charisma: 0,
        constitution: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0
      }
    ],
    misc: {
      strength: 0,
      charisma: 0,
      constitution: 0,
      dexterity: 0,
      intelligence: 0,
      wisdom: 0
    }
  },
  persistedCharacter.abilityLevels
);

const initialSkills: SkillsLevels = mergeDeep(
  { levels: [], misc: {} },
  persistedCharacter.skills
);

const initalBasicStats: BasicStats = mergeDeep(
  {
    race: Race.ANDROID,
    theme: Theme.THEMELESS,
    classLevels: { [Class.Envoy]: 1 }
  },
  persistedCharacter.basicStats
);

const initialDetails: Details = mergeDeep(
  {
    deity: "",
    description: "",
    alignment: Alignment.lawfulGood,
    homeWorld: "",
    languages: [""],
    name: "",
    size: Size.medium
  },
  persistedCharacter.details
);

const initialNotes: string = persistedCharacter.notes || "";

const initialMisc: MiscBonuses = mergeDeep(
  {
    initiative: 0,
    savingThrows: {
      fortitude: 0,
      reflex: 0,
      will: 0
    },
    attackBonuses: {
      melee: 0,
      ranged: 0,
      thrown: 0
    },
    armorClasses: {
      energy: 0,
      kinetic: 0
    }
  },
  persistedCharacter.misc
);

export interface HealthAndResolve {
  health: number;
  stamina: number;
  resolve: number;
}

const initialDamage: HealthAndResolve = mergeDeep(
  {
    health: 0,
    stamina: 0,
    resolve: 0
  },
  persistedCharacter.damage
);

const initialFeats: FeatName[] = persistedCharacter.feats || [];

const initialArmor: OwnedArmor[] = persistedCharacter.armor || [];

const initialWeapons: OwnedWeapon[] = persistedCharacter.weapons || [];

const initialEquipment: Equipment[] = persistedCharacter.equipment || [];

const initialCharacter: CharacterWithCreated = {
  abilityLevels: initialAbilityLevels,
  skills: initialSkills,
  basicStats: initalBasicStats,
  details: initialDetails,
  characterCreated: false,
  notes: initialNotes,
  misc: initialMisc,
  damage: initialDamage,
  feats: initialFeats,
  armor: initialArmor,
  weapons: initialWeapons,
  equipment: initialEquipment
};

const initialContext: [CharacterWithCreated, CharacterUpdaters] = [
  initialCharacter,
  {
    setAbilityLevels: () => {},
    setSkills: () => {},
    setBasicStats: () => {},
    setDetails: () => {},
    setCharacterCreated: () => {},
    setNotes: () => {},
    setMisc: () => {},
    setDamage: () => {},
    setFeats: () => {},
    setArmor: () => {},
    setWeapons: () => {},
    setEquipment: () => {}
  }
];

const CharacterContext: React.Context<
  [CharacterWithCreated, CharacterUpdaters]
> = React.createContext(initialContext);

const CharacterProvider: React.FC<React.Attributes> = ({ children }) => {
  const [abilityLevels, setAbilityLevels] = useState(initialAbilityLevels);
  const [skills, setSkills] = useState(initialSkills);
  const [basicStats, setBasicStats] = useState(initalBasicStats);
  const [details, setDetails] = useState(initialDetails);
  const [characterCreated, setCharacterCreated] = useState(
    loadedCharacter != null
  );
  const [notes, setNotes] = useState(initialNotes);
  const [misc, setMisc] = useState(initialMisc);
  const [damage, setDamage] = useState(initialDamage);
  const [feats, setFeats] = useState(initialFeats);
  const [armor, setArmor] = useState(initialArmor);
  const [weapons, setWeapons] = useState(initialWeapons);
  const [equipment, setEquipment] = useState(initialEquipment);

  const characterState = [
    abilityLevels,
    skills,
    basicStats,
    details,
    notes,
    misc,
    damage,
    feats,
    armor,
    weapons,
    equipment
  ];
  const character = {
    abilityLevels,
    skills,
    basicStats,
    details,
    notes,
    misc,
    damage,
    feats,
    armor,
    weapons,
    equipment
  };

  useEffect(() => {
    save(character);
  }, characterState);
  return (
    <CharacterContext.Provider
      value={[
        {
          ...character,
          characterCreated
        },
        {
          setAbilityLevels: setAbilityLevels,
          setSkills,
          setBasicStats,
          setDetails,
          setCharacterCreated,
          setNotes,
          setMisc,
          setDamage,
          setFeats,
          setArmor,
          setWeapons,
          setEquipment
        }
      ]}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;

export { CharacterProvider };
