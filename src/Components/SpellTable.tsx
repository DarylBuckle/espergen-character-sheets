/* eslint-disable prettier/prettier */
import React from 'react'

function SpellTable(props: {
  onChange: (arg0: any, arg1: any) => void
  name: string
  slotsName?: string
  slotsUsedName?: string
  level: number
  value?: any
  slotsValue?: string
  slotsUsedValue?: number
  classes?: string
  rows: number
  showLabels?: boolean
  style?: React.CSSProperties | undefined
}) {
  function updateValue(index: React.Key, field: string, v: string | boolean) {
    const value = getValue().slice()
    value[index][field] = v
    props.onChange(props.name, value)
  }

  function getValue() {
    let value = props.value
    if (!value) {
      value = []
    }
    while (value.length < props.rows) {
      value.push({})
    }
    return value
  }

  function renderSlotsRemaining() {
    let slotCount = 6
    if (props.slotsValue != null && props.slotsValue !== '' && Number(props.slotsValue) != null) {
      slotCount = Number(props.slotsValue)
    }

    const slots = []
    for (let i1 = 1; i1 <= slotCount; i1++) {
      slots.push(
        <div
          key={'espergen-table-slot-' + props.name + i1}
          className={
            props.slotsUsedValue && props.slotsUsedValue >= i1
              ? 'espergen-skill-circle active'
              : 'espergen-skill-circle'
          }
          onClick={() =>
            props.onChange(
              props.slotsUsedName,
              props.slotsUsedValue === i1 ? null : i1
            )
          }
        />
      )
    }

    return slots
  }

  let classes = 'espergen-spelllist'
  if (props.classes) {
    classes += ' ' + props.classes
  }

  return (
    <div className={classes} style={props.style}>
      {props.showLabels ? (
        <div className='espergen-spell-header-labels'>
          <label style={{ width: '20px' }}>Spell Level</label>
          <label style={{ width: '80px' }}>Slots Total</label>
          <label style={{ width: 'calc(100% - 100px)' }}>Slots Remaining</label>
        </div>
      ) : null}
      <div className='espergen-spell-header'>
        <div className='espergen-spell-level'>{props.level}</div>
        {props.level === 0 ? (
          <div className='espergen-spell-slots'>
            <label>Cantrips</label>
          </div>
        ) : (
          <div className='espergen-spell-slots'>
            <div className='espergen-spell-slots-total'>
              <input
                type='text'
                value={props.slotsValue ? props.slotsValue : ''}
                onChange={(e) =>
                  props.onChange(props.slotsName, e.target.value)
                }
              />
            </div>
            <div className='espergen-spell-slots-remaining'>
              {renderSlotsRemaining()}
            </div>
          </div>
        )}
      </div>

      <table>
        {props.showLabels ? (
          <thead>
            <tr>
              <th style={{ width: '30px', position: 'absolute', left: '-7px' }}>
                Prepared
              </th>
              <th>Spell Name</th>
            </tr>
          </thead>
        ) : null}
        <tbody>
          {getValue().map(
            (
              v: {
                name: string | number | readonly string[] | undefined
                prepared: boolean | undefined
              },
              index: string
            ) => {
              return (
                <tr key={'espergen-table-row-' + props.name + index}>
                  {props.level > 0 ? (
                    <td className='espergen-spell-prepared'>
                      <div
                        className={
                          v.prepared
                            ? 'espergen-skill-circle active'
                            : 'espergen-skill-circle'
                        }
                        onClick={() =>
                          updateValue(index, 'prepared', !v.prepared)
                        }
                      />
                    </td>
                  ) : null}
                  <td>
                    <input
                      type='text'
                      value={v.name ? v.name : ''}
                      onChange={(e) =>
                        updateValue(index, 'name', e.target.value)
                      }
                    />
                  </td>
                </tr>
              )
            }
          )}
        </tbody>
      </table>
    </div>
  )
}

export default SpellTable
