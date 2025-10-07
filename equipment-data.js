// Pax Dei Equipment Database
const EQUIPMENT_DATABASE = {
  // Weapons
  weapons: {
    "1h": [
      {
        id: "mace",
        name: "Mace",
        description: "One-handed blunt weapon",
        skills: [
          {
            id: "commanding-strike",
            name: "Commanding Strike",
            description:
              "Swing your weapon with authority. Deal 130 damage and become threatening, 334% increased threat generation for 10 seconds.",
          },
          {
            id: "forceful-strike",
            name: "Forceful Strike",
            description:
              "Perform a heavy strike, dealing 116 damage and stunning enemies for 2 seconds.",
          },
          {
            id: "earthquake",
            name: "Earthquake",
            description:
              "Smash down violently, fracturing the ground beneath you. The impact deals 391 damage and weakens enemies, reducing their damage by -12,3% for 18 seconds.",
          },
        ],
      },
      {
        id: "sword",
        name: "Sword",
        description: "One-handed blade weapon",
        skills: [
          {
            id: "righteous-strike",
            name: "Righteous Strike",
            description:
              "Deal 193 damage. Each strike fills you with divine rapture, increasing attack speed by 4% and movement speed by 5% for 10 seconds. Effect stacks up to 4 times.",
          },
          {
            id: "jolting-kick",
            name: "Jolting Kick",
            description:
              "Perform a kick that deals 192 damage and interrupts enemy spell casting. If a spell is interrupted, the target also becomes silenced for 10 seconds.",
          },
          {
            id: "crusaders-bid",
            name: "Crusader's Bid",
            description:
              "Deals damage based on the amount of divine rapture stacks on you. 199 | 319 | 478 | 677 damage. Consumes all stacks when used.",
          },
        ],
      },
      {
        id: "handspear",
        name: "Handspear",
        description: "One-handed thrusting weapon",
        skills: [
          {
            id: "swift-jab",
            name: "Swift Jab",
            description:
              "Quickly drive your spear forward in a focused thrust, dealing 194 damage.",
          },
          {
            id: "barrage",
            name: "Barrage",
            description:
              "Overwhelm your target with relentless pressure. Deliver a rapid series of thrusts, each striking for 148.",
          },
          {
            id: "intercept",
            name: "Intercept",
            description:
              "Leap forward to deliver a crippling strike, dealing 365 and reducing the target movement speed by 50% for 8 seconds.",
          },
        ],
      },
    ],
    "2h": [
      {
        id: "great-maul",
        name: "Great Maul",
        description: "Two-handed crushing weapon",
        skills: [
          {
            id: "vexing-sweep",
            name: "Vexing Sweep",
            description:
              "Deliver a powerful sideways smash, dealing 321 damage and generating 100 threat.",
          },
          {
            id: "overhead-slam",
            name: "Overhead Slam",
            description:
              "Prepare for a powerful strike and slam your mace down, dealing 380 damage and 132 threat.",
          },
          {
            id: "tempest-command",
            name: "Tempest Command",
            description:
              "Become the eye of a storm. Command violent winds to spiral around you, pulling nearby enemies into your reach. Enemies are chained for 2 seconds upon landing.",
          },
        ],
      },
      {
        id: "great-axe",
        name: "Great Axe",
        description: "Two-handed slashing weapon",
        skills: [
          {
            id: "armor-shred",
            name: "Armor Shred",
            description:
              "Deliver a powerful overhead chop, dealing 162 damage and each strike adds a armor shred on the target. Reduces the target's physical defense by -20 for 10 seconds. Stacks up to 3 times.",
          },
          {
            id: "vicious-sweep",
            name: "Vicious Sweep",
            description:
              "Swing in a broad arc, dealing 342 damage. All enemies struck gain armor shred charges equal to the highest count among targets hit.",
          },
          {
            id: "radiant-cleave",
            name: "Radiant Cleave",
            description:
              "A vicious twirling, forward moving attack - sending the axe blade's razor cutting edge through anything within reach. Deals 333 damage on both swings.",
          },
        ],
      },
      {
        id: "greatsword",
        name: "Greatsword",
        description: "Two-handed heavy blade weapon",
        skills: [
          {
            id: "righteous-slash",
            name: "Righteous Slash",
            description:
              "Deal 214 damage. Each strike fills you with divine rapture, increasing attack speed by 4% and movement speed by 5% for 10 seconds. Effect stacks up to 4 times.",
          },
          {
            id: "guardbreaker",
            name: "Guardbreaker",
            description:
              "Perform a heavy rising slash that breaks through blocks, dealing 337 damage. Successfully breaking a block briefly stuns the enemy.",
          },
          {
            id: "crusaders-closing",
            name: "Crusader's Closing",
            description:
              "Deals damage based on the amount of divine rapture stacks on you. 274 | 440 | 659 | 933 damage. Consumes all stacks when used.",
          },
        ],
      },
      {
        id: "polearm",
        name: "Polearm",
        description: "Two-handed long thrusting weapon",
        skills: [
          {
            id: "heavy-thrust",
            name: "Heavy Thrust",
            description: "Thrust the spear forward to deal 224 damage.",
          },
          {
            id: "impaling-strike",
            name: "Impaling Strike",
            description:
              "Drive the spear down to incapacitate your target, causing them to be chained for 7 seconds. Deals 411 damage.",
          },
          {
            id: "overhook",
            name: "Overhook",
            description:
              "Perform a full reach thrust for 367 damage. Pull the polearm back to launch the enemy behind your position. Enemy is chained for 2 seconds on landing.",
          },
        ],
      },
      {
        id: "staff-of-zephyr",
        name: "Staff of Zephyr",
        description: "Two-handed healing staff for Clerics",
        skills: [
          {
            id: "divine-orb",
            name: "Divine Orb",
            description:
              "Fire a projectile which will splash 152 health to allies within 4 meters.",
          },
          {
            id: "divine-intervention-zephyr",
            name: "Divine Intervention",
            description:
              "Heal a target below 40% health for 336, otherwise heal for a reduced amount 152.",
          },
          {
            id: "zephyr-of-life",
            name: "Zephyr of Life",
            description:
              "Channel healing energy within 6 meter radius around you, giving 160 health up to 6 times.",
          },
        ],
      },
      {
        id: "staff-of-divine",
        name: "Staff of Divine",
        description: "Two-handed healing staff for Clerics",
        skills: [
          {
            id: "remedy",
            name: "Remedy",
            description: "Heal a single ally, or yourself for 179 health.",
          },
          {
            id: "divine-intervention-divine",
            name: "Divine Intervention",
            description:
              "Heal a target below 40% health for 336, otherwise heal for a reduced amount 152.",
          },
          {
            id: "detonation-of-life",
            name: "Detonation of Life",
            description:
              "Place a 5 meter area which will burst after 2 seconds giving allies in the area 443 health.",
          },
        ],
      },
      {
        id: "sylvan-staff",
        name: "Sylvan Staff",
        description: "Two-handed nature healing staff",
        skills: [
          {
            id: "regrowth",
            name: "Regrowth",
            description:
              "Give a stack of regrowth to an ally, providing 14 | 27 | 39 health per second for 8 seconds. After 3 stacks have been applied, the next stack will overflow giving 152 health and removing all stacks.",
          },
          {
            id: "overgrowth",
            name: "Overgrowth",
            description:
              "Heal allies within 7 meters based on the number of regrowth stacks on them for 98 | 120 | 160 | 205 and refresh the duration of all regrowth effects.",
          },
          {
            id: "bloodfed-grove",
            name: "Bloodfed Grove",
            description:
              "Place a 8 meter area lasting 5 seconds which applies a scaling heal over time based on the number of enemies inside the area for 106 | 112 | 123 | 123 | 135.",
          },
        ],
      },
    ],
  },

  // Shields
  shields: [
    {
      id: "basic-shield",
      name: "Basic Shield",
      description: "A simple shield for basic defense",
      skills: [],
    },
  ],

  // Light Armor
  light: {
    helmets: [
      {
        id: "pilgrims-hood",
        name: "Pilgrim's Hood",
        armorType: "light",
        slot: "helmet",
        description: "Universal light helmet with spirit restoration",
        levelRequirement: "Universal",
        skills: [
          {
            id: "breath-of-spirit",
            name: "Breath of Spirit",
            description: "Replenish {Energy} Spirit",
            level: "",
          },
        ],
      },
      {
        id: "shepherds-hairband-quiet-gaze",
        name: "Shepherd's Hairband of Quiet Gaze",
        armorType: "light",
        slot: "helmet",
        description: "Stealth-focused light helmet",
        levelRequirement: "Universal",
        skills: [
          {
            id: "pacify",
            name: "Pacify",
            description:
              "Places an unknowing target into a lulled state, reducing their awareness by {-75}%. Has no effect on enemies who are already aware of your presence. Effect lasts for {Duration}",
            level: "",
          },
        ],
      },
      {
        id: "clerics-cap-absolution",
        name: "Cleric's Cap of Absolution",
        armorType: "light",
        slot: "helmet",
        description: "Cleric helmet with purification powers",
        levelRequirement: "Level 10+",
        skills: [
          {
            id: "purify-self",
            name: "Purify Self",
            description: "Remove all harmful effects from yourself",
            level: "",
          },
        ],
      },
      {
        id: "magus-hat-fractured-time",
        name: "Magus' Hat of Fractured Time",
        description: "Magus helmet with time manipulation (Level 20+)",
        skills: [
          {
            id: "chronoseer",
            name: "Chronoseer",
            description: "Advances all currently active cooldowns by seconds",
          },
        ],
      },
    ],
    chests: [
      {
        id: "pilgrims-tunic-life",
        name: "Pilgrim's Tunic",
        description: "Universal light chest with life restoration",
        skills: [
          {
            id: "breath-of-life",
            name: "Breath of Life",
            description:
              "Regain health over the duration of the prayer. Can only be used while out of combat.",
          },
        ],
      },
      {
        id: "pilgrims-tunic-blessed",
        name: "Pilgrim's Tunic (Blessed)",
        description: "Universal light chest with blessed restoration",
        skills: [
          {
            id: "blessed-breath",
            name: "Blessed Breath",
            description:
              "Regain health and Spirit over the duration of the prayer. Can only be used while out of combat.",
          },
        ],
      },
      {
        id: "shepherds-smock-blooming-fold",
        name: "Shepherd's Smock of Blooming Fold",
        description: "Healing-focused light chest piece",
        skills: [
          {
            id: "verdant-mend",
            name: "Verdant Mend",
            description:
              "Heals all allies within range and grants them a blessing that increases healing received.",
          },
        ],
      },
      {
        id: "clerics-alb-cleansing",
        name: "Cleric's Alb of Cleansing",
        description: "Cleric chest with cleansing powers (Level 10+)",
        skills: [
          {
            id: "purify-target",
            name: "Purify Target",
            description: "Remove a harmful effect from a friend",
          },
        ],
      },
      {
        id: "clerics-alb-reflection",
        name: "Cleric's Alb of Reflection",
        description: "Cleric chest with divine shield (Level 10+)",
        skills: [
          {
            id: "divine-shield",
            name: "Divine Shield",
            description:
              "For the next 4 seconds, each melee attack taken reflects damage back to the attacker and restores health equal to the full damage of the attack.",
          },
        ],
      },
      {
        id: "magus-robe-concentration",
        name: "Magus' Robe of Concentration",
        description: "Magus chest with concentration boost (Level 20+)",
        skills: [
          {
            id: "alacrity",
            name: "Alacrity",
            description:
              "Increases your spell casting speed by 100% and decreases Spirit cost by 25.5% for 20 seconds",
          },
        ],
      },
    ],
    legs: [
      {
        id: "pilgrims-breeches",
        name: "Pilgrim's Breeches",
        description: "Universal light legs with balance restoration",
        skills: [
          {
            id: "breath-of-balance",
            name: "Breath of Balance",
            description: "Replenish stamina of a non-hostile target",
          },
        ],
      },
      {
        id: "clerics-pantet-hollow-seal",
        name: "Cleric's Pantet of the Hollow Seal",
        description: "Cleric legs with consecration (Level 10+)",
        skills: [
          {
            id: "consecrated-ground",
            name: "Consecrated Ground",
            description:
              "Consecrates an area surrounding the caster - increases defenses of all allies inside its limits",
          },
        ],
      },
      {
        id: "magus-trousers-entrancement",
        name: "Magus' Trousers of Entrancement",
        description: "Magus legs with mesmerization (Level 10+)",
        skills: [
          {
            id: "mesmerize",
            name: "Mesmerize",
            description:
              "Mesmerizes enemy within range, rendering them entranced for 21 seconds or until they take damage",
          },
        ],
      },
      {
        id: "magus-trousers-dreambind",
        name: "Magus' Trousers of Dreambind",
        description: "Magus legs with enhanced mesmerization (Level 20+)",
        skills: [
          {
            id: "haunting-memories",
            name: "Haunting Memories",
            description:
              "Mesmerizes up to 3 enemies within range, rendering them entranced for 21 seconds or until they take damage",
          },
        ],
      },
    ],
    boots: [
      {
        id: "pilgrims-slippers",
        name: "Pilgrim's Slippers",
        description: "Universal light boots with joy enhancement",
        skills: [
          {
            id: "breath-of-joy",
            name: "Breath of Joy",
            description:
              "Increases movement speed by 20% for 8 seconds. Sprinting does not consume stamina during the effect",
          },
        ],
      },
      {
        id: "shepherds-steps-rushing-wind",
        name: "Shepherd's Steps of Rushing Wind",
        description: "Swift movement light boots (Level 10+)",
        skills: [
          {
            id: "spirit-stride",
            name: "Spirit Stride",
            description:
              "Increases your movement speed by 20% and regenerates Spirit per second for 7 seconds",
          },
        ],
      },
    ],
  },

  // Heavy Armor
  heavy: {
    helmets: [
      {
        id: "pilgrims-helmet",
        name: "Pilgrim's Helmet",
        description: "Universal heavy helmet with spirit restoration",
        skills: [
          {
            id: "breath-of-spirit-heavy",
            name: "Breath of Spirit",
            description: "Replenish 64 spirit",
          },
        ],
      },
      {
        id: "warriors-helm-second-breath",
        name: "Warrior's Helm of Second Breath",
        description: "Warrior helmet with quick remedy",
        skills: [
          {
            id: "quick-remedy",
            name: "Quick Remedy",
            description:
              "Increases healing received by 25% for 10 seconds. Heal yourself and allies in close proximity by 170 health",
          },
        ],
      },
      {
        id: "ironsides-helm-warcry",
        name: "Ironside's Helm of Warcry",
        description: "Tank helmet with warcry (Level 10+)",
        skills: [
          {
            id: "roar",
            name: "Roar",
            description:
              "Generates 50 aggro towards all enemies in a cone in front of you. Gain stamina over time based on how many enemies were affected",
          },
        ],
      },
      {
        id: "heralds-helm-immovable",
        name: "Herald's Helm of the Immovable",
        description: "Herald helmet with mental fortitude (Level 10+)",
        skills: [
          {
            id: "mental-fortitude",
            name: "Mental Fortitude",
            description:
              "Makes you immune to displacement effects and increases your crowd control resistance by 25 for 20s",
          },
        ],
      },
    ],
    chests: [
      {
        id: "pilgrims-breastplate-life",
        name: "Pilgrim's Breastplate",
        description: "Universal heavy chest with life restoration",
        skills: [
          {
            id: "breath-of-life-heavy",
            name: "Breath of Life",
            description:
              "Regain 1086 health over the duration of the prayer. Can only be used while out of combat.",
          },
        ],
      },
      {
        id: "pilgrims-breastplate-blessed",
        name: "Pilgrim's Breastplate (Blessed)",
        description: "Universal heavy chest with blessed restoration",
        skills: [
          {
            id: "blessed-breath-heavy",
            name: "Blessed Breath",
            description:
              "Regain 744 health and 90 spirit over the duration of the prayer. Can only be used while out of combat.",
          },
        ],
      },
      {
        id: "warriors-cuirass-windlash",
        name: "Warrior's Cuirass of Windlash",
        description: "Warrior chest with windlash ability",
        skills: [
          {
            id: "windlash",
            name: "Windlash",
            description:
              "Pull an enemy to you and cause them to become chained",
          },
        ],
      },
      {
        id: "ironsides-harnais-provocation",
        name: "Ironside's Harnais of Provocation",
        description: "Tank chest with taunt ability (Level 10+)",
        skills: [
          {
            id: "taunt",
            name: "Taunt",
            description:
              "Taunts an enemy forcing them to attack you for a while. Additionally target's damage is reduced by 21.9%",
          },
        ],
      },
      {
        id: "heralds-plates-ironroot",
        name: "Herald's Plates of the Ironroot",
        description: "Herald chest with ironroot grasp (Level 10+)",
        skills: [
          {
            id: "ironroot-grasp",
            name: "Ironroot Grasp",
            description:
              "While channeling, the caster becomes immobile, entering a trance-like state. Enemies within a 5 meters radius are chained to the ground",
          },
        ],
      },
    ],
    legs: [
      {
        id: "pilgrims-legguards",
        name: "Pilgrim's Legguards",
        description: "Universal heavy legs with balance restoration",
        skills: [
          {
            id: "breath-of-balance-heavy",
            name: "Breath of Balance",
            description: "Replenish 74 stamina of a non-hostile target",
          },
        ],
      },
      {
        id: "ironsides-greaves-vital-pulse",
        name: "Ironside's Greaves of Vital Pulse",
        description: "Tank legs with aura of life",
        skills: [
          {
            id: "aura-of-life",
            name: "Aura of Life",
            description:
              "Grants allies in radius with +430 maximum health for 20s. Additionally allies in close proximity to you will get 13% increased healing received while the effect is active",
          },
        ],
      },
      {
        id: "warriors-greaves-rage",
        name: "Warrior's Greaves of Rage",
        description: "Warrior legs with searing rage (Level 10+)",
        skills: [
          {
            id: "searing-rage",
            name: "Searing Rage",
            description:
              "When active gain 7.5% damage bonus and 7.5% crowd control effectiveness every time you take damage. Effect stacks up to 10 times",
          },
        ],
      },
      {
        id: "ironsides-greaves-sanctified",
        name: "Ironside's Greaves of Sanctified Stand",
        description: "Tank legs with sanctified stand (Level 10+)",
        skills: [
          {
            id: "sanctified-stand",
            name: "Sanctified Stand",
            description:
              "Increases all physical defenses for Duration. Protects the next instances of damage. Reduces mobility for the duration. Can be turned off by activating again",
          },
        ],
      },
      {
        id: "heralds-greaves-unfallen",
        name: "Herald's Greaves of the Unfallen",
        description: "Herald legs with rallying banner (Level 20+)",
        skills: [
          {
            id: "rallying-banner",
            name: "Rallying Banner",
            description:
              "Call down a battle standard that stuns enemies on landing. The flag motivates allies, increasing their attack speed by 9.1% while in its proximity. The flag disappears after 30 seconds",
          },
        ],
      },
    ],
    boots: [
      {
        id: "pilgrims-sabatons",
        name: "Pilgrim's Sabatons",
        description: "Universal heavy boots with joy enhancement",
        skills: [
          {
            id: "breath-of-joy-heavy",
            name: "Breath of Joy",
            description:
              "Increases movement speed by 20% for 8 seconds. Sprinting does not consume stamina during the effect",
          },
        ],
      },
      {
        id: "ironsides-sabatons-quiet-guard",
        name: "Ironside's Sabatons of Quiet Guard",
        description: "Tank boots with quiet stand (Level 10+)",
        skills: [
          {
            id: "quiet-stand",
            name: "Quiet Stand",
            description:
              "Increases all physical defenses for Duration. Protects the next instances of damage. Reduces mobility for the duration. Can be turned off by activating again",
          },
        ],
      },
      {
        id: "warriors-sabatons-swift-march",
        name: "Warrior's Sabatons of Swift March",
        description: "Warrior boots with surging stride (Level 10+)",
        skills: [
          {
            id: "surging-stride",
            name: "Surging Stride",
            description:
              "Increase movement speed every second. Stacks up to times. Effect lasts for Duration",
          },
        ],
      },
    ],
  },

  // Medium Armor
  medium: {
    helmets: [
      {
        id: "pilgrims-helmcap",
        name: "Pilgrim's Helmcap",
        description: "Universal medium helmet with spirit restoration",
        skills: [
          {
            id: "breath-of-spirit-medium",
            name: "Breath of Spirit",
            description: "Replenish 64 spirit",
          },
        ],
      },
      {
        id: "hunters-hood-marked-prey",
        name: "Hunter's Hood of the Marked Prey",
        description: "Hunter helmet with killmark ability",
        skills: [
          {
            id: "killmark",
            name: "Killmark",
            description:
              "Marks an enemy for 30 seconds increasing all damage they take by 10%. Killing the marked target grants the killer with increased movement speed for a duration",
          },
        ],
      },
      {
        id: "tricksters-coif-slosh",
        name: "Trickster's Coif of the Slosh",
        description: "Trickster helmet with jester's flask (Level 10+)",
        skills: [
          {
            id: "jesters-flask",
            name: "Jester's Flask",
            description:
              "Throw a flask that splashes on impact, reducing the movement speed of affected enemies by 37.9% and reduces physical damage dealt by 10.7%. Lasts for 10 seconds",
          },
        ],
      },
      {
        id: "vanguards-cap-revocation",
        name: "Vanguard's Cap of Revocation",
        description: "Vanguard helmet with revoke ability (Level 10+)",
        skills: [
          {
            id: "revoke",
            name: "Revoke",
            description: "Remove all positive effects from an enemy",
          },
        ],
      },
    ],
    chests: [
      {
        id: "pilgrims-jerkin-life",
        name: "Pilgrim's Jerkin",
        description: "Universal medium chest with life restoration",
        skills: [
          {
            id: "breath-of-life-medium",
            name: "Breath of Life",
            description:
              "Regain 1086 health over the duration of the prayer. Can only be used while out of combat.",
          },
        ],
      },
      {
        id: "pilgrims-jerkin-balance",
        name: "Pilgrim's Jerkin (Balance)",
        description: "Universal medium chest with balance restoration",
        skills: [
          {
            id: "breath-of-balance-medium",
            name: "Breath of Balance",
            description: "Replenish 74 stamina of a non-hostile target",
          },
        ],
      },
      {
        id: "vanguards-surcoat-divine-fervor",
        name: "Vanguard's Surcoat of Divine Fervor",
        description: "Vanguard chest with frenzy (Level 10+)",
        skills: [
          {
            id: "frenzy",
            name: "Frenzy",
            description:
              "Increases melee attack speed by 26% and melee attack damage by 7.6% for 10 seconds",
          },
        ],
      },
      {
        id: "hunters-jerkin-hidden-fang",
        name: "Hunter's Jerkin of the Hidden Fang",
        description: "Hunter chest with ambush (Level 10+)",
        skills: [
          {
            id: "ambush",
            name: "Ambush",
            description:
              "You meld into the environment. Become invisible to your enemies for 8 seconds or until you attack or cast another spell. Gain Ambush damage charges over time which will greatly empower your next attack",
          },
        ],
      },
      {
        id: "tricksters-doublet-whiplash",
        name: "Trickster's Doublet of the Whiplash",
        description: "Trickster chest with chrono ward (Level 20+)",
        skills: [
          {
            id: "chrono-ward",
            name: "Chrono Ward",
            description:
              "While active, any melee damage received will refresh all of your ability cooldowns. Can only activate once",
          },
        ],
      },
    ],
    legs: [
      {
        id: "pilgrims-pants",
        name: "Pilgrim's Pants",
        description: "Universal medium legs with balance restoration",
        skills: [
          {
            id: "breath-of-balance-medium-legs",
            name: "Breath of Balance",
            description: "Replenish 74 stamina of a non-hostile target",
          },
        ],
      },
      {
        id: "vanguards-breeches-holy-strikes",
        name: "Vanguard's Breeches of Holy Strikes",
        description: "Vanguard legs with sacrament of strife",
        skills: [
          {
            id: "sacrament-of-strife",
            name: "Sacrament of Strife",
            description:
              "Restore 30 health whenever you deal non-periodic melee damage to a target within 7 seconds. Effect can be activated up to 12 times",
          },
        ],
      },
      {
        id: "hunters-trousers-binding-roots",
        name: "Hunter's Trousers of Binding Roots",
        description: "Hunter legs with netfall (Level 10+)",
        skills: [
          {
            id: "netfall",
            name: "Netfall",
            description:
              "Throw a net forward that roots the first enemy hit for 10 seconds",
          },
        ],
      },
    ],
    boots: [
      {
        id: "pilgrims-marchers",
        name: "Pilgrim's Marchers",
        description: "Universal medium boots with joy enhancement",
        skills: [
          {
            id: "breath-of-joy-medium",
            name: "Breath of Joy",
            description:
              "Increases movement speed by 20% for 8 seconds. Sprinting does not consume stamina during the effect",
          },
        ],
      },
    ],
  },
};

// Export for use in main script
if (typeof module !== "undefined" && module.exports) {
  module.exports = EQUIPMENT_DATABASE;
} else {
  window.EQUIPMENT_DATABASE = EQUIPMENT_DATABASE;
}
