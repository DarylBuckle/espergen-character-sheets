export default class EsperGenCharacter {
  name?: string
  level?: string
  class?: string
  playerName?: string
  race?: string
  background?: string

  xp?: string
  nextXp?: string
  campaign?: string
  corpsSerialNumber?: string

  gender?: string
  size?: string
  age?: string
  height?: string
  weight?: string
  eyes?: string
  skin?: string
  hair?: string
  alignment?: string

  str?: string
  dex?: string
  con?: string
  int?: string
  wis?: string
  cha?: string

  inspiration?: string
  proficiencyBonus?: string

  strSave?: string
  dexSave?: string
  conSave?: string
  intSave?: string
  wisSave?: string
  chaSave?: string

  skillAcrobatics?: string
  skillAcrobaticsChecked?: boolean
  skillAstrophysics?: string
  skillAstrophysicsChecked?: boolean
  skillAthletics?: string
  skillAthleticsChecked?: boolean
  skillComputers?: string
  skillComputersChecked?: boolean
  skillDeception?: string
  skillDeceptionChecked?: boolean
  skillInsight?: string
  skillInsightChecked?: boolean
  skillIntimidation?: string
  skillIntimidationChecked?: boolean
  skillInvestigation?: string
  skillInvestigationChecked?: boolean
  skillLore?: string
  skillLoreChecked?: boolean
  skillMechanics?: string
  skillMechanicsChecked?: boolean
  skillMedicine?: string
  skillMedicineChecked?: boolean
  skillPerception?: string
  skillPerceptionChecked?: boolean
  skillPerformance?: string
  skillPerformanceChecked?: boolean
  skillPersuasion?: string
  skillPersuasionChecked?: boolean
  skillSlightOfHand?: string
  skillSlightOfHandChecked?: boolean
  skillStealth?: string
  skillStealthChecked?: boolean
  skillSurvival?: string
  skillSurvivalChecked?: boolean
  skillXenobiology?: string
  skillXenobiologyChecked?: boolean

  passivePerception?: string
  senses?: string

  burstDc?: string
  burstSave?: string
  abilitySave1Mod?: string
  abilitySave1Dc?: string
  abilitySave2Mod?: string
  abilitySave2Dc?: string
  savingThrowAdvs?: string
  specialFeatures?: any

  init?: string
  initDex?: string
  initMisc?: string
  speed?: string
  encumbered?: string

  ac?: string
  acBonus?: string
  acBonusText?: string
  acShieldBonus?: string
  acShieldBonusText?: string
  acDexMod?: string
  acMediumArmour?: string
  acHeavyArmour?: string
  acStealthDisAdv?: string
  acPowerModifier?: string
  acPowerModifierText?: string
  acItemModifier?: string
  acItemModifierText?: string
  acMiscBonus?: string
  acMiscBonusText?: string

  maxHp?: string
  wounds?: string
  tempHp?: string

  resistances?: string

  hitDice1Lvl?: string
  hitDice1Type?: string
  hitDice1Con?: string
  hitDice1Used?: string

  hitDice2Lvl?: string
  hitDice2Type?: string
  hitDice2Con?: string
  hitDice2Used?: string

  hitDice3Lvl?: string
  hitDice3Type?: string
  hitDice3Con?: string
  hitDice3Used?: string

  deathsaveSuccesses?: number
  deathsaveFailures?: number

  attacks?: any[]
  attacksPerAction?: string

  actions?: string
  bonusActions?: string
  reactions?: string

  racialFeatures?: string
  classFeatures?: string
  backgroundFeature?: string

  personalityTraits?: string
  ideals?: string
  bonds?: string
  flaws?: string

  feat1?: string
  feat2?: string
  feat3?: string
  feat4?: string

  profArmourLight?: boolean
  profArmourMedium?: boolean
  profArmourHeavy?: boolean
  profArmourShield?: boolean
  profWeaponSimple?: boolean
  profWeaponMartial?: boolean
  profWeaponOther?: boolean
  profWeaponOtherText?: string

  language1?: string
  language2?: string
  language3?: string
  language4?: string
  language5?: string
  language6?: string

  tool1?: string
  tool2?: string
  tool3?: string
  tool4?: string
  tool5?: string
  tool6?: string

  cu?: string
  lifestyle?: string
  dailyExpenses?: string

  gear1?: any
  gear2?: any
  otherValuables?: any
  vehicles?: any

  totalWeight?: string
  heavyEncumbered?: string
  pushLift?: string

  forgingAbility?: string

  esperAttackModifier?: string
  esperPowerDc?: string

  maxTp?: string
  remainingTp?: string

  techniquesPrepared?: string
  techniqueSlots?: any
  techniqueSlotsUsed?: any

  primeTalents?: any[]

  lvl1TalentSlotsTotal?: string
  lvl1TalentSlotsUsed?: number
  lvl1Talents?: any[]

  lvl2TalentSlotsTotal?: string
  lvl2TalentSlotsUsed?: number
  lvl2Talents?: any[]

  lvl3TalentSlotsTotal?: string
  lvl3TalentSlotsUsed?: number
  lvl3Talents?: any[]

  lvl4TalentSlotsTotal?: string
  lvl4TalentSlotsUsed?: number
  lvl4Talents?: any[]

  lvl5TalentSlotsTotal?: string
  lvl5TalentSlotsUsed?: number
  lvl5Talents?: any[]

  lvl6TalentSlotsTotal?: string
  lvl6TalentSlotsUsed?: number
  lvl6Talents?: any[]

  lvl7TalentSlotsTotal?: string
  lvl7TalentSlotsUsed?: number
  lvl7Talents?: any[]

  lvl8TalentSlotsTotal?: string
  lvl8TalentSlotsUsed?: number
  lvl8Talents?: any[]

  lvl9TalentSlotsTotal?: string
  lvl9TalentSlotsUsed?: number
  lvl9Talents?: any[]
}
