import { Class } from "./classes";

enum MagicSchool {
  enchantment,
  divination
}

enum MagicSubSchool {
  mindAffecting,
  compulsion
}

interface Spell {
  name: string;
  school: MagicSchool;
  subSchools: MagicSubSchool[];
  castingTime: string;
  summary: string;
  description: string;
  range: string;
  area?: string;
  duration: string;
  savingThrow: string;
  spellResistance: boolean;
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  requiresResolve: boolean;
  class: Class[];
}

const spells: Spell[] = [
  {
    name: "Daze",
    school: MagicSchool.enchantment,
    subSchools: [MagicSubSchool.compulsion, MagicSubSchool.mindAffecting],
    castingTime: "1 standard action",
    summary: "Humanoid creature of CR 3 or lower is dazed.",
    description: `This spell short-circuits the mind of a humanoid creature with a CR of 3 or lower so that it is dazed (unable to take actions, but taking no penalty to AC). Humanoids of CR 4 or higher are not affected. After a creature has been dazed by this spell, it is immune to it for 1 minute.`,
    range: "close (25 ft. + 5 ft./2 levels)",
    duration: "1 round",
    savingThrow: "Will negates",
    spellResistance: true,
    level: 0,
    requiresResolve: false,
    class: [Class.Mystic, Class.Technomancer]
  },
  {
    name: "Detect Affliction",
    school: MagicSchool.divination,
    subSchools: [],
    castingTime: "1 standard action",
    summary:
      "Determine whether a creature or object has been poisoned, is diseased, is Cursed, or is suffering a similar affliction.",
    description: `You determine whether a creature or object has been poisoned, is diseased, is cursed, or is suffering a similar affliction. If the target is poisoned or diseased, you automatically detect that fact and can determine the exact type of poison or disease with a successful DC 20 Intelligence or Wisdom check. If you are trained in Life Science or Medicine (depending on the nature of the poison or disease), you can attempt a DC 20 check of that skill if you fail your Wisdom or Intelligence check. If the target is cursed or suffering from a similar affliction, you must succeed at a DC 20 Intelligence or Wisdom check to determine that fact. You can then determine the exact nature of the curse with a successful DC 25 Mysticism check.`,
    range: "close (25 ft. + 5 ft./2 levels)",
    duration: "instantaneous",
    savingThrow: "none",
    spellResistance: true,
    level: 0,
    requiresResolve: false,
    class: [Class.Mystic, Class.Technomancer]
  },
  {
    name: "Detect Magic",
    school: MagicSchool.divination,
    subSchools: [],
    castingTime: "1 standard action",
    summary: "Detect spells and magic items within 60 feet.",
    description: `You detect all magic spells, effects, items, and objects (including those on or affecting creatures you can see), as well as hybrid items, in the area. You can’t detect magical traps in this way, as they are created with additional magic that wards them from this common spell. Each round you concentrate on the same area, you can determine if one magic source you detect is from a spell, magic item, or other effect, and the caster level (or item level) of the effect. You can’t determine if there are magic sources in areas you can’t see, or if there was a magic source in an area at one time but that has since expired.`,
    range: "60 ft.",
    area: "cone-shaped emanation",
    duration: "concentration, up to 1 minute/level",
    savingThrow: "none",
    spellResistance: false,
    level: 0,
    requiresResolve: false,
    class: [Class.Mystic, Class.Technomancer]
  },
  {
    name: "Fatigue",
    summary: "Touched creature is fatigued.",
    level: 0,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Ghost Sound",
    summary: "Create minor illusory sounds.",
    level: 0,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Grave Words",
    summary: "Force a corpse to babble.",
    level: 0,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Psychokinetic Hand",
    summary: "Telekinetically move an object of 1 bulk or less.",
    level: 0,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Stabilize",
    summary: "Cause a dying creature to stabilize.",
    level: 0,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Telekinetic Projectile",
    summary:
      "Telekinetically hurl an object, dealing 1d6 damage to the target and object.",
    level: 0,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Telepathic Message",
    summary:
      "Send a short telepathic message and hear simple telepathic replies.",
    level: 0,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Token Spell",
    summary: "Perform simple magical effects.",
    level: 0,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Charm Person",
    summary: "Make one humanoid creature believe that it is your ally.",
    level: 1,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Command",
    summary: "One creature obeys a select command for 1 round.",
    level: 1,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Confusion, Lesser",
    summary: "One living creature is confused for 1 round.",
    level: 1,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Detect Radiation",
    summary: "Detect radiation within 120 feet.",
    level: 1,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Detect Thoughts",
    summary: "“Listen” to surface thoughts.",
    level: 1,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Disguise Self",
    summary: "Change your appearance.",
    level: 1,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Fear",
    summary:
      "Frighten a single living creature that’s of CR 4 or lower for 1d4 rounds.",
    level: 1,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Identify",
    summary:
      "Gain a +10 bonus to identify items of a magic or technological nature.",
    level: 1,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Keen Senses",
    summary:
      "Target gains low-light vision and a +2 bonus to Perception checks.",
    level: 1,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Life Bubble",
    summary: "Encase targeted creatures with a shell of tolerable atmosphere.",
    level: 1,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Mind Link",
    summary:
      "Instantly and telepathically communicate information to a creature.",
    level: 1,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Mind Thrust",
    summary: "Mentally deal 2d10 damage to one target.",
    level: 1,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Mystic Cure",
    summary:
      "Restore 1d8 + your Wisdom modifier Hit Points to a living creature.",
    level: 1,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Reflecting Armor",
    summary: "Sheath of mystical force can reflect damage back on foe.",
    level: 1,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Remove Condition, Lesser",
    summary: "Remove one minor harmful condition affecting a creature.",
    level: 1,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Share Language",
    summary: "Target understands chosen languages.",
    level: 1,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Wisp Ally",
    summary: "Create wisp of energy that shines light and distracts an enemy.",
    level: 1,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Augury",
    summary: "Learn whether an action will be good or bad.",
    level: 2,
    requiresResolve: true,
    class: Class.Mystic
  },
  {
    name: "Command Undead",
    summary: "Undead creature obeys your commands.",
    level: 2,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Darkvision",
    summary: "Grant ability to see 60 feet in total darkness.",
    level: 2,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Daze Monster",
    summary: "Target living creature of CR 5 or lower is dazed.",
    level: 2,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Fear",
    summary: "Frighten multiple creatures of CR 4 or lower for 1 minute.",
    level: 2,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Fog Cloud",
    summary: "Create a fog that obscures vision.",
    level: 2,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Force Blast",
    summary: "Cone deals 2d6 force damage and bull rushes creatures.",
    level: 2,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Hold Person",
    summary: "Paralyze one humanoid.",
    level: 2,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Hurl Forcedisk",
    summary:
      "Disc deals 3d6 force damage to one target then ricochets to other targets, dealing 2d6 force damage.",
    level: 2,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Inflict Pain",
    summary:
      "Wracking pain imposes –2 penalty to ability checks, attack rolls, and skill checks on one target.",
    level: 2,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Mind Thrust",
    summary: "Mentally deal 4d10 damage to one target.",
    level: 2,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Mystic Cure",
    summary:
      "Restore 3d8 + your Wisdom modifier Hit Points to a living creature.",
    level: 2,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Remove Condition",
    summary: "Remove one Moderate harmful condition affecting a creature.",
    level: 2,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Restoration, Lesser",
    summary: "Dispel magical ability penalty or cure 1d4 ability damage.",
    level: 2,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "See Invisibility",
    summary: "See invisible creatures or objects.",
    level: 2,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Shield Other",
    summary: "You take half of the target’s Hit Point damage.",
    level: 2,
    requiresResolve: true,
    class: Class.Mystic
  },
  {
    name: "Spider Climb",
    summary: "Grant ability to walk on walls and ceilings.",
    level: 2,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Status",
    summary: "Monitor condition and position of allies.",
    level: 2,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Zone of Truth",
    summary: "Creatures within range can’t lie.",
    level: 2,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Bestow Curse",
    summary:
      "Target takes –4 penalty to attack rolls, saves, and checks or 50% chance of not acting on each of its turns.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Charm Monster",
    summary: "Make one creature believe it is your ally or one day per level.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Clairaudience/Clairvoyance",
    summary: "Hear or see at a distance for 1 minute per level.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Deep Slumber",
    summary: "Put a number of creatures whose CRs total 8 or less to sleep.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Dispel Magic",
    summary: "Cancel one magical spell or effect.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Fear",
    summary:
      "Targets of CR 8 or lower within a cone are panicked for 1 minute.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Haste",
    summary: "One creature per level moves and acts faster.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Hologram Memory",
    summary: "Extract a creature’s memory and replay it as a hologram.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Irradiate",
    summary: "Flood area with dangerous radiation.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Mind Thrust",
    summary: "Mentally deal 7d10 damage to one target.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Mystic Cure",
    summary:
      "Restore 5d8 + your Wisdom modifier Hit Points to a living creature.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Psychokinetic Strangulation",
    summary: "Concentrate to immobilize target and deal 3d8 damage per round.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Ray of Exhaustion",
    summary: "Ray makes target exhausted.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Remove Affliction",
    summary:
      "Neutralize Curses, diseases, infestations, poisons, and other harmful conditions affecting a creature.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Resistant Armor, Lesser",
    summary: "Grant DR 5/— or energy resistance 5 against two energy types.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Slow",
    summary: "One creature per level moves and acts slower.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Speak with Dead",
    summary: "Corpse answers up to six questions.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Suggestion",
    summary: "Compel a target to follow stated course of action.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Synaptic Pulse",
    summary: "Stun all creatures within 20 feet for 1 round.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Tongues",
    summary: "Target can speak and understand any language.",
    level: 3,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Animate Dead",
    summary: "Create controlled undead creatures out of target corpses.",
    level: 4,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Confusion",
    summary: "Targets behave randomly for 1 round per level.",
    level: 4,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Cosmic Eddy",
    summary: "Whirlwind deals 4d6 damage and knocks creatures prone.",
    level: 4,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Death Ward",
    summary:
      "Target gains +4 bonus to saves against death spells, and is immune to negative energy and gaining negative levels.",
    level: 4,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Discern Lies",
    summary: "Reveal deliberate falsehoods.",
    level: 4,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Dismissal",
    summary: "Force a creature to return to its native plane.",
    level: 4,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Divination",
    summary: "Gain useful advice for specific proposed actions.",
    level: 4,
    requiresResolve: true,
    class: Class.Mystic
  },
  {
    name: "Enervation",
    summary: "Ray imposes 2 negative levels.",
    level: 4,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Fear",
    summary: "All targets within a cone are panicked for 1 minute.",
    level: 4,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Hold Monster",
    summary: "Paralyze one creature.",
    level: 4,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Mind Probe",
    summary:
      "Potentially access a target creature’s memories and its knowledge.",
    level: 4,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Mind Thrust",
    summary: "Mentally deal 10d10 damage to and fatigue a single target.",
    level: 4,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Mystic Cure",
    summary:
      "Restore 12d8 + your Wisdom modifier Hit Points to a living creature or restore life to a recently slain creature.",
    level: 4,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Planar Binding",
    summary:
      "Trap an extraplanar creature of CR 4 or lower until it performs a task.",
    level: 4,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Reincarnate",
    summary: "Bring a target dead creature back to life in a random body.",
    level: 4,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Remove Radioactivity",
    summary: "Remove ongoing radiation effects from a creature or object.",
    level: 4,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Resistant Armor",
    summary: "Grant DR 10/— or energy resistance 10 to three energy types.",
    level: 4,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "RestorationR",
    summary: "Restores ability score drain and negative levels.",
    level: 4,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Telepathic Bond",
    summary: "Link allows allies to communicate.",
    level: 4,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Break Enchantment",
    summary: "Free creatures from curses, enchantments, and transmutations.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Call Cosmos",
    summary:
      "Rain cosmic particles on targets, dealing 4d6 fire damage and 3d6 cold damage.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Command, Greater",
    summary:
      "One creature per level obeys select command for 1 round per level.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Commune With Nature",
    summary: "Learn about terrain for 1 mile per level.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Contact Other Plane",
    summary: "Ask questions of extraplanar entity.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Crush Skull",
    summary: "Deal 18d8 damage to living creature’s head.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Dismissal",
    summary:
      "Force extraplanar creatures whose total CR is no greater than your level + 2 to return to their native planes.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Dispel Magic, Greater",
    summary: "Cancel multiple spells or effects.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Dominate Person",
    summary: "Control humanoid telepathically.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Feeblemind",
    summary: "Target’s Intelligence and Charisma scores drop to 1.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Mind Thrust",
    summary: "Mentally deal 15d10 damage to and exhaust one target.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Modify Memory",
    summary: "Change 5 minutes of target’s memories.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Mystic Cure",
    summary:
      "Restore 16d8 + your Wisdom modifier Hit Points to a living creature or restore life to a recently slain creature.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Mystic Cure, Mass",
    summary:
      "Restore 3d8 + your Wisdom modifier Hit Points to one living creature per level.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Planar Binding",
    summary:
      "Trap an extraplanar creature of CR 7 or lower until it performs a task.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Raise Dead",
    summary:
      "Restore life to a creature that died no more than 1 day per level ago.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Remove Condition, Greater",
    summary: "Remove all harmful conditions affecting a creature.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Resistant Aegis",
    summary:
      "Grant up to 10 creatures DR 5/— or energy resistance 5 to all energy types.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Retrocognition",
    summary: "Gain psychic impressions of past events in a certain location.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Synaptic Pulse, Greater",
    summary: "Stun all creatures within 20 feet for 1d4 rounds.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Telepathy",
    summary: "Communicate mentally with any creatures within 100 feet.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Waves of Fatigue",
    summary: "Several targets become fatigued.",
    level: 5,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Control Gravity",
    summary: "Alter gravity in an area.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Control Undead",
    summary: "Undead creatures follow your commands and don’t attack you.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Enshrining Refuge",
    summary: "Targets can’t attack or be attacked, but can exist comfortably.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Ethereal Jaunt",
    summary: "You become ethereal for 1 round per level.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Flesh to Stone",
    summary: "Turn a creature into a statue.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Gravitational Singularity",
    summary:
      "Particle with infinite density pulls creatures and objects into it, dealing 12d6 damage each round to those inside.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Inflict Pain, Mass",
    summary:
      "Wracking pain imposes –2 penalty to ability checks, attack rolls, and skill checks on one target per level.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Mind Thrust",
    summary: "Mentally deal 17d10 damage to, exhaust, and stun one target.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Mystic Cure",
    summary:
      "Restore 20d8 + your Wisdom modifier HP to a living creature or restore life to a recently slain creature.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Mystic Cure, Mass",
    summary:
      "Restore 5d8 + your Wisdom modifier Hit Points to one living creature per level.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Planar Barrier",
    summary: "Seal an area against all planar travel into or within it.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Planar Binding",
    summary:
      "Trap an extraplanar creature of CR 10 or lower until it performs a task.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Plane Shift",
    summary: "As many as eight creatures travel to another plane you choose.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Psychic Surgery",
    summary:
      "Cure all Intelligence, Wisdom, and Charisma damage and drain, plus remove other mental afflictions and conditions.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Regenerate",
    summary:
      "Grow back target’s severed limbs, restore 12d8 Hit Points, and remove exhaustion and fatigue.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Resistant Armor, Greater",
    summary: "Grant DR 15/— or energy resistance 15 against four energy types.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Shadow Walk",
    summary: "Step into a shadowy realm to travel to a destination rapidly.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Snuff Life",
    summary:
      "Instantly kill or massively damage one creature per 2 caster levels, depending on targets’ CRs.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Subjective Reality",
    summary: "You convince yourself one creature or object is an illusion.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Suggestion, Mass",
    summary: "Compel one target per level to follow stated course of action.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Telepathic Jaunt",
    summary:
      "Use your telepathic bond with a creature to teleport to its location.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "True Seeing",
    summary: "Target can see things as they really are.",
    level: 6,
    requiresResolve: false,
    class: Class.Mystic
  },
  {
    name: "Vision",
    summary: "Answer a question about a person, place, or object.",
    level: 6,
    requiresResolve: true,
    class: Class.Mystic
  },
  {
    name: "Dancing Lights",
    summary: "Create and direct up to four lights.",
    level: 0,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Daze",
    summary: "Humanoid creature of CR 3 or lower is dazed.",
    level: 0,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Detect Affliction",
    summary:
      "Determine whether a creature or object has been poisoned, is diseased, is Cursed, or is suffering a similar affliction.",
    level: 0,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Detect Magic",
    summary: "Detect spells and magic items within 60 feet.",
    level: 0,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Energy Ray",
    summary: "Ray deals 1d3 acid, cold, electricity, or fire damage.",
    level: 0,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Ghost Sound",
    summary: "Create minor illusory sounds.",
    level: 0,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Mending",
    summary: "Restore 1d4 Hit Points to an object or construct.",
    level: 0,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Psychokinetic Hand",
    summary: "Telekinetically move an object of 1 bulk or less.",
    level: 0,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Telepathic Message",
    summary:
      "Send a short telepathic message and hear simple telepathic replies.",
    level: 0,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Token Spell",
    summary: "Perform simple magical effects.",
    level: 0,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Transfer Charge",
    summary:
      "Move charges from one power source to another source of the same type.",
    level: 0,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Comprehend Languages",
    summary:
      "You understand all spoken, signed, and written or tactile languages.",
    level: 1,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Detect Radiation",
    summary: "Detect radiation within 120 feet.",
    level: 1,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Detect Tech",
    summary:
      "Detect technological items with charges or that replenish charges within 60 feet.",
    level: 1,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Disguise Self",
    summary: "Change your appearance.",
    level: 1,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Erase",
    summary: "Remove writings of either magical or mundane nature.",
    level: 1,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Flight",
    summary: "One creature or object per level falls slowly.",
    level: 1,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Grease",
    summary: "Make a 10-ft. square or one object slippery.",
    level: 1,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Hold Portal",
    summary: "Hold a door shut.",
    level: 1,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Holographic Image",
    summary: "Create a silent hologram of your design.",
    level: 1,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Identify",
    summary:
      "Gain +10 bonus to identify items of a magic or technological nature.",
    level: 1,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Jolting Surge",
    summary: "Touch deals 4d6 electricity damage.",
    level: 1,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Keen Senses",
    summary:
      "Target gains low-light vision and a +2 bonus to Perception checks.",
    level: 1,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Life Bubble",
    summary: "Encase targeted creatures with a shell of tolerable atmosphere.",
    level: 1,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Magic Missile",
    summary: "Two missiles deal 1d4+1 force damage.",
    level: 1,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Overheat",
    summary: "Deal 2d8 fire damage to creatures in cone.",
    level: 1,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Supercharge Weapon",
    summary: "Touched weapon deals extra damage.",
    level: 1,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Unseen Servant",
    summary: "Invisible force obeys your commands.",
    level: 1,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Caustic Conversion",
    summary:
      "Fling magical nanites as a ranged attack that deals 4d4 acid damage to one target, plus 5 additional damage in subsequent rounds.",
    level: 2,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Command Undead",
    summary: "Undead creature obeys your commands.",
    level: 2,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Darkvision",
    summary: "Grant ability to see 60 feet in total darkness.",
    level: 2,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Daze Monster",
    summary: "Target living creature of CR 5 or lower is dazed.",
    level: 2,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Flight",
    summary: "Target moves up and down at your direction.",
    level: 2,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Fog Cloud",
    summary: "Create a fog that obscures vision.",
    level: 2,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Holographic Image",
    summary: "Create a hologram with some sound of your design.",
    level: 2,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Implant Data",
    summary:
      "Embed one piece of data per level in a target computer or system.",
    level: 2,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Inject Nanobots",
    summary:
      "Touch deals 4d8 damage to target and causes the confused condition.",
    level: 2,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Invisibility",
    summary: "Target is invisible for 1 minute per level or until it attacks.",
    level: 2,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Knock",
    summary: "Opens a locked or magically sealed door.",
    level: 2,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Logic Bomb",
    summary:
      "Target computer deals 6d6 energy damage to the first creature that tries and fails to use it.",
    level: 2,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Make Whole",
    summary: "Restore 5d6 Hit Points to an object or construct.",
    level: 2,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Microbot Assault",
    summary: "Cloud of tiny robots harasses creatures within it.",
    level: 2,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Mirror Image",
    summary: "Create decoy duplicates of yourself.",
    level: 2,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "RechargeR",
    summary:
      "Replenish charges in a battery or item capable of holding charges.",
    level: 2,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Security Seal",
    summary: "Magically lock a portal, a container, or a security system.",
    level: 2,
    requiresResolve: true,
    class: Class.Technomancer
  },
  {
    name: "See Invisibility",
    summary: "See invisible creatures or objects.",
    level: 2,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Spider Climb",
    summary: "Grant ability to walk on walls and ceilings.",
    level: 2,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Arcane Sight",
    summary: "Magical sources become visible to you.",
    level: 3,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Arcing Surge",
    summary: "Deal 10d6 electricity damage in a 120-foot line.",
    level: 3,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Clairaudience/Clairvoyance",
    summary: "Hear or see at a distance for 1 minute per level.",
    level: 3,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Discharge",
    summary: "Disrupts or depowers one target technological item or construct.",
    level: 3,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Dispel Magic",
    summary: "Cancel one magical spell or effect.",
    level: 3,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Displacement",
    summary: "Attacks miss target 50% of the time.",
    level: 3,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Entropic Grasp",
    summary:
      "Touch decays a construct or nonmagical manufactured item once per round per level.",
    level: 3,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Explosive Blast",
    summary: "Deal 9d6 fire damage to creatures in a 20-foot radius.",
    level: 3,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Flight",
    summary: "Target flies at a speed of 60 feet.",
    level: 3,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Handy Junkbot",
    summary:
      "Create a temporary robot made of junk to perform Computers, Engineering, Piloting, and Sleight of Hand tasks.",
    level: 3,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Haste",
    summary: "One creature per level moves and acts faster.",
    level: 3,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Healing Junkbot",
    summary:
      "Robot made of junk can perform Medicine tasks and drag unconscious creature to safety.",
    level: 3,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Holographic Image",
    summary:
      "Create a hologram with sound, smell, and thermal effects of your design that lasts as long as you concentrate, plus 3 additional rounds.",
    level: 3,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Instant Virus",
    summary: "Inflict technological construct with disease.",
    level: 3,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Irradiate",
    summary: "Flood area with dangerous radiation.",
    level: 3,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Nondetection",
    summary: "Hide target from divination and surveillance.",
    level: 3,
    requiresResolve: true,
    class: Class.Technomancer
  },
  {
    name: "Probability Prediction",
    summary: "Reroll one attack roll, save, or check.",
    level: 3,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Resistant Armor, Lesser",
    summary: "Grant DR 5/— or energy resistance 5 against two energy types.",
    level: 3,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Slow",
    summary: "One creature per level moves and acts slower.",
    level: 3,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Tongues",
    summary: "Target can speak and understand any language.",
    level: 3,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Animate Dead",
    summary: "Create controlled undead creatures out of target corpses.",
    level: 4,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Arcane Eye",
    summary:
      "Invisible floating eye moves 30 feet per round and sends you visual information.",
    level: 4,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Corrosive Haze",
    summary:
      "Cloud deals 4d8 acid damage per round, plus 10 additional damage.",
    level: 4,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Creation",
    summary: "Create one object made of vegetable matter.",
    level: 4,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Destruction Protocol",
    summary: "Turn nonhostile technological construct against your foes.",
    level: 4,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Dimension Door",
    summary: "Teleport a short distance.",
    level: 4,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Dismissal",
    summary: "Force a creature to return to its native plane.",
    level: 4,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Flight",
    summary: "Target flies at a speed of 70 feet.",
    level: 4,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Holographic Image",
    summary:
      "Create a hologram with sound, smell, and thermal effects that follows a script determined by you.",
    level: 4,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Invisibility, Greater",
    summary: "Target is invisible for 1 round per level, even if it attacks.",
    level: 4,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Overload Systems",
    summary: "Target creature has a 50% chance to lose each action.",
    level: 4,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Planar Binding",
    summary:
      "Trap an extraplanar creature of CR 4 or lower until it performs a task.",
    level: 4,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Remove Radioactivity",
    summary: "Remove ongoing radiation effects from a creature or object.",
    level: 4,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Resilient Sphere",
    summary: "Force globe protects but traps one target.",
    level: 4,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Resistant Armor",
    summary: "Grant DR 10/— or energy resistance 10 to three energy types.",
    level: 4,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Rewire Flesh",
    summary:
      "Turn target partially into a robot, dealing 3d6 damage per round and reducing speed.",
    level: 4,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Soothing Protocol",
    summary: "Calm a target hostile technological construct.",
    level: 4,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Wall of Fire",
    summary:
      "Blazing curtain deals 2d6 fire damage out to 10 feet and 1d6 fire damage out to 20 feet; passing through the wall deals 5d6 fire damage.",
    level: 4,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Break Enchantment",
    summary: "Free creatures from curses, enchantments, and transmutations.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Contact Other Plane",
    summary:
      "Ask questions of an extraplanar entity, with questionable results.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Control Machines",
    summary: "Command technological constructs within range telepathically.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Creation",
    summary: "Create a single object made of vegetable or mineral matter.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Dismissal",
    summary:
      "Force extraplanar creatures whose total CR is no greater than your level + 2 to return to their native planes.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Dispel Magic, Greater",
    summary: "Cancel multiple magical spells or effects.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Flight",
    summary:
      "You can fly at a speed of 70 feet and can hustle over long distances.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Heat Leech",
    summary: "Deal 13d8 cold damage to creatures in a cone.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Holographic Image",
    summary:
      "Create a detailed hologram that is permanent or is triggered by conditions you set.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Holographic Terrain",
    summary: "Create a large hologram that depicts terrain and structures.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Mislead",
    summary:
      "Make yourself invisible and create an illusory double of your likeness.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Passwall",
    summary: "Create a passage through most walls.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Planar Binding",
    summary:
      "Trap an extraplanar creature of CR 7 or lower until it performs a task.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Private Sanctum",
    summary: "Prevent anyone from viewing or scrying an area for 24 hours.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Prying Eyes",
    summary: "Twenty floating eyes scout for you.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Rapid Repair",
    summary:
      "Construct or weapon regains 2d8 Hit Points per round for 1 minute.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Resistant Aegis",
    summary:
      "Grant up to 10 creatures DR 5/— or energy resistance 5 to all energy types.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Synapse Overload",
    summary: "Target takes 18d8 damage and is staggered for 1 minute.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Telekinesis",
    summary:
      "Move an object, attack creatures, or hurl objects or creatures with your mind.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Teleport",
    summary: "Instantly teleport as far as 2,000 miles.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Unwilling Guardian",
    summary: "Charm a target into protecting you during combat.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Wall of Force",
    summary: "Invisible wall is difficult to destroy.",
    level: 5,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Battle Junkbot",
    summary:
      "Create a temporary robot from random junk, turning it into a deadly combatant.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Chain Surge",
    summary:
      "Deal 13d12 electricity damage to primary target and up to 10 secondary targets; one of the primary target’s electrical devices stops functioning for 1 round.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Control Gravity",
    summary: "Alter gravity in an area.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Control Undead",
    summary: "Undead creatures follow your commands and don’t attack you.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Discharge, Greater",
    summary: "Disrupts or depowers multiple technological items or constructs.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Disintegrate",
    summary: "Ray reduces one creature or object to dust.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Ethereal Jaunt",
    summary: "You become ethereal for 1 round per level.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Flight",
    summary: "Multiple targets can fly at a speed of 60 feet.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Holographic Image",
    summary: "Illusory double of your likeness can talk and cast spells.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Interplanetary Teleport",
    summary: "Teleport between planets.",
    level: 6,
    requiresResolve: true,
    class: Class.Technomancer
  },
  {
    name: "Invisibility, Mass",
    summary:
      "Multiple targets are invisible for 1 minute per level or until one target attacks or moves away from other targets affected by spell.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Planar Barrier",
    summary: "Seal an area against all planar travel into or within it.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Planar Binding",
    summary:
      "Trap an extraplanar creature of CR 10 or lower until it performs a task.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Plane Shift",
    summary:
      "As many as eight creatures travel to another plane of your choice.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Resistant Armor, Greater",
    summary: "Grant DR 15/— or energy resistance 15 against four energy types.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Rewire Flesh, Mass",
    summary:
      "Deal 3d6 damage per round and reducing targets’ speed during that time.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Shadow Walk",
    summary: "Step into a shadowy realm to travel to a destination rapidly.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Shadowy Fleet",
    summary:
      "Illusion of starships deals 3d6 piercing damage and 3d6 fire damage to all creatures in the affected area.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Sympathetic Vibration",
    summary: "Deal 2d10 damage per round to freestanding structure.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Terraform",
    summary: "Alter terrain and climate.",
    level: 6,
    requiresResolve: true,
    class: Class.Technomancer
  },
  {
    name: "True Seeing",
    summary: "Target can see things as they really are.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Veil",
    summary: "Change appearance of a group of creatures.",
    level: 6,
    requiresResolve: false,
    class: Class.Technomancer
  },
  {
    name: "Wall of Steel",
    summary: "Wall has 45 Hit Points per inch of thickness and hardness 15.",
    level: 6,
    requiresResolve: true,
    class: Class.Technomancer
  }
];

export default spells;
