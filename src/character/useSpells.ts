import { useContext } from "react";
import CharacterContext, { OwnedArmor, KnownSpells } from "./CharacterContext";

const useSpells = () => {
  const [{ spells }, { setSpells }] = useContext(CharacterContext);

  return {
    spells,
    addSpell: (spell: string, level: 0 | 1 | 2 | 3 | 4 | 5 | 6) => {
      setSpells(
        prev =>
          prev.map((p, i) =>
            i === level
              ? {
                  knownSpells: [...p.knownSpells, spell],
                  spellsCast: p.spellsCast
                }
              : { knownSpells: [...p.knownSpells], spellsCast: p.spellsCast }
          ) as KnownSpells
      );
    },
    removeSpell: (spell: string) => {
      setSpells(
        prev =>
          prev.map(p => ({
            knownSpells: p.knownSpells.filter(s => s !== spell),
            spellsCast: p.spellsCast
          })) as KnownSpells
      );
    },
    incrementSpellsCast: (level: number) => {
      setSpells(
        prev =>
          prev.map((p, i) =>
            i === level
              ? {
                  knownSpells: [...p.knownSpells],
                  spellsCast: p.spellsCast + 1
                }
              : { knownSpells: [...p.knownSpells], spellsCast: p.spellsCast }
          ) as KnownSpells
      );
    },
    resetSpellsCast: () => {
      setSpells(
        prev =>
          prev.map(p => ({
            knownSpells: [...p.knownSpells],
            spellsCast: 0
          })) as KnownSpells
      );
    }
  };
};

export default useSpells;
