import React from 'react'

function AttackTable(props: {
  onChange: (arg0: any, arg1: any) => void
  name: string
  value?: any
  classes?: string
  rows: number
}) {
  function updateValue(index: React.Key, field: string, v: string) {
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

  let classes = 'espergen-table'
  if (props.classes) {
    classes += ' ' + props.classes
  }

  return (
    <table className={classes}>
      <thead>
        <tr>
          <th>Weapon</th>
          <th style={{ width: '35px' }}>Prof.</th>
          <th style={{ width: '70px' }}>Range</th>
          <th style={{ width: '40px' }}>To Hit</th>
          <th style={{ width: '70px' }}>Damage</th>
          <th style={{ width: '70px' }}>Dmg. Type</th>
        </tr>
      </thead>
      <tbody>
        {getValue().map(
          (
            v: {
              name: string | number | readonly string[] | undefined
              prof: string | number | readonly string[] | undefined
              range: string | number | readonly string[] | undefined
              toHit: string | number | readonly string[] | undefined
              damage: string | number | readonly string[] | undefined
              damageType: string | number | readonly string[] | undefined
              special: string | number | readonly string[] | undefined
            },
            index: string
          ) => {
            return [
              <tr key={'espergen-table-row-' + props.name + index}>
                <td>
                  <input
                    type='text'
                    value={v.name ? v.name : ''}
                    onChange={(e) => updateValue(index, 'name', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={v.prof ? v.prof : ''}
                    onChange={(e) => updateValue(index, 'prof', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={v.range ? v.range : ''}
                    onChange={(e) =>
                      updateValue(index, 'range', e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={v.toHit ? v.toHit : ''}
                    onChange={(e) =>
                      updateValue(index, 'toHit', e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={v.damage ? v.damage : ''}
                    onChange={(e) =>
                      updateValue(index, 'damage', e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={v.damageType ? v.damageType : ''}
                    onChange={(e) =>
                      updateValue(index, 'damageType', e.target.value)
                    }
                  />
                </td>
              </tr>,
              <tr key={'espergen-table-row2-' + props.name + index}>
                <td colSpan={6}>
                  <label className='mb-0 mr-2'>Special</label>
                  <input
                    type='text'
                    style={{ width: 'calc(100% - 50px' }}
                    value={v.special ? v.special : ''}
                    onChange={(e) =>
                      updateValue(index, 'special', e.target.value)
                    }
                  />
                </td>
              </tr>
            ]
          }
        )}
      </tbody>
    </table>
  )
}

export default AttackTable
