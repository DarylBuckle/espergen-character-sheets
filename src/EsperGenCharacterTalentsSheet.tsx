import React from 'react'
import TalentTable from './Components/TalentTable'
import TechniqueTable from './Components/TechniqueTable'

// eslint-disable-next-line no-unused-vars
import EsperGenCharacter from './EsperGenCharacter'

import './espergenstyles.css'

interface IEsperGenCharacterTalentsSheetProps {
  character?: EsperGenCharacter
  defaultCharacter?: EsperGenCharacter
  onCharacterChanged?: (
    character: EsperGenCharacter,
    changedField: string,
    newValue: any
  ) => void
}

interface IEsperGenCharacterTalentsSheetState {
  character: EsperGenCharacter
}

const initialState: IEsperGenCharacterTalentsSheetState = {
  character: {}
}

class EsperGenCharacterTalentsSheet extends React.Component<
  IEsperGenCharacterTalentsSheetProps,
  IEsperGenCharacterTalentsSheetState
> {
  constructor(props: IEsperGenCharacterTalentsSheetProps) {
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
          <div className='row'>
            <div className='col-md-5 pr-md-1'>
              <label style={{ width: '130px', fontSize: '16px' }}>
                Character Name:{' '}
              </label>
              <input
                type='text'
                style={{ width: 'calc(100% - 130px)', fontSize: '16px' }}
                className='espergen-linput mb-3'
                value={character.name ? character.name : ''}
                onChange={(e) => this.updateCharacter('name', e.target.value)}
              />

              <label style={{ width: '100px', fontSize: '16px' }}>
                Esper Ability:{' '}
              </label>
              <input
                type='text'
                style={{ width: 'calc(100% - 100px)', fontSize: '16px' }}
                className='espergen-linput'
                value={character.forgingAbility ? character.forgingAbility : ''}
                onChange={(e) =>
                  this.updateCharacter('forgingAbility', e.target.value)
                }
              />
            </div>
            <div className='col-md-7 pl-md-1'>
              <div className='row'>
                <div className='col-md-6 pr-md-1 text-center'>
                  <div
                    className='upper1'
                    style={{
                      fontSize: '18px',
                      lineHeight: '20px'
                    }}
                  >
                    <span>E</span>sper <span>A</span>ttack <span>M</span>odifier
                  </div>
                  <label className='text-uppercase'>
                    (Channeling or Forging)
                  </label>

                  <div>
                    <div className='espergen-round-input large ml-2 mr-2'>
                      <input
                        type='text'
                        value={
                          character.esperAttackModifier
                            ? character.esperAttackModifier
                            : ''
                        }
                        onChange={(e) =>
                          this.updateCharacter(
                            'esperAttackModifier',
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <label
                      className='mb-0 text-center'
                      style={{
                        fontSize: '12px',
                        verticalAlign: 'middle'
                      }}
                    >
                      = Proficiency Bonus + your
                      <br />
                      Channeling/Forging ability bonus
                    </label>
                  </div>
                </div>

                <div className='col-md-6 pl-md-1 text-center'>
                  <div
                    className='upper1'
                    style={{
                      fontSize: '18px',
                      lineHeight: '20px'
                    }}
                  >
                    <span>E</span>sper <span>P</span>ower <span>S</span>ave{' '}
                    <span>DC</span>
                  </div>
                  <label
                    className='text-uppercase mb-1'
                    style={{ minHeight: '16px' }}
                  >
                    {' '}
                  </label>

                  <div>
                    <div className='espergen-round-input large ml-2 mr-2'>
                      <input
                        type='text'
                        value={
                          character.esperPowerDc ? character.esperPowerDc : ''
                        }
                        onChange={(e) =>
                          this.updateCharacter('esperPowerDc', e.target.value)
                        }
                      />
                    </div>
                    <label
                      className='mb-0 text-center'
                      style={{
                        fontSize: '12px',
                        verticalAlign: 'middle'
                      }}
                    >
                      = 8 + Proficiency Bonus + your
                      <br />
                      Channeling/Forging ability bonus
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-md-5 pr-md-5'>
              <div
                className='upper1'
                style={{
                  fontSize: '18px'
                }}
              >
                <span>T</span>alent <span>P</span>oints
              </div>

              <div className='espergen-box'>
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
                    value={character.maxTp ? character.maxTp : ''}
                    onChange={(e) =>
                      this.updateCharacter('maxTp', e.target.value)
                    }
                  />
                  <br />
                  <label className='text-center' style={{ width: '70px' }}>
                    Max TP
                  </label>
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    width: 'calc(100% - 70px)',
                    padding: '0 10px'
                  }}
                >
                  <label className='w-100 text-right mb-0'>Remaining</label>
                  <textarea
                    value={character.remainingTp ? character.remainingTp : ''}
                    onChange={(e) =>
                      this.updateCharacter('remainingTp', e.target.value)
                    }
                    rows={5}
                  />
                </div>
              </div>
            </div>

            <div className='col-md-7 pl-md-0 mt-3'>
              <div
                className='upper1 float-right pt-1 mr-4'
                style={{
                  fontSize: '16px'
                }}
              >
                <span># T</span>echniques <span>P</span>repared:
                <input
                  type='text'
                  style={{ width: '50px', textAlign: 'center' }}
                  className='espergen-linput ml-1'
                  value={
                    character.techniquesPrepared
                      ? character.techniquesPrepared
                      : ''
                  }
                  onChange={(e) =>
                    this.updateCharacter('techniquesPrepared', e.target.value)
                  }
                />
              </div>
              <div
                className='upper1'
                style={{
                  fontSize: '18px',
                  marginLeft: '50px'
                }}
              >
                <span>T</span>ech <span>S</span>lots
              </div>

              <div className='mr-4 mt-1'>
                <TechniqueTable
                  maxName='techniqueSlots'
                  max={character.techniqueSlots}
                  usedName='techniqueSlotsUsed'
                  used={character.techniqueSlotsUsed}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
              </div>
            </div>
          </div>

          <hr className='espergen-page-break mt-3' />
          <hr className='espergen-page-break' />

          <div
            className='upper1 text-center mb-3'
            style={{
              fontSize: '27px'
            }}
          >
            <span>T</span>alents and <span>T</span>echniques
          </div>

          <div className='row'>
            <div className='col-md-4'>
              <div className=''>
                <TalentTable
                  level={0}
                  rows={8}
                  label='PRIME'
                  name='primeTalents'
                  value={character.primeTalents}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <TalentTable
                  level={1}
                  rows={12}
                  tp={2}
                  label='RANK 1'
                  name='lvl1Talents'
                  value={character.lvl1Talents}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <TalentTable
                  level={2}
                  rows={12}
                  tp={3}
                  label='RANK 2'
                  name='lvl2Talents'
                  value={character.lvl2Talents}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
              </div>
            </div>

            <div className='col-md-4'>
              <div className=''>
                <TalentTable
                  level={3}
                  rows={12}
                  tp={5}
                  label='RANK 3'
                  name='lvl3Talents'
                  value={character.lvl3Talents}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <TalentTable
                  level={4}
                  rows={12}
                  tp={6}
                  label='RANK 4'
                  name='lvl4Talents'
                  value={character.lvl4Talents}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <TalentTable
                  level={5}
                  rows={8}
                  tp={7}
                  label='RANK 5'
                  name='lvl5Talents'
                  value={character.lvl5Talents}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
              </div>
            </div>

            <div className='col-md-4'>
              <div className=''>
                <TalentTable
                  level={6}
                  rows={8}
                  tp={9}
                  label='RANK 6'
                  name='lvl6Talents'
                  value={character.lvl6Talents}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <TalentTable
                  classes='mt-3'
                  style={{ paddingBottom: '4px' }}
                  level={7}
                  rows={8}
                  tp={10}
                  label='RANK 7'
                  name='lvl7Talents'
                  value={character.lvl7Talents}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <TalentTable
                  classes='mt-3'
                  level={8}
                  rows={7}
                  tp={11}
                  label='RANK 8'
                  name='lvl8Talents'
                  value={character.lvl8Talents}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
                <TalentTable
                  classes='mt-4'
                  level={9}
                  rows={7}
                  tp={13}
                  label='RANK 9'
                  name='lvl9Talents'
                  value={character.lvl9Talents}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EsperGenCharacterTalentsSheet
