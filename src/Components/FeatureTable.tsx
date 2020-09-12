import React from 'react'

function FeatureTable(props: {
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
          <th>Feature</th>
          <th style={{ width: '70px' }}>Max Use</th>
          <th style={{ width: '70px' }}>Recovery</th>
          <th style={{ width: '50px' }}>Used</th>
        </tr>
      </thead>
      <tbody>
        {getValue().map(
          (
            v: {
              name: string | number | readonly string[] | undefined
              maxUse: string | number | readonly string[] | undefined
              recovery: string | number | readonly string[] | undefined
              used: string | number | readonly string[] | undefined
            },
            index: string
          ) => {
            return (
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
                    value={v.maxUse ? v.maxUse : ''}
                    onChange={(e) =>
                      updateValue(index, 'maxUse', e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={v.recovery ? v.recovery : ''}
                    onChange={(e) =>
                      updateValue(index, 'recovery', e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={v.used ? v.used : ''}
                    onChange={(e) => updateValue(index, 'used', e.target.value)}
                  />
                </td>
              </tr>
            )
          }
        )}
      </tbody>
    </table>
  )
}

export default FeatureTable
