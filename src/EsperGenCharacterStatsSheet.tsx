import React from 'react'
import AttackTable from './Components/AttackTable'
import DeathSave from './Components/DeathSave'
import FeatureTable from './Components/FeatureTable'
import ResistancesTable from './Components/ResistancesTable'
import Skill from './Components/Skill'
import StatBox from './Components/StatBox'

// eslint-disable-next-line no-unused-vars
import EsperGenCharacter from './EsperGenCharacter'

import './espergenstyles.css'

interface IEsperGenCharacterStatsSheetProps {
  character?: EsperGenCharacter
  defaultCharacter?: EsperGenCharacter
  onCharacterChanged?: (
    character: EsperGenCharacter,
    changedField: string,
    newValue: any
  ) => void
}

interface IEsperGenCharacterStatsSheetState {
  character: EsperGenCharacter
}

const initialState: IEsperGenCharacterStatsSheetState = {
  character: {}
}

class EsperGenCharacterStatsSheet extends React.Component<
  IEsperGenCharacterStatsSheetProps,
  IEsperGenCharacterStatsSheetState
> {
  constructor(props: IEsperGenCharacterStatsSheetProps) {
    super(props)
    if (props.defaultCharacter) {
      initialState.character = props.defaultCharacter
    }
    this.state = initialState
  }

  updateCharacter(name: string, value: any) {
    const oldCharacter = this.getCharacter()
    const newCharacter: EsperGenCharacter = {}
    Object.assign(newCharacter, oldCharacter)
    newCharacter[name] = value

    if (!this.props.character) {
      // NOT CONTROLLED
      this.setState({ character: newCharacter })
    }

    if (typeof this.props.onCharacterChanged === 'function') {
      this.props.onCharacterChanged(newCharacter, name, value)
    }
  }

  getCharacter() {
    // NOT CONTROLLED
    let character = this.state.character
    if (this.props.character) {
      // CONTROLLED
      character = this.props.character
    }
    return character
  }

  render() {
    const character = this.getCharacter()

    return (
      <div className='espergen-character-sheet container-xl mt-5 mb-5'>
        <div>
          <div className='row mb-4'>
            <div className='col-md-5 order-md-2'>
              <div className='espergen-page-title text-md-right'>
                Esper Genesis
              </div>
              <div className='espergen-page-subtitle text-md-right'>
                Heroic Sci-Fi Roleplaying
              </div>

              <div className='row mt-2'>
                <div className='col-md-6'>
                  <label style={{ width: '100px' }}>Experience Points: </label>
                  <input
                    type='text'
                    style={{ width: 'calc(100% - 100px)' }}
                    className='espergen-linput'
                    value={character.xp ? character.xp : ''}
                    onChange={(e) => this.updateCharacter('xp', e.target.value)}
                  />
                </div>
                <div className='col-md-6'>
                  <label style={{ width: '70px' }}>Next Level: </label>
                  <input
                    type='text'
                    style={{ width: 'calc(100% - 70px)' }}
                    className='espergen-linput'
                    value={character.nextXp ? character.nextXp : ''}
                    onChange={(e) =>
                      this.updateCharacter('nextXp', e.target.value)
                    }
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-12'>
                  <label style={{ width: '60px' }}>Campaign: </label>
                  <input
                    type='text'
                    style={{ width: 'calc(100% - 60px)' }}
                    className='espergen-linput'
                    value={character.campaign ? character.campaign : ''}
                    onChange={(e) => this.updateCharacter('xp', e.target.value)}
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-12'>
                  <label style={{ width: '170px' }}>
                    Crucible Corps Serial Number:{' '}
                  </label>
                  <input
                    type='text'
                    style={{ width: 'calc(100% - 170px)' }}
                    className='espergen-linput'
                    value={
                      character.corpsSerialNumber
                        ? character.corpsSerialNumber
                        : ''
                    }
                    onChange={(e) =>
                      this.updateCharacter('corpsSerialNumber', e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
            <div className='col-md-7 order-md-1'>
              <div className='row'>
                <div className='col-md-3 text-center mt-3 mt-md-0'>
                  <div className='espergen-circle'>
                    <div className='espergen-circle-inner'>
                      <input
                        type='text'
                        value={character.level ? character.level : ''}
                        onChange={(e) =>
                          this.updateCharacter('level', e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className='upper1' style={{ fontSize: '20px' }}>
                    <span>L</span>evel
                  </div>
                </div>

                <div className='col-md-9'>
                  <div className='row mt-2'>
                    <div className='col-md-7 pl-md-1 pr-md-1'>
                      <label style={{ width: '40px' }}>Name: </label>
                      <input
                        type='text'
                        style={{ width: 'calc(100% - 40px)' }}
                        className='espergen-linput'
                        value={character.name ? character.name : ''}
                        onChange={(e) =>
                          this.updateCharacter('name', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-md-5 pl-md-1 pr-md-1'>
                      <label style={{ width: '45px' }}>Player: </label>
                      <input
                        type='text'
                        style={{ width: 'calc(100% - 45px)' }}
                        className='espergen-linput'
                        value={character.playerName ? character.playerName : ''}
                        onChange={(e) =>
                          this.updateCharacter('playerName', e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-12 pl-md-1 pr-md-1'>
                      <label style={{ width: '40px' }}>Class: </label>
                      <input
                        type='text'
                        style={{ width: 'calc(100% - 40px)' }}
                        className='espergen-linput'
                        value={character.class ? character.class : ''}
                        onChange={(e) =>
                          this.updateCharacter('class', e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6 pl-md-1 pr-md-1'>
                      <label style={{ width: '40px' }}>Race: </label>
                      <input
                        type='text'
                        style={{ width: 'calc(100% - 40px)' }}
                        className='espergen-linput'
                        value={character.race ? character.race : ''}
                        onChange={(e) =>
                          this.updateCharacter('race', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-md-6 pl-md-1 pr-md-1'>
                      <label style={{ width: '70px' }}>Background: </label>
                      <input
                        type='text'
                        style={{ width: 'calc(100% - 70px)' }}
                        className='espergen-linput'
                        value={character.background ? character.background : ''}
                        onChange={(e) =>
                          this.updateCharacter('background', e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-3 pl-md-1 pr-md-1'>
                      <label style={{ width: '45px' }}>Gender: </label>
                      <input
                        type='text'
                        style={{ width: 'calc(100% - 45px)' }}
                        className='espergen-linput'
                        value={character.gender ? character.gender : ''}
                        onChange={(e) =>
                          this.updateCharacter('gender', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-md-3 pl-md-1 pr-md-1'>
                      <label style={{ width: '30px' }}>Size: </label>
                      <input
                        type='text'
                        style={{ width: 'calc(100% - 30px)' }}
                        className='espergen-linput'
                        value={character.size ? character.size : ''}
                        onChange={(e) =>
                          this.updateCharacter('size', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-md-3 pl-md-1 pr-md-1'>
                      <label style={{ width: '45px' }}>Height: </label>
                      <input
                        type='text'
                        style={{ width: 'calc(100% - 45px)' }}
                        className='espergen-linput'
                        value={character.height ? character.height : ''}
                        onChange={(e) =>
                          this.updateCharacter('height', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-md-3 pl-md-1 pr-md-1'>
                      <label style={{ width: '45px' }}>Weight: </label>
                      <input
                        type='text'
                        style={{ width: 'calc(100% - 45px)' }}
                        className='espergen-linput'
                        value={character.weight ? character.weight : ''}
                        onChange={(e) =>
                          this.updateCharacter('weight', e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-2 pl-md-1 pr-md-1'>
                      <label style={{ width: '30px' }}>Age: </label>
                      <input
                        type='text'
                        style={{ width: 'calc(100% - 30px)' }}
                        className='espergen-linput'
                        value={character.age ? character.age : ''}
                        onChange={(e) =>
                          this.updateCharacter('age', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-md-3 pl-md-1 pr-md-1'>
                      <label style={{ width: '30px' }}>Hair: </label>
                      <input
                        type='text'
                        style={{ width: 'calc(100% - 30px)' }}
                        className='espergen-linput'
                        value={character.hair ? character.hair : ''}
                        onChange={(e) =>
                          this.updateCharacter('hair', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-md-3 pl-md-1 pr-md-1'>
                      <label style={{ width: '35px' }}>Eyes: </label>
                      <input
                        type='text'
                        style={{ width: 'calc(100% - 35px)' }}
                        className='espergen-linput'
                        value={character.eyes ? character.eyes : ''}
                        onChange={(e) =>
                          this.updateCharacter('eyes', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-md-4 pl-md-1 pr-md-1'>
                      <label style={{ width: '60px' }}>Alignment: </label>
                      <input
                        type='text'
                        style={{ width: 'calc(100% - 60px)' }}
                        className='espergen-linput'
                        value={character.alignment ? character.alignment : ''}
                        onChange={(e) =>
                          this.updateCharacter('alignment', e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-4'>
              <div className='upper1' style={{ fontSize: '20px' }}>
                <span>A</span>bilities
              </div>
              <label style={{ margin: '0 85px 5px 8px' }}>Score</label>
              <label style={{ margin: '0 20px 5px' }}>Modifier</label>
              <label style={{ margin: '0 30px 5px' }}>
                Saving
                <br />
                Throw
              </label>
              <StatBox
                abbreviation='STR'
                label='Strength'
                name='str'
                value={character.str}
                valueSave={character.strSave}
                onChange={(name: string, value: any) => {
                  this.updateCharacter(name, value)
                }}
              />
              <StatBox
                abbreviation='DEX'
                label='Dexterity'
                name='dex'
                value={character.dex}
                valueSave={character.dexSave}
                onChange={(name: string, value: any) => {
                  this.updateCharacter(name, value)
                }}
              />
              <StatBox
                abbreviation='CON'
                label='Constitution'
                name='con'
                value={character.con}
                valueSave={character.conSave}
                onChange={(name: string, value: any) => {
                  this.updateCharacter(name, value)
                }}
              />
              <StatBox
                abbreviation='INT'
                label='intelligence'
                name='int'
                value={character.int}
                valueSave={character.intSave}
                onChange={(name: string, value: any) => {
                  this.updateCharacter(name, value)
                }}
              />
              <StatBox
                abbreviation='WIS'
                label='Wisdom'
                name='wis'
                value={character.wis}
                valueSave={character.wisSave}
                onChange={(name: string, value: any) => {
                  this.updateCharacter(name, value)
                }}
              />
              <StatBox
                abbreviation='CHA'
                label='Charisma'
                name='cha'
                value={character.cha}
                valueSave={character.chaSave}
                onChange={(name: string, value: any) => {
                  this.updateCharacter(name, value)
                }}
              />

              <div className='upper1 mt-4' style={{ fontSize: '16px' }}>
                <span>S</span>enses
              </div>
              <div>
                <label
                  className='upper1'
                  style={{ fontSize: '16px', fontWeight: 'normal' }}
                >
                  <span>P</span>assive <span>P</span>erception
                </label>
                <input
                  type='text'
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '2px solid black',
                    margin: '0 10px 0 20px',
                    fontSize: '16px',
                    textAlign: 'center'
                  }}
                  className='espergen-linput'
                  value={
                    character.passivePerception
                      ? character.passivePerception
                      : ''
                  }
                  onChange={(e) =>
                    this.updateCharacter('passivePerception', e.target.value)
                  }
                />
                <label
                  style={{
                    textAlign: 'center',
                    verticalAlign: 'middle'
                  }}
                >
                  = 10 +
                  <br />
                  Perception
                  <br />
                  Skill
                </label>
              </div>
              <div>
                <textarea
                  className='espergen-linedtextarea'
                  value={character.senses ? character.senses : ''}
                  onChange={(e) =>
                    this.updateCharacter('senses', e.target.value)
                  }
                  rows={2}
                />
              </div>
            </div>

            <div className='col-md-4 pr-md-1 pl-md-1'>
              <div className='row mt-5'>
                <div className='col-md-7 pr-md-1 pl-md-1 text-center'>
                  <div>
                    <div
                      className='upper1'
                      style={{ fontSize: '16px', textAlign: 'center' }}
                    >
                      <span>B</span>urst <span>F</span>ire
                    </div>

                    <div className='mt-2'>
                      <label className='espergen-inline-label'>
                        Burst
                        <br />
                        DC
                      </label>
                      <div className='espergen-round-input'>
                        <input
                          type='text'
                          value={character.burstDc ? character.burstDc : ''}
                          onChange={(e) =>
                            this.updateCharacter('burstDc', e.target.value)
                          }
                        />
                      </div>
                      <label className='espergen-inline-label'>
                        Burst Save
                        <br />
                        Bonus
                      </label>
                      <div className='espergen-round-input'>
                        <input
                          type='text'
                          value={character.burstSave ? character.burstSave : ''}
                          onChange={(e) =>
                            this.updateCharacter('burstSave', e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <label className='text-center' style={{ fontSize: '9px' }}>
                    (DC = 8 + Proficiency Score + Dex Bonus)
                  </label>

                  <div>
                    <div
                      className='upper1 mt-3'
                      style={{ fontSize: '16px', textAlign: 'center' }}
                    >
                      <span>A</span>bility <span>S</span>ave <span>DC</span>
                    </div>

                    <div className='mt-2'>
                      <div className='espergen-inline-label'>
                        <label>8 + </label>
                        <input
                          type='text'
                          style={{
                            width: '24px',
                            margin: '0 5px 0 5px',
                            textAlign: 'center'
                          }}
                          className='espergen-linput'
                          value={
                            character.abilitySave1Mod
                              ? character.abilitySave1Mod
                              : ''
                          }
                          onChange={(e) =>
                            this.updateCharacter(
                              'abilitySave1Mod',
                              e.target.value
                            )
                          }
                        />
                        <br />
                        <label style={{ fontSize: '9px' }}>
                          + Prof
                          <br />
                          Bonus
                        </label>
                      </div>

                      <div
                        className='espergen-round-input'
                        style={{ marginBottom: '15px' }}
                      >
                        <input
                          type='text'
                          value={
                            character.abilitySave1Dc
                              ? character.abilitySave1Dc
                              : ''
                          }
                          onChange={(e) =>
                            this.updateCharacter(
                              'abilitySave1Dc',
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className='espergen-inline-label'>
                        <label>8 + </label>
                        <input
                          type='text'
                          style={{
                            width: '24px',
                            margin: '0 5px 0 5px',
                            textAlign: 'center'
                          }}
                          className='espergen-linput'
                          value={
                            character.abilitySave2Mod
                              ? character.abilitySave2Mod
                              : ''
                          }
                          onChange={(e) =>
                            this.updateCharacter(
                              'abilitySave2Mod',
                              e.target.value
                            )
                          }
                        />
                        <br />
                        <label style={{ fontSize: '9px' }}>
                          + Prof
                          <br />
                          Bonus
                        </label>
                      </div>

                      <div
                        className='espergen-round-input'
                        style={{ marginBottom: '15px' }}
                      >
                        <input
                          type='text'
                          value={
                            character.abilitySave2Dc
                              ? character.abilitySave2Dc
                              : ''
                          }
                          onChange={(e) =>
                            this.updateCharacter(
                              'abilitySave2Dc',
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-5'>
                  <div className='espergen-circle solid'>
                    <div className='espergen-circle-inner'>
                      <input
                        type='text'
                        style={{ padding: '13px' }}
                        value={
                          character.proficiencyBonus
                            ? character.proficiencyBonus
                            : ''
                        }
                        onChange={(e) =>
                          this.updateCharacter(
                            'proficiencyBonus',
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div
                    className='upper1'
                    style={{
                      fontSize: '16px',
                      textAlign: 'center',
                      lineHeight: '24px',
                      marginTop: '10px'
                    }}
                  >
                    <span>P</span>roficiency
                    <br />
                    <span>B</span>onus
                  </div>

                  <hr className='espergen-seperator' />
                  <div>
                    <input
                      type='text'
                      style={{
                        width: '24px',
                        height: '24px',
                        border: '1px solid black',
                        margin: '0 10px 0 10px',
                        fontSize: '12px',
                        textAlign: 'center'
                      }}
                      className='espergen-linput'
                      value={character.inspiration ? character.inspiration : ''}
                      onChange={(e) =>
                        this.updateCharacter('inspiration', e.target.value)
                      }
                    />
                    <label
                      className='upper1'
                      style={{
                        fontSize: '12px',
                        fontWeight: 'normal',
                        margin: '0',
                        verticalAlign: 'bottom'
                      }}
                    >
                      <span>I</span>inspiration
                    </label>
                  </div>
                  <hr className='espergen-seperator' />
                </div>
              </div>

              <label className='text-center w-100 mt-2 mb-0'>
                <strong>Saving Throw Advantages/Disadvantages</strong>
              </label>
              <textarea
                className='espergen-linedtextarea'
                value={
                  character.savingThrowAdvs ? character.savingThrowAdvs : ''
                }
                onChange={(e) =>
                  this.updateCharacter('savingThrowAdvs', e.target.value)
                }
                rows={2}
              />

              <div className='upper1 mt-2 mb-1' style={{ fontSize: '16px' }}>
                <span>S</span>pecial <span>F</span>eatures
              </div>
              <FeatureTable
                rows={6}
                name='specialFeatures'
                value={character.specialFeatures}
                onChange={(name: string, value: any) => {
                  this.updateCharacter(name, value)
                }}
              />
            </div>

            <div className='col-md-4'>
              <div className='upper1 mb-2' style={{ fontSize: '20px' }}>
                <span>S</span>kills
              </div>
              <label style={{ margin: '0 0px 5px 8px' }}>Bonus</label>
              <label style={{ margin: '0 0px 5px 18px' }}>Skill Name</label>
              <label style={{ margin: '0 5px 5px 0px', float: 'right' }}>
                Proficient
              </label>
              <div className='espergen-skilllist'>
                <Skill
                  label='Acrobatics'
                  hint='(Dex)'
                  name='skillAcrobatics'
                  value={character.skillAcrobatics}
                  checked={character.skillAcrobaticsChecked}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <Skill
                  label='Astrophysics'
                  hint='(Int)'
                  name='skillAstrophysics'
                  value={character.skillAstrophysics}
                  checked={character.skillAstrophysicsChecked}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <Skill
                  label='Athletics'
                  hint='(Str)'
                  name='skillAthletics'
                  value={character.skillAthletics}
                  checked={character.skillAthleticsChecked}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <Skill
                  label='Computers'
                  hint='(Int)'
                  name='skillComputers'
                  value={character.skillComputers}
                  checked={character.skillComputersChecked}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <Skill
                  label='Deception'
                  hint='(Cha)'
                  name='skillDeception'
                  value={character.skillDeception}
                  checked={character.skillDeceptionChecked}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <Skill
                  label='Insight'
                  hint='(Wis)'
                  name='skillInsight'
                  value={character.skillInsight}
                  checked={character.skillInsightChecked}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <Skill
                  label='Intimidation'
                  hint='(Cha)'
                  name='skillIntimidation'
                  value={character.skillIntimidation}
                  checked={character.skillIntimidationChecked}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <Skill
                  label='Investigation'
                  hint='(Int)'
                  name='skillInvestigation'
                  value={character.skillInvestigation}
                  checked={character.skillInvestigationChecked}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <Skill
                  label='Lore'
                  hint='(Int)'
                  name='skillLore'
                  value={character.skillLore}
                  checked={character.skillLoreChecked}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <Skill
                  label='Mechanics'
                  hint='(Wis)'
                  name='skillMechanics'
                  value={character.skillMechanics}
                  checked={character.skillMechanicsChecked}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <Skill
                  label='Medicine'
                  hint='(Wis)'
                  name='skillMedicine'
                  value={character.skillMedicine}
                  checked={character.skillMedicineChecked}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <Skill
                  label='Perception'
                  hint='(Wis)'
                  name='skillPerception'
                  value={character.skillPerception}
                  checked={character.skillPerceptionChecked}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <Skill
                  label='Performance'
                  hint='(Cha)'
                  name='skillPerformance'
                  value={character.skillPerformance}
                  checked={character.skillPerformanceChecked}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <Skill
                  label='Persuasion'
                  hint='(Cha)'
                  name='skillPersuasion'
                  value={character.skillPersuasion}
                  checked={character.skillPersuasionChecked}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <Skill
                  label='Slight of Hand'
                  hint='(Dex)'
                  name='skillSlightOfHand'
                  value={character.skillSlightOfHand}
                  checked={character.skillSlightOfHandChecked}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <Skill
                  label='Stealth'
                  hint='(Dex)'
                  name='skillStealth'
                  value={character.skillStealth}
                  checked={character.skillStealthChecked}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <Skill
                  label='Survival'
                  hint='(Wis)'
                  name='skillSurvival'
                  value={character.skillSurvival}
                  checked={character.skillSurvivalChecked}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <Skill
                  label='Xenobiology'
                  hint='(Int)'
                  name='skillXenobiology'
                  value={character.skillXenobiology}
                  checked={character.skillXenobiologyChecked}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
              </div>
            </div>
          </div>

          <hr className='espergen-page-break mt-2' />
          <hr className='espergen-page-break mb-2' />

          <div className='row'>
            <div className='col-md-6'>
              <div className='mb-2'>
                <div
                  className='upper1'
                  style={{
                    fontSize: '20px',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginBottom: '5px'
                  }}
                >
                  <span>C</span>ombat
                </div>
                <div className='espergen-round-input large ml-4 mr-2'>
                  <input
                    type='text'
                    value={character.init ? character.init : ''}
                    onChange={(e) =>
                      this.updateCharacter('init', e.target.value)
                    }
                  />
                </div>
                <div
                  className='upper1 mr-2'
                  style={{
                    fontSize: '16px',
                    fontWeight: 'normal',
                    display: 'inline-block',
                    verticalAlign: 'middle'
                  }}
                >
                  <span>I</span>nitiative
                </div>
                <div className='ml-3 mr-0' style={{ display: 'inline-block' }}>
                  <label
                    className='mb-0 text-center w-100'
                    style={{ fontSize: '8px' }}
                  >
                    Dex
                  </label>
                  <br />
                  <input
                    type='text'
                    className='espergen-binput'
                    value={character.initDex ? character.initDex : ''}
                    onChange={(e) =>
                      this.updateCharacter('initDex', e.target.value)
                    }
                  />
                </div>
                +
                <div className='ml-0 mr-2' style={{ display: 'inline-block' }}>
                  <label
                    className='mb-0 text-center w-100'
                    style={{ fontSize: '8px' }}
                  >
                    Misc
                  </label>
                  <br />
                  <input
                    type='text'
                    className='espergen-binput'
                    value={character.initMisc ? character.initMisc : ''}
                    onChange={(e) =>
                      this.updateCharacter('initMisc', e.target.value)
                    }
                  />
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    width: '1px',
                    verticalAlign: 'middle',
                    height: '40px',
                    backgroundColor: 'black'
                  }}
                />
                <div className='ml-2 mr-2' style={{ display: 'inline-block' }}>
                  <label
                    className='mb-0 text-center w-100'
                    style={{ fontSize: '8px' }}
                  >
                    Base Speed
                  </label>
                  <br />
                  <input
                    type='text'
                    style={{ height: '36px', width: '50px' }}
                    className='espergen-binput'
                    value={character.speed ? character.speed : ''}
                    onChange={(e) =>
                      this.updateCharacter('speed', e.target.value)
                    }
                  />
                </div>
                <div className='ml-2' style={{ display: 'inline-block' }}>
                  <label
                    className='mb-0 text-center w-100'
                    style={{ fontSize: '8px' }}
                  >
                    Encumbered
                  </label>
                  <br />
                  <input
                    type='text'
                    style={{ height: '36px', width: '50px' }}
                    className='espergen-binput'
                    value={character.encumbered ? character.encumbered : ''}
                    onChange={(e) =>
                      this.updateCharacter('encumbered', e.target.value)
                    }
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-4 pd-md-0'>
                  <div
                    className='upper1 mb-3'
                    style={{
                      fontSize: '16px',
                      display: 'inline-block',
                      verticalAlign: 'middle'
                    }}
                  >
                    <span>A</span>rmour <span>C</span>lass
                  </div>

                  <div className='espergen-hex'>
                    <div className='espergen-circle-inner'>
                      <input
                        type='text'
                        value={character.ac ? character.ac : ''}
                        onChange={(e) =>
                          this.updateCharacter('ac', e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-8 pl-md-0 mt-5 mt-md-0'>
                  <div className='mt-2'>
                    <input
                      type='text'
                      className='espergen-binput'
                      value={character.acBonus ? character.acBonus : ''}
                      onChange={(e) =>
                        this.updateCharacter('acBonus', e.target.value)
                      }
                    />
                    <label
                      className='mb-0 text-center'
                      style={{
                        width: '60px',
                        fontSize: '8px',
                        verticalAlign: 'middle'
                      }}
                    >
                      Armour
                      <br />
                      Bonus
                    </label>
                    <input
                      type='text'
                      style={{ width: 'calc(100% - 84px' }}
                      className='espergen-binput'
                      value={character.acBonusText ? character.acBonusText : ''}
                      onChange={(e) =>
                        this.updateCharacter('acBonusText', e.target.value)
                      }
                    />
                  </div>
                  <span className='ml-2' style={{}}>
                    +
                  </span>
                  <div>
                    <input
                      type='text'
                      className='espergen-binput'
                      value={
                        character.acShieldBonus ? character.acShieldBonus : ''
                      }
                      onChange={(e) =>
                        this.updateCharacter('acShieldBonus', e.target.value)
                      }
                    />
                    <label
                      className='mb-0 text-center'
                      style={{
                        width: '60px',
                        fontSize: '8px',
                        verticalAlign: 'middle'
                      }}
                    >
                      Shield
                      <br />
                      Bonus
                    </label>
                    <input
                      type='text'
                      style={{ width: 'calc(100% - 84px' }}
                      className='espergen-binput'
                      value={
                        character.acShieldBonusText
                          ? character.acShieldBonusText
                          : ''
                      }
                      onChange={(e) =>
                        this.updateCharacter(
                          'acShieldBonusText',
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <span className='ml-2' style={{}}>
                    +
                  </span>
                  <div>
                    <input
                      type='text'
                      className='espergen-binput'
                      value={character.acDexMod ? character.acDexMod : ''}
                      onChange={(e) =>
                        this.updateCharacter('acDexMod', e.target.value)
                      }
                    />
                    <label
                      className='mb-0 text-center'
                      style={{
                        width: '60px',
                        fontSize: '8px',
                        verticalAlign: 'middle'
                      }}
                    >
                      Dexterity
                      <br />
                      Modifier
                    </label>

                    <div
                      style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        lineHeight: '12px'
                      }}
                    >
                      <input
                        type='text'
                        className='espergen-binput'
                        style={{
                          height: '12px',
                          width: '12px',
                          fontSize: '7px'
                        }}
                        value={
                          character.acMediumArmour
                            ? character.acMediumArmour
                            : ''
                        }
                        onChange={(e) =>
                          this.updateCharacter('acMediumArmour', e.target.value)
                        }
                      />
                      <label
                        className='mb-0 ml-1 mr-3'
                        style={{
                          fontSize: '8px',
                          verticalAlign: 'middle'
                        }}
                      >
                        Medium Armour (Max Bonus + 2)
                      </label>

                      <br />

                      <input
                        type='text'
                        className='espergen-binput'
                        style={{
                          height: '12px',
                          width: '12px',
                          fontSize: '7px'
                        }}
                        value={
                          character.acHeavyArmour ? character.acHeavyArmour : ''
                        }
                        onChange={(e) =>
                          this.updateCharacter('acHeavyArmour', e.target.value)
                        }
                      />
                      <label
                        className='mb-0 ml-1 mr-3'
                        style={{
                          fontSize: '8px',
                          verticalAlign: 'middle'
                        }}
                      >
                        Heavy Armour (No Dex Bonus)
                      </label>
                    </div>
                    <input
                      type='text'
                      className='espergen-binput'
                      style={{
                        height: '12px',
                        width: '12px',
                        fontSize: '8px'
                      }}
                      value={
                        character.acStealthDisAdv
                          ? character.acStealthDisAdv
                          : ''
                      }
                      onChange={(e) =>
                        this.updateCharacter('acStealthDisAdv', e.target.value)
                      }
                    />
                    <label
                      className='mb-0 ml-1 mr-2'
                      style={{
                        fontSize: '7px',
                        verticalAlign: 'middle'
                      }}
                    >
                      Stealth
                      <br />
                      Disadv
                    </label>
                  </div>
                  <span className='ml-2' style={{}}>
                    +
                  </span>
                  <div>
                    <input
                      type='text'
                      className='espergen-binput'
                      value={
                        character.acPowerModifier
                          ? character.acPowerModifier
                          : ''
                      }
                      onChange={(e) =>
                        this.updateCharacter('acPowerModifier', e.target.value)
                      }
                    />
                    <label
                      className='mb-0 text-center'
                      style={{
                        width: '60px',
                        fontSize: '8px',
                        verticalAlign: 'middle'
                      }}
                    >
                      Power
                      <br />
                      Modifier
                    </label>
                    <input
                      type='text'
                      style={{ width: 'calc(100% - 84px' }}
                      className='espergen-binput'
                      value={
                        character.acPowerModifierText
                          ? character.acPowerModifierText
                          : ''
                      }
                      onChange={(e) =>
                        this.updateCharacter(
                          'acPowerModifierText',
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <span className='ml-2' style={{}}>
                    +
                  </span>
                  <div>
                    <input
                      type='text'
                      className='espergen-binput'
                      value={
                        character.acItemModifier ? character.acItemModifier : ''
                      }
                      onChange={(e) =>
                        this.updateCharacter('acItemModifier', e.target.value)
                      }
                    />
                    <label
                      className='mb-0 text-center'
                      style={{
                        width: '60px',
                        fontSize: '8px',
                        verticalAlign: 'middle'
                      }}
                    >
                      Item
                      <br />
                      Modifier
                    </label>
                    <input
                      type='text'
                      style={{ width: 'calc(100% - 84px' }}
                      className='espergen-binput'
                      value={
                        character.acItemModifierText
                          ? character.acItemModifierText
                          : ''
                      }
                      onChange={(e) =>
                        this.updateCharacter(
                          'acItemModifierText',
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <span className='ml-2' style={{}}>
                    +
                  </span>
                  <div>
                    <input
                      type='text'
                      className='espergen-binput'
                      value={character.acMiscBonus ? character.acMiscBonus : ''}
                      onChange={(e) =>
                        this.updateCharacter('acMiscBonus', e.target.value)
                      }
                    />
                    <label
                      className='mb-0 text-center'
                      style={{
                        width: '60px',
                        fontSize: '8px',
                        verticalAlign: 'middle'
                      }}
                    >
                      Misc/Mod
                      <br />
                      Bonus
                    </label>
                    <input
                      type='text'
                      style={{ width: 'calc(100% - 84px' }}
                      className='espergen-binput'
                      value={
                        character.acMiscBonusText
                          ? character.acMiscBonusText
                          : ''
                      }
                      onChange={(e) =>
                        this.updateCharacter('acMiscBonusText', e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>

              <div className='mt-3'>
                <div
                  className='upper1 mb-2'
                  style={{
                    fontSize: '16px',
                    display: 'inline-block',
                    verticalAlign: 'middle'
                  }}
                >
                  <span>A</span>ttacks
                </div>

                <div className='float-right'>
                  <div
                    className='upper1 mb-1'
                    style={{
                      fontWeight: 'normal',
                      fontSize: '10px',
                      display: 'inline-block',
                      verticalAlign: 'middle'
                    }}
                  >
                    # of <span>A</span>ttacks per <span>A</span>ction
                  </div>
                  <div className='espergen-round-input large ml-2 mr-2'>
                    <input
                      type='text'
                      value={
                        character.attacksPerAction
                          ? character.attacksPerAction
                          : ''
                      }
                      onChange={(e) =>
                        this.updateCharacter('attacksPerAction', e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
              <AttackTable
                rows={5}
                name='attacks'
                value={character.attacks}
                onChange={(name: string, value: any) => {
                  this.updateCharacter(name, value)
                }}
              />
            </div>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-md-5 pr-md-0'>
                  <div
                    className='upper1 mb-2'
                    style={{
                      fontSize: '16px',
                      display: 'inline-block',
                      verticalAlign: 'middle'
                    }}
                  >
                    <span>H</span>it <span>P</span>oints
                  </div>
                  <div
                    className='espergen-circle'
                    style={{
                      width: '150px',
                      borderColor: '#d4af37',
                      borderStyle: 'double'
                    }}
                  >
                    <div className='espergen-circle-inner'>
                      <input
                        type='text'
                        value={character.maxHp ? character.maxHp : ''}
                        onChange={(e) =>
                          this.updateCharacter('maxHp', e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <label
                    className='text-center w-100 mb-0'
                    style={{ fontSize: '16px' }}
                  >
                    <b>Max HP</b>
                  </label>
                </div>
                <div className='col-md-7 pl-md-0'>
                  <div className='espergen-box mt-3'>
                    <div
                      style={{
                        display: 'inline-block',
                        verticalAlign: 'top'
                      }}
                    >
                      <input
                        type='text'
                        style={{ height: '36px', width: '70px' }}
                        className='espergen-binput'
                        value={character.tempHp ? character.tempHp : ''}
                        onChange={(e) =>
                          this.updateCharacter('tempHp', e.target.value)
                        }
                      />
                      <br />
                      <label className='text-center' style={{ width: '70px' }}>
                        Temporary
                        <br />
                        HP
                      </label>
                    </div>
                    <div
                      style={{
                        display: 'inline-block',
                        width: 'calc(100% - 70px)',
                        padding: '0 10px'
                      }}
                    >
                      <label className='w-100 text-right mb-0'>Wounds</label>
                      <textarea
                        value={character.wounds ? character.wounds : ''}
                        onChange={(e) =>
                          this.updateCharacter('wounds', e.target.value)
                        }
                        rows={7}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-4 pd-md-1 text-center'>
                  <div
                    className='upper1 mt-4'
                    style={{
                      fontWeight: 'normal',
                      fontSize: '8px'
                    }}
                  >
                    <span>R</span>esistances <span>(H</span>alf <span>D</span>
                    amage<span>)</span>
                  </div>
                  <hr
                    className='espergen-seperator'
                    style={{ height: '0px', marginTop: '0px' }}
                  />
                  <ResistancesTable
                    rows={3}
                    name='resistances'
                    value={character.resistances}
                    onChange={(name: string, value: any) => {
                      this.updateCharacter(name, value)
                    }}
                  />
                </div>
                <div className='col-md-4 pd-md-1 pl-md-1 text-center'>
                  <div
                    className='upper1 mt-1'
                    style={{
                      fontSize: '11px'
                    }}
                  >
                    <span>H</span>it <span>D</span>ice
                  </div>
                  <hr
                    className='espergen-seperator'
                    style={{ height: '0px', margin: '0px' }}
                  />
                  <div>
                    <label
                      className='mb-0'
                      style={{ fontSize: '8px', marginRight: '13px' }}
                    >
                      Level
                    </label>
                    <label
                      className='mb-0'
                      style={{ fontSize: '8px', marginRight: '12px' }}
                    >
                      Die Type
                    </label>
                    <label
                      className='mb-0'
                      style={{ fontSize: '8px', marginRight: '17px' }}
                    >
                      Con
                    </label>
                    <label className='mb-0' style={{ fontSize: '8px' }}>
                      # Used
                    </label>
                  </div>
                  <div className='espergen-box gray' style={{ padding: '2px' }}>
                    <div className='mb-1'>
                      <input
                        type='text'
                        className='espergen-binput mr-1'
                        value={
                          character.hitDice1Lvl ? character.hitDice1Lvl : ''
                        }
                        onChange={(e) =>
                          this.updateCharacter('hitDice1Lvl', e.target.value)
                        }
                      />
                      x
                      <input
                        type='text'
                        className='espergen-binput mx-1'
                        value={
                          character.hitDice1Type ? character.hitDice1Type : ''
                        }
                        onChange={(e) =>
                          this.updateCharacter('hitDice1Type', e.target.value)
                        }
                      />
                      +
                      <input
                        type='text'
                        className='espergen-binput ml-1 mr-2'
                        value={
                          character.hitDice1Con ? character.hitDice1Con : ''
                        }
                        onChange={(e) =>
                          this.updateCharacter('hitDice1Con', e.target.value)
                        }
                      />
                      <input
                        type='text'
                        className='espergen-binput ml-2'
                        value={
                          character.hitDice1Used ? character.hitDice1Used : ''
                        }
                        onChange={(e) =>
                          this.updateCharacter('hitDice1Used', e.target.value)
                        }
                      />
                    </div>

                    <div className='mb-1'>
                      <input
                        type='text'
                        className='espergen-binput mr-1'
                        value={
                          character.hitDice2Lvl ? character.hitDice2Lvl : ''
                        }
                        onChange={(e) =>
                          this.updateCharacter('hitDice2Lvl', e.target.value)
                        }
                      />
                      x
                      <input
                        type='text'
                        className='espergen-binput mx-1'
                        value={
                          character.hitDice2Type ? character.hitDice2Type : ''
                        }
                        onChange={(e) =>
                          this.updateCharacter('hitDice2Type', e.target.value)
                        }
                      />
                      +
                      <input
                        type='text'
                        className='espergen-binput ml-1 mr-2'
                        value={
                          character.hitDice2Con ? character.hitDice2Con : ''
                        }
                        onChange={(e) =>
                          this.updateCharacter('hitDice2Con', e.target.value)
                        }
                      />
                      <input
                        type='text'
                        className='espergen-binput ml-2'
                        value={
                          character.hitDice2Used ? character.hitDice2Used : ''
                        }
                        onChange={(e) =>
                          this.updateCharacter('hitDice2Used', e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <input
                        type='text'
                        className='espergen-binput mr-1'
                        value={
                          character.hitDice3Lvl ? character.hitDice3Lvl : ''
                        }
                        onChange={(e) =>
                          this.updateCharacter('hitDice3Lvl', e.target.value)
                        }
                      />
                      x
                      <input
                        type='text'
                        className='espergen-binput mx-1'
                        value={
                          character.hitDice3Type ? character.hitDice3Type : ''
                        }
                        onChange={(e) =>
                          this.updateCharacter('hitDice3Type', e.target.value)
                        }
                      />
                      +
                      <input
                        type='text'
                        className='espergen-binput ml-1 mr-2'
                        value={
                          character.hitDice3Con ? character.hitDice3Con : ''
                        }
                        onChange={(e) =>
                          this.updateCharacter('hitDice3Con', e.target.value)
                        }
                      />
                      <input
                        type='text'
                        className='espergen-binput ml-2'
                        value={
                          character.hitDice3Used ? character.hitDice3Used : ''
                        }
                        onChange={(e) =>
                          this.updateCharacter('hitDice3Used', e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <label
                    className='w-100 text-center mb-1'
                    style={{ fontSize: '8px' }}
                  >
                    1/2 max HD after Long Rest
                  </label>
                </div>
                <div className='col-md-4 pl-md-4'>
                  <DeathSave
                    classes='d-and-d-save-success'
                    label=''
                    name='deathsave'
                    valueSuccess={character.deathsaveSuccesses}
                    valueFailure={character.deathsaveFailures}
                    onChange={(name: string, value: any) => {
                      this.updateCharacter(name, value)
                    }}
                  />
                  <div className='mt-4'>
                    <label className='text-center' style={{ width: '75px' }}>
                      Death Saves
                      <br />
                      (DC 10)
                    </label>
                  </div>
                </div>
              </div>

              <div className='mt-0' style={{ paddingTop: '3px' }}>
                <div
                  className='upper1 mb-2'
                  style={{
                    fontSize: '16px',
                    display: 'inline-block',
                    verticalAlign: 'middle'
                  }}
                >
                  <span>A</span>ctions
                </div>

                <div className='float-right mt-2 pt-1'>
                  <label className='upper1' style={{ fontWeight: 'normal' }}>
                    (1 Action, 1 Bonus Action, and 1 Reaction per Turn)
                  </label>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 pr-md-1'>
                  <label className='mb-0'>Base Actions</label>
                  <div
                    className='espergen-box'
                    style={{ paddingBottom: '6px' }}
                  >
                    <textarea
                      value={character.actions ? character.actions : ''}
                      onChange={(e) =>
                        this.updateCharacter('actions', e.target.value)
                      }
                      rows={12}
                    />
                  </div>
                </div>
                <div className='col-md-6 pl-md-1'>
                  <label className='mb-0'>Bonus Actions</label>
                  <div className='espergen-box'>
                    <textarea
                      value={
                        character.bonusActions ? character.bonusActions : ''
                      }
                      onChange={(e) =>
                        this.updateCharacter('bonusActions', e.target.value)
                      }
                      rows={5}
                    />
                  </div>

                  <label className='mb-0'>Reactions</label>
                  <div className='espergen-box'>
                    <textarea
                      value={character.reactions ? character.reactions : ''}
                      onChange={(e) =>
                        this.updateCharacter('reactions', e.target.value)
                      }
                      rows={5}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EsperGenCharacterStatsSheet
