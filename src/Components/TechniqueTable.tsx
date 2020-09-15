import React from 'react'

function TechniqueTable(props: {
  onChange: (arg0: any, arg1: any) => void
  maxName: string
  usedName: string
  max?: any
  used?: any
  classes?: string
}) {
  function updateValue(index: React.Key, field: string, v: string) {
    const value = getValue().slice()
    value[index][field] = v
    if (index === 0) {
      props.onChange(props.maxName, value[index])
    } else {
      props.onChange(props.usedName, value[index])
    }
  }

  function getValue() {
    let max = props.max
    if (max == null) {
      max = {}
    }
    let used = props.used
    if (used == null) {
      used = {}
    }
    return [max, used]
  }

  let classes = 'espergen-technique-table'
  if (props.classes) {
    classes += ' ' + props.classes
  }

  return (
    <table className={classes}>
      <thead>
        <tr>
          <th style={{ width: '50px' }} />
          <th>1st</th>
          <th>2nd</th>
          <th>3rd</th>
          <th>4th</th>
          <th>5th</th>
          <th>6th</th>
          <th>7th</th>
          <th>8th</th>
          <th>9th</th>
        </tr>
      </thead>
      <tbody>
        {getValue().map(
          (
            v: {
              lvl1: string | number | readonly string[] | undefined
              lvl2: string | number | readonly string[] | undefined
              lvl3: string | number | readonly string[] | undefined
              lvl4: string | number | readonly string[] | undefined
              lvl5: string | number | readonly string[] | undefined
              lvl6: string | number | readonly string[] | undefined
              lvl7: string | number | readonly string[] | undefined
              lvl8: string | number | readonly string[] | undefined
              lvl9: string | number | readonly string[] | undefined
            },
            index: number
          ) => {
            return (
              <tr key={'espergen-table-row-' + props.maxName + index}>
                <td style={{ fontWeight: 'bold' }}>
                  {index === 0 ? 'Max' : 'Used'}
                </td>
                <td>
                  <input
                    type='text'
                    value={v.lvl1 ? v.lvl1 : ''}
                    onChange={(e) => updateValue(index, 'lvl1', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={v.lvl2 ? v.lvl2 : ''}
                    onChange={(e) => updateValue(index, 'lvl2', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={v.lvl3 ? v.lvl3 : ''}
                    onChange={(e) => updateValue(index, 'lvl3', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={v.lvl4 ? v.lvl4 : ''}
                    onChange={(e) => updateValue(index, 'lvl4', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={v.lvl5 ? v.lvl5 : ''}
                    onChange={(e) => updateValue(index, 'lvl5', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={v.lvl6 ? v.lvl6 : ''}
                    onChange={(e) => updateValue(index, 'lvl6', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={v.lvl7 ? v.lvl7 : ''}
                    onChange={(e) => updateValue(index, 'lvl7', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={v.lvl8 ? v.lvl8 : ''}
                    onChange={(e) => updateValue(index, 'lvl8', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={v.lvl9 ? v.lvl9 : ''}
                    onChange={(e) => updateValue(index, 'lvl9', e.target.value)}
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

export default TechniqueTable
