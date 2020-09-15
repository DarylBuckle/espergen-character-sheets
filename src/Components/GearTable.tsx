import React from 'react'

function GearTable(props: {
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
          <th>NAME</th>
          <th style={{ width: '40px' }}>#</th>
          <th style={{ width: '40px' }}>WT.</th>
        </tr>
      </thead>
      <tbody>
        {getValue().map(
          (
            v: {
              name: string | number | readonly string[] | undefined
              number: string | number | readonly string[] | undefined
              weight: string | number | readonly string[] | undefined
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
                    value={v.number ? v.number : ''}
                    onChange={(e) =>
                      updateValue(index, 'number', e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={v.weight ? v.weight : ''}
                    onChange={(e) =>
                      updateValue(index, 'weight', e.target.value)
                    }
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

export default GearTable
