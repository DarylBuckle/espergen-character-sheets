# espergen-character-sheets

> Esper Genesis 5th Edition character sheets created in ReactJS.

[https://darylbuckle.github.io/espergen-character-sheets](https://darylbuckle.github.io/espergen-character-sheets)

[![NPM](https://img.shields.io/npm/v/espergen-character-sheets.svg)](https://www.npmjs.com/package/espergen-character-sheets) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<img width="600" alt="espergen-character-sheets-thumb" src="https://user-images.githubusercontent.com/15156674/93252342-3d5a5100-f78d-11ea-9987-8ae497cd846e.png">


## Contents

* [About](#about)
* [Install](#install)
* [Usage](#usage)
* [Props](#props)
* [EsperGenCharacter Class](#espergencharacter-class)
* [License](#license)


## About

ReactJS components that render Esper Genesis character sheets, namely a character stats sheet, character traits sheet and esper talents sheet.

Visit [https://darylbuckle.github.io/espergen-character-sheets](https://darylbuckle.github.io/espergen-character-sheets) to see these components in use.

The attributes in the example can be populated on the web page and outputs to print nicely, so you can populate some attributes on the page and print the sheet. Characters can also be exported to a json file and imported from a json file.


## Install

```bash
npm install --save espergen-character-sheets
```

## Usage

```tsx
import React, { Component } from 'react'

import EsperGenCharacterStatsSheet from 'espergen-character-sheets'
import 'espergen-character-sheets/dist/index.css'

class Example extends Component {
  render() {
    return <EsperGenCharacterStatsSheet />
  }
}
```

```EsperGenCharacterStatsSheet``` renders a stats sheet.

```EsperGenCharacterTraitsSheet``` renders a character traits sheet.

```EsperGenCharacterTalentsSheet``` renders a esper talents sheet.


## Props

Each component accepts the same props.

Each component can be controlled or uncontrolled. Either character and onCharacterChanged should be specified (controlled), or defaultCharacter should be specified.

| Property | Type | Description |
| -------- |------| ------------|
| defaultCharacter | EsperGenCharacter  | An instance of the EsperGenCharacter class. If character is not set the sheet will initialize with the values specified here. |
| character | EsperGenCharacter  | An instance of the EsperGenCharacter class. If set the sheet will always use the values specified here. |
| updateCharacter | func (character: EsperGenCharacter)  | Called whenever a value in a sheet is changed. A modified EsperGenCharacter object is returned. |


## EsperGenCharacter Class

The EsperGenCharacter class holds the attributes of a character. The attributes are shown below.

```tsx
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
```


## License

MIT © [Daryl Buckle](https://github.com/DarylBuckle) 2020
