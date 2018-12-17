import { Class } from "./classes";

interface Spell {
  name: string;
  description: string;
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  requiresResolve: boolean;
  class: Class;
}

const spells: Spell[] = [
  {
    name: "Daze",
    description: "Humanoid creature of CR 3 or lower is dazed.",
    level: 0,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Detect Affliction",
    description:
      "Determine whether a creature or object has been poisoned, is diseased, is Cursed, or is suffering a similar affliction.",
    level: 0,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Detect Magic",
    description: "Detect spells and magic items within 60 feet.",
    level: 0,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Fatigue",
    description: "Touched creature is fatigued.",
    level: 0,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Ghost Sound",
    description: "Create minor illusory sounds.",
    level: 0,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Grave Words",
    description: "Force a corpse to babble.",
    level: 0,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Psychokinetic Hand",
    description: "Telekinetically move an object of 1 bulk or less.",
    level: 0,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Stabilize",
    description: "Cause a dying creature to stabilize.",
    level: 0,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Telekinetic Projectile",
    description:
      "Telekinetically hurl an object, dealing 1d6 damage to the target and object.",
    level: 0,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Telepathic Message",
    description:
      "Send a short telepathic message and hear simple telepathic replies.",
    level: 0,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Token Spell",
    description: "Perform simple magical effects.",
    level: 0,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Charm Person",
    description: "Make one humanoid creature believe that it is your ally.",
    level: 1,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Command",
    description: "One creature obeys a select command for 1 round.",
    level: 1,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Confusion, Lesser",
    description: "One living creature is confused for 1 round.",
    level: 1,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Detect Radiation",
    description: "Detect radiation within 120 feet.",
    level: 1,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Detect Thoughts",
    description: "“Listen” to surface thoughts.",
    level: 1,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Disguise Self",
    description: "Change your appearance.",
    level: 1,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Fear",
    description:
      "Frighten a single living creature that’s of CR 4 or lower for 1d4 rounds.",
    level: 1,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Identify",
    description:
      "Gain a +10 bonus to identify items of a magic or technological nature.",
    level: 1,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Keen Senses",
    description:
      "Target gains low-light vision and a +2 bonus to Perception checks.",
    level: 1,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Life Bubble",
    description:
      "Encase targeted creatures with a shell of tolerable atmosphere.",
    level: 1,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Mind Link",
    description:
      "Instantly and telepathically communicate information to a creature.",
    level: 1,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Mind Thrust",
    description: "Mentally deal 2d10 damage to one target.",
    level: 1,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Mystic Cure",
    description:
      "Restore 1d8 + your Wisdom modifier Hit Points to a living creature.",
    level: 1,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Reflecting Armor",
    description: "Sheath of mystical force can reflect damage back on foe.",
    level: 1,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Remove Condition, Lesser",
    description: "Remove one minor harmful condition affecting a creature.",
    level: 1,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Share Language",
    description: "Target understands chosen languages.",
    level: 1,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Wisp Ally",
    description:
      "Create wisp of energy that shines light and distracts an enemy.",
    level: 1,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Augury",
    description: "Learn whether an action will be good or bad.",
    level: 2,
    requiresResolve: true,
    class: Class.MYSTIC
  },
  {
    name: "Command Undead",
    description: "Undead creature obeys your commands.",
    level: 2,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Darkvision",
    description: "Grant ability to see 60 feet in total darkness.",
    level: 2,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Daze Monster",
    description: "Target living creature of CR 5 or lower is dazed.",
    level: 2,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Fear",
    description: "Frighten multiple creatures of CR 4 or lower for 1 minute.",
    level: 2,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Fog Cloud",
    description: "Create a fog that obscures vision.",
    level: 2,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Force Blast",
    description: "Cone deals 2d6 force damage and bull rushes creatures.",
    level: 2,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Hold Person",
    description: "Paralyze one humanoid.",
    level: 2,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Hurl Forcedisk",
    description:
      "Disc deals 3d6 force damage to one target then ricochets to other targets, dealing 2d6 force damage.",
    level: 2,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Inflict Pain",
    description:
      "Wracking pain imposes –2 penalty to ability checks, attack rolls, and skill checks on one target.",
    level: 2,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Mind Thrust",
    description: "Mentally deal 4d10 damage to one target.",
    level: 2,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Mystic Cure",
    description:
      "Restore 3d8 + your Wisdom modifier Hit Points to a living creature.",
    level: 2,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Remove Condition",
    description: "Remove one Moderate harmful condition affecting a creature.",
    level: 2,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Restoration, Lesser",
    description: "Dispel magical ability penalty or cure 1d4 ability damage.",
    level: 2,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "See Invisibility",
    description: "See invisible creatures or objects.",
    level: 2,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Shield Other",
    description: "You take half of the target’s Hit Point damage.",
    level: 2,
    requiresResolve: true,
    class: Class.MYSTIC
  },
  {
    name: "Spider Climb",
    description: "Grant ability to walk on walls and ceilings.",
    level: 2,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Status",
    description: "Monitor condition and position of allies.",
    level: 2,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Zone of Truth",
    description: "Creatures within range can’t lie.",
    level: 2,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Bestow Curse",
    description:
      "Target takes –4 penalty to attack rolls, saves, and checks or 50% chance of not acting on each of its turns.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Charm Monster",
    description:
      "Make one creature believe it is your ally or one day per level.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Clairaudience/Clairvoyance",
    description: "Hear or see at a distance for 1 minute per level.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Deep Slumber",
    description:
      "Put a number of creatures whose CRs total 8 or less to sleep.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Dispel Magic",
    description: "Cancel one magical spell or effect.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Fear",
    description:
      "Targets of CR 8 or lower within a cone are panicked for 1 minute.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Haste",
    description: "One creature per level moves and acts faster.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Hologram Memory",
    description: "Extract a creature’s memory and replay it as a hologram.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Irradiate",
    description: "Flood area with dangerous radiation.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Mind Thrust",
    description: "Mentally deal 7d10 damage to one target.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Mystic Cure",
    description:
      "Restore 5d8 + your Wisdom modifier Hit Points to a living creature.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Psychokinetic Strangulation",
    description:
      "Concentrate to immobilize target and deal 3d8 damage per round.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Ray of Exhaustion",
    description: "Ray makes target exhausted.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Remove Affliction",
    description:
      "Neutralize Curses, diseases, infestations, poisons, and other harmful conditions affecting a creature.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Resistant Armor, Lesser",
    description:
      "Grant DR 5/— or energy resistance 5 against two energy types.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Slow",
    description: "One creature per level moves and acts slower.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Speak with Dead",
    description: "Corpse answers up to six questions.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Suggestion",
    description: "Compel a target to follow stated course of action.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Synaptic Pulse",
    description: "Stun all creatures within 20 feet for 1 round.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Tongues",
    description: "Target can speak and understand any language.",
    level: 3,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Animate Dead",
    description: "Create controlled undead creatures out of target corpses.",
    level: 4,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Confusion",
    description: "Targets behave randomly for 1 round per level.",
    level: 4,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Cosmic Eddy",
    description: "Whirlwind deals 4d6 damage and knocks creatures prone.",
    level: 4,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Death Ward",
    description:
      "Target gains +4 bonus to saves against death spells, and is immune to negative energy and gaining negative levels.",
    level: 4,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Discern Lies",
    description: "Reveal deliberate falsehoods.",
    level: 4,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Dismissal",
    description: "Force a creature to return to its native plane.",
    level: 4,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Divination",
    description: "Gain useful advice for specific proposed actions.",
    level: 4,
    requiresResolve: true,
    class: Class.MYSTIC
  },
  {
    name: "Enervation",
    description: "Ray imposes 2 negative levels.",
    level: 4,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Fear",
    description: "All targets within a cone are panicked for 1 minute.",
    level: 4,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Hold Monster",
    description: "Paralyze one creature.",
    level: 4,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Mind Probe",
    description:
      "Potentially access a target creature’s memories and its knowledge.",
    level: 4,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Mind Thrust",
    description: "Mentally deal 10d10 damage to and fatigue a single target.",
    level: 4,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Mystic Cure",
    description:
      "Restore 12d8 + your Wisdom modifier Hit Points to a living creature or restore life to a recently slain creature.",
    level: 4,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Planar Binding",
    description:
      "Trap an extraplanar creature of CR 4 or lower until it performs a task.",
    level: 4,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Reincarnate",
    description: "Bring a target dead creature back to life in a random body.",
    level: 4,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Remove Radioactivity",
    description: "Remove ongoing radiation effects from a creature or object.",
    level: 4,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Resistant Armor",
    description: "Grant DR 10/— or energy resistance 10 to three energy types.",
    level: 4,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "RestorationR",
    description: "Restores ability score drain and negative levels.",
    level: 4,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Telepathic Bond",
    description: "Link allows allies to communicate.",
    level: 4,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Break Enchantment",
    description:
      "Free creatures from curses, enchantments, and transmutations.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Call Cosmos",
    description:
      "Rain cosmic particles on targets, dealing 4d6 fire damage and 3d6 cold damage.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Command, Greater",
    description:
      "One creature per level obeys select command for 1 round per level.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Commune With Nature",
    description: "Learn about terrain for 1 mile per level.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Contact Other Plane",
    description: "Ask questions of extraplanar entity.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Crush Skull",
    description: "Deal 18d8 damage to living creature’s head.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Dismissal",
    description:
      "Force extraplanar creatures whose total CR is no greater than your level + 2 to return to their native planes.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Dispel Magic, Greater",
    description: "Cancel multiple spells or effects.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Dominate Person",
    description: "Control humanoid telepathically.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Feeblemind",
    description: "Target’s Intelligence and Charisma scores drop to 1.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Mind Thrust",
    description: "Mentally deal 15d10 damage to and exhaust one target.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Modify Memory",
    description: "Change 5 minutes of target’s memories.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Mystic Cure",
    description:
      "Restore 16d8 + your Wisdom modifier Hit Points to a living creature or restore life to a recently slain creature.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Mystic Cure, Mass",
    description:
      "Restore 3d8 + your Wisdom modifier Hit Points to one living creature per level.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Planar Binding",
    description:
      "Trap an extraplanar creature of CR 7 or lower until it performs a task.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Raise Dead",
    description:
      "Restore life to a creature that died no more than 1 day per level ago.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Remove Condition, Greater",
    description: "Remove all harmful conditions affecting a creature.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Resistant Aegis",
    description:
      "Grant up to 10 creatures DR 5/— or energy resistance 5 to all energy types.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Retrocognition",
    description:
      "Gain psychic impressions of past events in a certain location.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Synaptic Pulse, Greater",
    description: "Stun all creatures within 20 feet for 1d4 rounds.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Telepathy",
    description: "Communicate mentally with any creatures within 100 feet.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Waves of Fatigue",
    description: "Several targets become fatigued.",
    level: 5,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Control Gravity",
    description: "Alter gravity in an area.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Control Undead",
    description: "Undead creatures follow your commands and don’t attack you.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Enshrining Refuge",
    description:
      "Targets can’t attack or be attacked, but can exist comfortably.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Ethereal Jaunt",
    description: "You become ethereal for 1 round per level.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Flesh to Stone",
    description: "Turn a creature into a statue.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Gravitational Singularity",
    description:
      "Particle with infinite density pulls creatures and objects into it, dealing 12d6 damage each round to those inside.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Inflict Pain, Mass",
    description:
      "Wracking pain imposes –2 penalty to ability checks, attack rolls, and skill checks on one target per level.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Mind Thrust",
    description: "Mentally deal 17d10 damage to, exhaust, and stun one target.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Mystic Cure",
    description:
      "Restore 20d8 + your Wisdom modifier HP to a living creature or restore life to a recently slain creature.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Mystic Cure, Mass",
    description:
      "Restore 5d8 + your Wisdom modifier Hit Points to one living creature per level.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Planar Barrier",
    description: "Seal an area against all planar travel into or within it.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Planar Binding",
    description:
      "Trap an extraplanar creature of CR 10 or lower until it performs a task.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Plane Shift",
    description:
      "As many as eight creatures travel to another plane you choose.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Psychic Surgery",
    description:
      "Cure all Intelligence, Wisdom, and Charisma damage and drain, plus remove other mental afflictions and conditions.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Regenerate",
    description:
      "Grow back target’s severed limbs, restore 12d8 Hit Points, and remove exhaustion and fatigue.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Resistant Armor, Greater",
    description:
      "Grant DR 15/— or energy resistance 15 against four energy types.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Shadow Walk",
    description:
      "Step into a shadowy realm to travel to a destination rapidly.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Snuff Life",
    description:
      "Instantly kill or massively damage one creature per 2 caster levels, depending on targets’ CRs.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Subjective Reality",
    description: "You convince yourself one creature or object is an illusion.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Suggestion, Mass",
    description:
      "Compel one target per level to follow stated course of action.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Telepathic Jaunt",
    description:
      "Use your telepathic bond with a creature to teleport to its location.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "True Seeing",
    description: "Target can see things as they really are.",
    level: 6,
    requiresResolve: false,
    class: Class.MYSTIC
  },
  {
    name: "Vision",
    description: "Answer a question about a person, place, or object.",
    level: 6,
    requiresResolve: true,
    class: Class.MYSTIC
  },
  {
    name: "Dancing Lights",
    description: "Create and direct up to four lights.",
    level: 0,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Daze",
    description: "Humanoid creature of CR 3 or lower is dazed.",
    level: 0,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Detect Affliction",
    description:
      "Determine whether a creature or object has been poisoned, is diseased, is Cursed, or is suffering a similar affliction.",
    level: 0,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Detect Magic",
    description: "Detect spells and magic items within 60 feet.",
    level: 0,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Energy Ray",
    description: "Ray deals 1d3 acid, cold, electricity, or fire damage.",
    level: 0,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Ghost Sound",
    description: "Create minor illusory sounds.",
    level: 0,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Mending",
    description: "Restore 1d4 Hit Points to an object or construct.",
    level: 0,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Psychokinetic Hand",
    description: "Telekinetically move an object of 1 bulk or less.",
    level: 0,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Telepathic Message",
    description:
      "Send a short telepathic message and hear simple telepathic replies.",
    level: 0,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Token Spell",
    description: "Perform simple magical effects.",
    level: 0,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Transfer Charge",
    description:
      "Move charges from one power source to another source of the same type.",
    level: 0,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Comprehend Languages",
    description:
      "You understand all spoken, signed, and written or tactile languages.",
    level: 1,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Detect Radiation",
    description: "Detect radiation within 120 feet.",
    level: 1,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Detect Tech",
    description:
      "Detect technological items with charges or that replenish charges within 60 feet.",
    level: 1,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Disguise Self",
    description: "Change your appearance.",
    level: 1,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Erase",
    description: "Remove writings of either magical or mundane nature.",
    level: 1,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Flight",
    description: "One creature or object per level falls slowly.",
    level: 1,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Grease",
    description: "Make a 10-ft. square or one object slippery.",
    level: 1,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Hold Portal",
    description: "Hold a door shut.",
    level: 1,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Holographic Image",
    description: "Create a silent hologram of your design.",
    level: 1,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Identify",
    description:
      "Gain +10 bonus to identify items of a magic or technological nature.",
    level: 1,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Jolting Surge",
    description: "Touch deals 4d6 electricity damage.",
    level: 1,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Keen Senses",
    description:
      "Target gains low-light vision and a +2 bonus to Perception checks.",
    level: 1,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Life Bubble",
    description:
      "Encase targeted creatures with a shell of tolerable atmosphere.",
    level: 1,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Magic Missile",
    description: "Two missiles deal 1d4+1 force damage.",
    level: 1,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Overheat",
    description: "Deal 2d8 fire damage to creatures in cone.",
    level: 1,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Supercharge Weapon",
    description: "Touched weapon deals extra damage.",
    level: 1,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Unseen Servant",
    description: "Invisible force obeys your commands.",
    level: 1,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Caustic Conversion",
    description:
      "Fling magical nanites as a ranged attack that deals 4d4 acid damage to one target, plus 5 additional damage in subsequent rounds.",
    level: 2,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Command Undead",
    description: "Undead creature obeys your commands.",
    level: 2,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Darkvision",
    description: "Grant ability to see 60 feet in total darkness.",
    level: 2,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Daze Monster",
    description: "Target living creature of CR 5 or lower is dazed.",
    level: 2,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Flight",
    description: "Target moves up and down at your direction.",
    level: 2,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Fog Cloud",
    description: "Create a fog that obscures vision.",
    level: 2,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Holographic Image",
    description: "Create a hologram with some sound of your design.",
    level: 2,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Implant Data",
    description:
      "Embed one piece of data per level in a target computer or system.",
    level: 2,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Inject Nanobots",
    description:
      "Touch deals 4d8 damage to target and causes the confused condition.",
    level: 2,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Invisibility",
    description:
      "Target is invisible for 1 minute per level or until it attacks.",
    level: 2,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Knock",
    description: "Opens a locked or magically sealed door.",
    level: 2,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Logic Bomb",
    description:
      "Target computer deals 6d6 energy damage to the first creature that tries and fails to use it.",
    level: 2,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Make Whole",
    description: "Restore 5d6 Hit Points to an object or construct.",
    level: 2,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Microbot Assault",
    description: "Cloud of tiny robots harasses creatures within it.",
    level: 2,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Mirror Image",
    description: "Create decoy duplicates of yourself.",
    level: 2,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "RechargeR",
    description:
      "Replenish charges in a battery or item capable of holding charges.",
    level: 2,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Security Seal",
    description: "Magically lock a portal, a container, or a security system.",
    level: 2,
    requiresResolve: true,
    class: Class.TECHNOMANCER
  },
  {
    name: "See Invisibility",
    description: "See invisible creatures or objects.",
    level: 2,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Spider Climb",
    description: "Grant ability to walk on walls and ceilings.",
    level: 2,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Arcane Sight",
    description: "Magical sources become visible to you.",
    level: 3,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Arcing Surge",
    description: "Deal 10d6 electricity damage in a 120-foot line.",
    level: 3,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Clairaudience/Clairvoyance",
    description: "Hear or see at a distance for 1 minute per level.",
    level: 3,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Discharge",
    description:
      "Disrupts or depowers one target technological item or construct.",
    level: 3,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Dispel Magic",
    description: "Cancel one magical spell or effect.",
    level: 3,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Displacement",
    description: "Attacks miss target 50% of the time.",
    level: 3,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Entropic Grasp",
    description:
      "Touch decays a construct or nonmagical manufactured item once per round per level.",
    level: 3,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Explosive Blast",
    description: "Deal 9d6 fire damage to creatures in a 20-foot radius.",
    level: 3,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Flight",
    description: "Target flies at a speed of 60 feet.",
    level: 3,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Handy Junkbot",
    description:
      "Create a temporary robot made of junk to perform Computers, Engineering, Piloting, and Sleight of Hand tasks.",
    level: 3,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Haste",
    description: "One creature per level moves and acts faster.",
    level: 3,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Healing Junkbot",
    description:
      "Robot made of junk can perform Medicine tasks and drag unconscious creature to safety.",
    level: 3,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Holographic Image",
    description:
      "Create a hologram with sound, smell, and thermal effects of your design that lasts as long as you concentrate, plus 3 additional rounds.",
    level: 3,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Instant Virus",
    description: "Inflict technological construct with disease.",
    level: 3,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Irradiate",
    description: "Flood area with dangerous radiation.",
    level: 3,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Nondetection",
    description: "Hide target from divination and surveillance.",
    level: 3,
    requiresResolve: true,
    class: Class.TECHNOMANCER
  },
  {
    name: "Probability Prediction",
    description: "Reroll one attack roll, save, or check.",
    level: 3,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Resistant Armor, Lesser",
    description:
      "Grant DR 5/— or energy resistance 5 against two energy types.",
    level: 3,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Slow",
    description: "One creature per level moves and acts slower.",
    level: 3,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Tongues",
    description: "Target can speak and understand any language.",
    level: 3,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Animate Dead",
    description: "Create controlled undead creatures out of target corpses.",
    level: 4,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Arcane Eye",
    description:
      "Invisible floating eye moves 30 feet per round and sends you visual information.",
    level: 4,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Corrosive Haze",
    description:
      "Cloud deals 4d8 acid damage per round, plus 10 additional damage.",
    level: 4,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Creation",
    description: "Create one object made of vegetable matter.",
    level: 4,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Destruction Protocol",
    description: "Turn nonhostile technological construct against your foes.",
    level: 4,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Dimension Door",
    description: "Teleport a short distance.",
    level: 4,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Dismissal",
    description: "Force a creature to return to its native plane.",
    level: 4,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Flight",
    description: "Target flies at a speed of 70 feet.",
    level: 4,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Holographic Image",
    description:
      "Create a hologram with sound, smell, and thermal effects that follows a script determined by you.",
    level: 4,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Invisibility, Greater",
    description:
      "Target is invisible for 1 round per level, even if it attacks.",
    level: 4,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Overload Systems",
    description: "Target creature has a 50% chance to lose each action.",
    level: 4,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Planar Binding",
    description:
      "Trap an extraplanar creature of CR 4 or lower until it performs a task.",
    level: 4,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Remove Radioactivity",
    description: "Remove ongoing radiation effects from a creature or object.",
    level: 4,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Resilient Sphere",
    description: "Force globe protects but traps one target.",
    level: 4,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Resistant Armor",
    description: "Grant DR 10/— or energy resistance 10 to three energy types.",
    level: 4,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Rewire Flesh",
    description:
      "Turn target partially into a robot, dealing 3d6 damage per round and reducing speed.",
    level: 4,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Soothing Protocol",
    description: "Calm a target hostile technological construct.",
    level: 4,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Wall of Fire",
    description:
      "Blazing curtain deals 2d6 fire damage out to 10 feet and 1d6 fire damage out to 20 feet; passing through the wall deals 5d6 fire damage.",
    level: 4,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Break Enchantment",
    description:
      "Free creatures from curses, enchantments, and transmutations.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Contact Other Plane",
    description:
      "Ask questions of an extraplanar entity, with questionable results.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Control Machines",
    description:
      "Command technological constructs within range telepathically.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Creation",
    description: "Create a single object made of vegetable or mineral matter.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Dismissal",
    description:
      "Force extraplanar creatures whose total CR is no greater than your level + 2 to return to their native planes.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Dispel Magic, Greater",
    description: "Cancel multiple magical spells or effects.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Flight",
    description:
      "You can fly at a speed of 70 feet and can hustle over long distances.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Heat Leech",
    description: "Deal 13d8 cold damage to creatures in a cone.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Holographic Image",
    description:
      "Create a detailed hologram that is permanent or is triggered by conditions you set.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Holographic Terrain",
    description: "Create a large hologram that depicts terrain and structures.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Mislead",
    description:
      "Make yourself invisible and create an illusory double of your likeness.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Passwall",
    description: "Create a passage through most walls.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Planar Binding",
    description:
      "Trap an extraplanar creature of CR 7 or lower until it performs a task.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Private Sanctum",
    description: "Prevent anyone from viewing or scrying an area for 24 hours.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Prying Eyes",
    description: "Twenty floating eyes scout for you.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Rapid Repair",
    description:
      "Construct or weapon regains 2d8 Hit Points per round for 1 minute.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Resistant Aegis",
    description:
      "Grant up to 10 creatures DR 5/— or energy resistance 5 to all energy types.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Synapse Overload",
    description: "Target takes 18d8 damage and is staggered for 1 minute.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Telekinesis",
    description:
      "Move an object, attack creatures, or hurl objects or creatures with your mind.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Teleport",
    description: "Instantly teleport as far as 2,000 miles.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Unwilling Guardian",
    description: "Charm a target into protecting you during combat.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Wall of Force",
    description: "Invisible wall is difficult to destroy.",
    level: 5,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Battle Junkbot",
    description:
      "Create a temporary robot from random junk, turning it into a deadly combatant.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Chain Surge",
    description:
      "Deal 13d12 electricity damage to primary target and up to 10 secondary targets; one of the primary target’s electrical devices stops functioning for 1 round.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Control Gravity",
    description: "Alter gravity in an area.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Control Undead",
    description: "Undead creatures follow your commands and don’t attack you.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Discharge, Greater",
    description:
      "Disrupts or depowers multiple technological items or constructs.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Disintegrate",
    description: "Ray reduces one creature or object to dust.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Ethereal Jaunt",
    description: "You become ethereal for 1 round per level.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Flight",
    description: "Multiple targets can fly at a speed of 60 feet.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Holographic Image",
    description: "Illusory double of your likeness can talk and cast spells.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Interplanetary Teleport",
    description: "Teleport between planets.",
    level: 6,
    requiresResolve: true,
    class: Class.TECHNOMANCER
  },
  {
    name: "Invisibility, Mass",
    description:
      "Multiple targets are invisible for 1 minute per level or until one target attacks or moves away from other targets affected by spell.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Planar Barrier",
    description: "Seal an area against all planar travel into or within it.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Planar Binding",
    description:
      "Trap an extraplanar creature of CR 10 or lower until it performs a task.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Plane Shift",
    description:
      "As many as eight creatures travel to another plane of your choice.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Resistant Armor, Greater",
    description:
      "Grant DR 15/— or energy resistance 15 against four energy types.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Rewire Flesh, Mass",
    description:
      "Deal 3d6 damage per round and reducing targets’ speed during that time.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Shadow Walk",
    description:
      "Step into a shadowy realm to travel to a destination rapidly.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Shadowy Fleet",
    description:
      "Illusion of starships deals 3d6 piercing damage and 3d6 fire damage to all creatures in the affected area.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Sympathetic Vibration",
    description: "Deal 2d10 damage per round to freestanding structure.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Terraform",
    description: "Alter terrain and climate.",
    level: 6,
    requiresResolve: true,
    class: Class.TECHNOMANCER
  },
  {
    name: "True Seeing",
    description: "Target can see things as they really are.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Veil",
    description: "Change appearance of a group of creatures.",
    level: 6,
    requiresResolve: false,
    class: Class.TECHNOMANCER
  },
  {
    name: "Wall of Steel",
    description:
      "Wall has 45 Hit Points per inch of thickness and hardness 15.",
    level: 6,
    requiresResolve: true,
    class: Class.TECHNOMANCER
  }
];

export default spells;
