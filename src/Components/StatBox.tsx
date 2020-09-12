import React from 'react'

function StatBox(props: {
  classes?: string
  value: string | number | readonly string[] | undefined
  valueSave: string | number | readonly string[] | undefined
  abbreviation: string
  label: React.ReactNode
  onChange: (arg0: any, arg1: string) => void
  name: any
}) {
  let classes = 'espergen-statbox'
  if (props.classes) {
    classes += ' ' + props.classes
  }

  let modifier: string = ''
  if (props.value && !isNaN(Number(props.value))) {
    const modifierNum = Math.floor((Number(props.value) - 10) / 2)
    if (modifierNum > 0) {
      modifier = '+' + modifierNum
    } else {
      modifier = modifierNum.toString()
    }
  }

  return (
    <div className={classes}>
      <div className='espergen-statbox-value'>
        <input
          type='text'
          value={props.value ? props.value : ''}
          onChange={(e) => props.onChange(props.name, e.target.value)}
        />
      </div>
      <div>
        <label className='abbrev'>{props.abbreviation}</label>
        <hr />
        <label>{props.label}</label>
      </div>
      <div className='espergen-statbox-modifier'>{modifier}</div>
      <div className='espergen-statbox-value'>
        <input
          type='text'
          value={props.valueSave ? props.valueSave : ''}
          onChange={(e) => props.onChange(props.name + 'Save', e.target.value)}
        />
      </div>
    </div>
  )
}

export default StatBox
