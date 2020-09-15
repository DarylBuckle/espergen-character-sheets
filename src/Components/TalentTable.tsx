/* eslint-disable prettier/prettier */
import React from 'react'

function TalentTable(props: {
  onChange: (arg0: any, arg1: any) => void
  name: string
  label: string
  tp?: number
  level: number
  value?: any
  classes?: string
  rows: number
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

  let classes = 'espergen-talentlist'
  if (props.classes) {
    classes += ' ' + props.classes
  }

  return (
    <div className={classes} style={props.style}>
      <div className='espergen-talent-header'>
        {props.tp ? <label className='tp'>TP:{props.tp}</label> : null}
        <label className='mb-0'>{props.label}</label>
      </div>

      <table>
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
                    <td className='espergen-talent-prepared'>
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

export default TalentTable
