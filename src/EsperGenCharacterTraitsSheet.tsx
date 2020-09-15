import React from 'react'
import GearTable from './Components/GearTable'
import VehiclesTable from './Components/VehiclesTable'

// eslint-disable-next-line no-unused-vars
import EsperGenCharacter from './EsperGenCharacter'

import './espergenstyles.css'

interface IEsperGenCharacterTraitsSheetProps {
  character?: EsperGenCharacter
  defaultCharacter?: EsperGenCharacter
  onCharacterChanged?: (
    character: EsperGenCharacter,
    changedField: string,
    newValue: any
  ) => void
}

interface IEsperGenCharacterTraitsSheetState {
  character: EsperGenCharacter
}

const initialState: IEsperGenCharacterTraitsSheetState = {
  character: {}
}

class EsperGenCharacterTraitsSheet extends React.Component<
  IEsperGenCharacterTraitsSheetProps,
  IEsperGenCharacterTraitsSheetState
> {
  constructor(props: IEsperGenCharacterTraitsSheetProps) {
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
            <div className='col-md-6'>
              <div
                className='upper1 mb-2'
                style={{
                  fontSize: '20px'
                }}
              >
                <span>C</span>haracter <span>T</span>raits
              </div>

              <div
                className='upper1'
                style={{
                  fontSize: '12px',
                  fontWeight: 'normal'
                }}
              >
                <span>R</span>acial <span>F</span>eatures
              </div>
              <div className='espergen-box mb-2'>
                <textarea
                  value={
                    character.racialFeatures ? character.racialFeatures : ''
                  }
                  onChange={(e) =>
                    this.updateCharacter('racialFeatures', e.target.value)
                  }
                  rows={10}
                />
              </div>

              <div
                className='upper1'
                style={{
                  fontSize: '12px',
                  fontWeight: 'normal'
                }}
              >
                <span>C</span>lass <span>F</span>eatures
              </div>
              <div className='espergen-box mb-2'>
                <textarea
                  value={character.classFeatures ? character.classFeatures : ''}
                  onChange={(e) =>
                    this.updateCharacter('classFeatures', e.target.value)
                  }
                  rows={25}
                />
              </div>

              <div
                className='upper1 mb-2 mt-4'
                style={{
                  fontSize: '12px',
                  fontWeight: 'normal'
                }}
              >
                <span>P</span>roficiencies
              </div>
              <div>
                <label
                  className='mb-0'
                  style={{ textTransform: 'uppercase', width: '48px' }}
                >
                  Armour
                </label>

                <label
                  htmlFor='profArmourLight'
                  className='text-uppercase ml-3 mr-3 mb-0'
                  style={{ width: '65px' }}
                >
                  <input
                    type='checkbox'
                    id='profArmourLight'
                    checked={character.profArmourLight}
                    onClick={() =>
                      this.updateCharacter(
                        'profArmourLight',
                        !character.profArmourLight
                      )
                    }
                  />
                  Light
                </label>

                <label
                  htmlFor='profArmourMedium'
                  className='text-uppercase ml-2 mr-3 mb-0'
                  style={{ width: '65px' }}
                >
                  <input
                    type='checkbox'
                    id='profArmourMedium'
                    checked={character.profArmourMedium}
                    onClick={() =>
                      this.updateCharacter(
                        'profArmourMedium',
                        !character.profArmourMedium
                      )
                    }
                  />
                  Medium
                </label>

                <label
                  htmlFor='profArmourHeavy'
                  className='text-uppercase ml-2 mr-3 mb-0'
                  style={{ width: '65px' }}
                >
                  <input
                    type='checkbox'
                    id='profArmourHeavy'
                    checked={character.profArmourHeavy}
                    onClick={() =>
                      this.updateCharacter(
                        'profArmourHeavy',
                        !character.profArmourHeavy
                      )
                    }
                  />
                  Heavy
                </label>

                <label
                  htmlFor='profArmourShield'
                  className='text-uppercase ml-2 mr-3 mb-0'
                  style={{ width: '65px' }}
                >
                  <input
                    type='checkbox'
                    id='profArmourShield'
                    checked={character.profArmourShield}
                    onClick={() =>
                      this.updateCharacter(
                        'profArmourShield',
                        !character.profArmourShield
                      )
                    }
                  />
                  Shields
                </label>
              </div>

              <hr
                className='espergen-seperator'
                style={{ height: '0px', margin: '1px 0' }}
              />

              <div className='mt-1'>
                <label
                  className='mb-0'
                  style={{ textTransform: 'uppercase', width: '48px' }}
                >
                  Weapon
                </label>

                <label
                  htmlFor='profWeaponSimple'
                  className='text-uppercase ml-3 mr-3 mb-0'
                  style={{ width: '65px' }}
                >
                  <input
                    type='checkbox'
                    id='profWeaponSimple'
                    checked={character.profWeaponSimple}
                    onClick={() =>
                      this.updateCharacter(
                        'profWeaponSimple',
                        !character.profWeaponSimple
                      )
                    }
                  />
                  Simple
                </label>

                <label
                  htmlFor='profWeaponMartial'
                  className='text-uppercase ml-2 mr-3 mb-0'
                  style={{ width: '65px' }}
                >
                  <input
                    type='checkbox'
                    id='profWeaponMartial'
                    checked={character.profWeaponMartial}
                    onClick={() =>
                      this.updateCharacter(
                        'profWeaponMartial',
                        !character.profWeaponMartial
                      )
                    }
                  />
                  Martial
                </label>

                <label
                  htmlFor='profWeaponOther'
                  className='text-uppercase ml-2 mr-3 mb-0'
                  style={{ width: '65px' }}
                >
                  <input
                    type='checkbox'
                    id='profWeaponOther'
                    checked={character.profWeaponOther}
                    onClick={() =>
                      this.updateCharacter(
                        'profWeaponOther',
                        !character.profWeaponOther
                      )
                    }
                  />
                  Other
                </label>

                <input
                  type='text'
                  className='ml-2'
                  style={{ width: '150px' }}
                  id='profWeaponOtherText'
                  value={character.profWeaponOtherText}
                  onChange={(e) =>
                    this.updateCharacter('profWeaponOtherText', e.target.value)
                  }
                />
              </div>

              <hr
                className='espergen-seperator'
                style={{ height: '0px', margin: '1px 0' }}
              />

              <div className='row text-center'>
                <div className='col-md-6 pr-md-2'>
                  <div
                    className='upper1 mt-1'
                    style={{
                      fontWeight: 'normal',
                      fontSize: '12px'
                    }}
                  >
                    <span>L</span>anguages
                  </div>
                  <hr
                    className='espergen-seperator'
                    style={{ height: '0px', marginTop: '0px' }}
                  />

                  <div className='row'>
                    <div className='col-6 pr-2'>
                      <input
                        type='text'
                        style={{ width: '100%' }}
                        className='espergen-linput'
                        value={character.language1 ? character.language1 : ''}
                        onChange={(e) =>
                          this.updateCharacter('language1', e.target.value)
                        }
                      />
                      <input
                        type='text'
                        style={{ width: '100%' }}
                        className='espergen-linput'
                        value={character.language2 ? character.language2 : ''}
                        onChange={(e) =>
                          this.updateCharacter('language2', e.target.value)
                        }
                      />
                      <input
                        type='text'
                        style={{ width: '100%' }}
                        className='espergen-linput'
                        value={character.language3 ? character.language3 : ''}
                        onChange={(e) =>
                          this.updateCharacter('language3', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-6 pl-2'>
                      <input
                        type='text'
                        style={{ width: '100%' }}
                        className='espergen-linput'
                        value={character.language4 ? character.language4 : ''}
                        onChange={(e) =>
                          this.updateCharacter('language4', e.target.value)
                        }
                      />
                      <input
                        type='text'
                        style={{ width: '100%' }}
                        className='espergen-linput'
                        value={character.language5 ? character.language5 : ''}
                        onChange={(e) =>
                          this.updateCharacter('language5', e.target.value)
                        }
                      />
                      <input
                        type='text'
                        style={{ width: '100%' }}
                        className='espergen-linput'
                        value={character.language6 ? character.language6 : ''}
                        onChange={(e) =>
                          this.updateCharacter('language6', e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className='col-md-6 pl-md-2'>
                  <div
                    className='upper1 mt-1'
                    style={{
                      fontWeight: 'normal',
                      fontSize: '12px'
                    }}
                  >
                    <span>T</span>ools
                  </div>
                  <hr
                    className='espergen-seperator'
                    style={{ height: '0px', marginTop: '0px' }}
                  />

                  <div className='row'>
                    <div className='col-6 pr-2'>
                      <input
                        type='text'
                        style={{ width: '100%' }}
                        className='espergen-linput'
                        value={character.tool1 ? character.tool1 : ''}
                        onChange={(e) =>
                          this.updateCharacter('tool1', e.target.value)
                        }
                      />
                      <input
                        type='text'
                        style={{ width: '100%' }}
                        className='espergen-linput'
                        value={character.tool2 ? character.tool2 : ''}
                        onChange={(e) =>
                          this.updateCharacter('tool2', e.target.value)
                        }
                      />
                      <input
                        type='text'
                        style={{ width: '100%' }}
                        className='espergen-linput'
                        value={character.tool3 ? character.tool3 : ''}
                        onChange={(e) =>
                          this.updateCharacter('tool3', e.target.value)
                        }
                      />
                    </div>
                    <div className='col-6 pl-2'>
                      <input
                        type='text'
                        style={{ width: '100%' }}
                        className='espergen-linput'
                        value={character.tool4 ? character.tool4 : ''}
                        onChange={(e) =>
                          this.updateCharacter('tool4', e.target.value)
                        }
                      />
                      <input
                        type='text'
                        style={{ width: '100%' }}
                        className='espergen-linput'
                        value={character.tool5 ? character.tool5 : ''}
                        onChange={(e) =>
                          this.updateCharacter('tool5', e.target.value)
                        }
                      />
                      <input
                        type='text'
                        style={{ width: '100%' }}
                        className='espergen-linput'
                        value={character.tool6 ? character.tool6 : ''}
                        onChange={(e) =>
                          this.updateCharacter('tool6', e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div
                className='upper1 mb-2'
                style={{
                  fontSize: '16px'
                }}
              >
                <span>B</span>ackground
              </div>

              <div style={{ position: 'relative' }}>
                <label
                  style={{
                    position: 'absolute',
                    top: '7px',
                    textTransform: 'uppercase'
                  }}
                >
                  Personality Trait
                </label>
                <textarea
                  className='espergen-linedtextarea'
                  style={{ textIndent: '130px' }}
                  value={
                    character.personalityTraits
                      ? character.personalityTraits
                      : ''
                  }
                  onChange={(e) =>
                    this.updateCharacter('personalityTraits', e.target.value)
                  }
                  rows={3}
                />
              </div>
              <div className='mb-2' style={{ position: 'relative' }}>
                <label
                  style={{
                    position: 'absolute',
                    top: '7px',
                    textTransform: 'uppercase'
                  }}
                >
                  Ideal
                </label>
                <textarea
                  className='espergen-linedtextarea'
                  style={{ textIndent: '55px' }}
                  value={character.ideals ? character.ideals : ''}
                  onChange={(e) =>
                    this.updateCharacter('ideals', e.target.value)
                  }
                  rows={2}
                />
              </div>

              <div style={{ position: 'relative' }}>
                <label
                  style={{
                    position: 'absolute',
                    top: '7px',
                    textTransform: 'uppercase'
                  }}
                >
                  Bond
                </label>
                <textarea
                  className='espergen-linedtextarea'
                  style={{ textIndent: '55px' }}
                  value={character.bonds ? character.bonds : ''}
                  onChange={(e) =>
                    this.updateCharacter('bonds', e.target.value)
                  }
                  rows={3}
                />
              </div>
              <div className='mb-2' style={{ position: 'relative' }}>
                <label
                  style={{
                    position: 'absolute',
                    top: '7px',
                    textTransform: 'uppercase'
                  }}
                >
                  Flaw
                </label>
                <textarea
                  className='espergen-linedtextarea'
                  style={{ textIndent: '55px' }}
                  value={character.flaws ? character.flaws : ''}
                  onChange={(e) =>
                    this.updateCharacter('flaws', e.target.value)
                  }
                  rows={3}
                />
              </div>

              <div
                className='upper1'
                style={{
                  fontSize: '12px',
                  fontWeight: 'normal'
                }}
              >
                <span>B</span>ackground <span>F</span>eature
              </div>
              <div className='espergen-box mb-2'>
                <textarea
                  value={
                    character.backgroundFeature
                      ? character.backgroundFeature
                      : ''
                  }
                  onChange={(e) =>
                    this.updateCharacter('backgroundFeature', e.target.value)
                  }
                  rows={8}
                />
              </div>

              <div
                className='upper1 mb-2 mt-3'
                style={{
                  fontSize: '16px'
                }}
              >
                <span>F</span>eats
              </div>

              <div style={{ position: 'relative' }}>
                <label
                  style={{
                    position: 'absolute',
                    top: '7px',
                    textTransform: 'uppercase'
                  }}
                >
                  Feat:
                </label>
                <textarea
                  className='espergen-linedtextarea'
                  style={{ textIndent: '40px' }}
                  value={character.feat1 ? character.feat1 : ''}
                  onChange={(e) =>
                    this.updateCharacter('feat1', e.target.value)
                  }
                  rows={3}
                />
              </div>
              <div className='mb-2' style={{ position: 'relative' }}>
                <label
                  style={{
                    position: 'absolute',
                    top: '7px',
                    textTransform: 'uppercase'
                  }}
                >
                  Feat:
                </label>
                <textarea
                  className='espergen-linedtextarea'
                  style={{ textIndent: '40px' }}
                  value={character.feat2 ? character.feat2 : ''}
                  onChange={(e) =>
                    this.updateCharacter('feat2', e.target.value)
                  }
                  rows={2}
                />
              </div>

              <div style={{ position: 'relative' }}>
                <label
                  style={{
                    position: 'absolute',
                    top: '7px',
                    textTransform: 'uppercase'
                  }}
                >
                  Feat:
                </label>
                <textarea
                  className='espergen-linedtextarea'
                  style={{ textIndent: '40px' }}
                  value={character.feat3 ? character.feat3 : ''}
                  onChange={(e) =>
                    this.updateCharacter('feat3', e.target.value)
                  }
                  rows={3}
                />
              </div>
              <div className='mb-2' style={{ position: 'relative' }}>
                <label
                  style={{
                    position: 'absolute',
                    top: '7px',
                    textTransform: 'uppercase'
                  }}
                >
                  Feat:
                </label>
                <textarea
                  className='espergen-linedtextarea'
                  style={{ textIndent: '40px' }}
                  value={character.feat4 ? character.feat4 : ''}
                  onChange={(e) =>
                    this.updateCharacter('feat4', e.target.value)
                  }
                  rows={3}
                />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <div
                className='upper1 mb-2 mt-2'
                style={{
                  fontSize: '20px'
                }}
              >
                <span>E</span>quipment
              </div>

              <div
                className='upper1 mb-2'
                style={{
                  fontSize: '12px',
                  fontWeight: 'normal'
                }}
              >
                <span>A</span>dventuring <span>G</span>ear
              </div>

              <GearTable
                rows={10}
                name='gear1'
                value={character.gear1}
                onChange={(name: string, value: any) => {
                  this.updateCharacter(name, value)
                }}
              />

              <div className='mt-3'>
                <VehiclesTable
                  rows={3}
                  name='vehicles'
                  value={character.vehicles}
                  onChange={(name: string, value: any) => {
                    this.updateCharacter(name, value)
                  }}
                />
              </div>
            </div>

            <div className='col-md-6'>
              <div className='text-center mt-1 mb-1'>
                <div className='espergen-coin mr-2' />
                <label
                  className='text-uppercase mr-2 mb-0'
                  style={{ verticalAlign: 'middle', fontSize: '12px' }}
                >
                  <b>
                    Total
                    <br />
                    Cubil (CU)
                  </b>
                </label>
                <input
                  type='text'
                  style={{ height: '36px', width: '50px' }}
                  className='espergen-binput'
                  value={character.cu ? character.cu : ''}
                  onChange={(e) => this.updateCharacter('cu', e.target.value)}
                />
              </div>

              <div
                className='text-center mt-3'
                style={{ marginBottom: '11px' }}
              >
                <label className='text-uppercase mr-1'>Lifestyle:</label>
                <input
                  type='text'
                  style={{ width: '150px' }}
                  className='espergen-linput'
                  value={character.lifestyle ? character.lifestyle : ''}
                  onChange={(e) =>
                    this.updateCharacter('lifestyle', e.target.value)
                  }
                />
                <label className='text-uppercase mr-1 ml-3'>
                  Daily Expenses:
                </label>
                <input
                  type='text'
                  style={{ width: '150px' }}
                  className='espergen-linput'
                  value={character.dailyExpenses ? character.dailyExpenses : ''}
                  onChange={(e) =>
                    this.updateCharacter('dailyExpenses', e.target.value)
                  }
                />
              </div>

              <GearTable
                rows={10}
                name='gear2'
                value={character.gear2}
                onChange={(name: string, value: any) => {
                  this.updateCharacter(name, value)
                }}
              />
              <div
                className='espergen-box'
                style={{ borderTop: 'none', width: 'calc(100% + 1px)' }}
              >
                <label className='text-uppercase mb-0'>Other Valuables</label>
                <textarea
                  value={
                    character.otherValuables ? character.otherValuables : ''
                  }
                  onChange={(e) =>
                    this.updateCharacter('otherValuables', e.target.value)
                  }
                  rows={2}
                />
              </div>

              <div className='text-center mt-2'>
                <div className='ml-2 mr-2' style={{ display: 'inline-block' }}>
                  <label
                    className='mb-0 text-center w-100'
                    style={{ fontSize: '9px' }}
                  >
                    Total WT.
                  </label>
                  <br />
                  <input
                    type='text'
                    style={{ height: '24px', width: '50px' }}
                    className='espergen-binput'
                    value={character.totalWeight ? character.totalWeight : ''}
                    onChange={(e) =>
                      this.updateCharacter('totalWeight', e.target.value)
                    }
                  />
                </div>
                <div className='ml-2' style={{ display: 'inline-block' }}>
                  <label
                    className='mb-0 text-center w-100'
                    style={{ fontSize: '9px' }}
                  >
                    Encumbered
                  </label>
                  <br />
                  <input
                    type='text'
                    style={{ height: '24px', width: '50px' }}
                    className='espergen-binput'
                    value={character.encumbered ? character.encumbered : ''}
                    onChange={(e) =>
                      this.updateCharacter('encumbered', e.target.value)
                    }
                  />
                </div>

                <label
                  className='mb-0 text-center'
                  style={{
                    width: '60px',
                    fontSize: '8px',
                    verticalAlign: 'middle'
                  }}
                >
                  = Str x 5
                  <br />- 10 Spd.
                </label>

                <div style={{ display: 'inline-block' }}>
                  <label
                    className='mb-0 text-center w-100'
                    style={{ fontSize: '9px' }}
                  >
                    Heavily Enc.
                  </label>
                  <br />
                  <input
                    type='text'
                    style={{ height: '24px', width: '50px' }}
                    className='espergen-binput'
                    value={
                      character.heavyEncumbered ? character.heavyEncumbered : ''
                    }
                    onChange={(e) =>
                      this.updateCharacter('heavyEncumbered', e.target.value)
                    }
                  />
                </div>

                <label
                  className='mb-0 text-center'
                  style={{
                    width: '60px',
                    fontSize: '8px',
                    verticalAlign: 'middle'
                  }}
                >
                  = Str x 10
                  <br />- 20 Spd.
                </label>

                <div style={{ display: 'inline-block' }}>
                  <label
                    className='mb-0 text-center w-100'
                    style={{ fontSize: '9px' }}
                  >
                    Push/Lift
                  </label>
                  <br />
                  <input
                    type='text'
                    style={{ height: '24px', width: '50px' }}
                    className='espergen-binput'
                    value={character.pushLift ? character.pushLift : ''}
                    onChange={(e) =>
                      this.updateCharacter('pushLift', e.target.value)
                    }
                  />
                </div>

                <label
                  className='mb-0 text-center'
                  style={{
                    width: '80px',
                    fontSize: '8px',
                    verticalAlign: 'middle'
                  }}
                >
                  = (Str x 15) - 30
                  <br />
                  Spd. = 5ft.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EsperGenCharacterTraitsSheet
