import React from 'react'
import FeatureTable from './Components/FeatureTable'
import Skill from './Components/Skill'
import StatBox from './Components/StatBox'

// eslint-disable-next-line no-unused-vars
import EsperGenCharacter from './EsperGenCharacter'

// import Statbox from './Components/StatBox'

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
                value={
                  character.savingThrowAdvs ? character.savingThrowAdvs : ''
                }
                onChange={(e) =>
                  this.updateCharacter('savingThrowAdvs', e.target.value)
                }
                rows={2}
              />

              <div className='upper1 mt-2' style={{ fontSize: '16px' }}>
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
              <div className='upper1' style={{ fontSize: '20px' }}>
                <span>S</span>kills
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
