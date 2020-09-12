import React from 'react'

function Currency(props: {
  classes?: string
  label: React.ReactNode
  value: string | number | readonly string[] | undefined
  onChange: (arg0: any, arg1: string) => void
  name: any
}) {
  let classes = 'espergen-currency'
  if (props.classes) {
    classes += ' ' + props.classes
  }

  return (
    <div className={classes}>
      <div className='espergen-currency-label'>
        <label>{props.label}</label>
      </div>
      <div className='espergen-currency-value'>
        <input
          type='text'
          value={props.value ? props.value : ''}
          onChange={(e) => props.onChange(props.name, e.target.value)}
        />
      </div>
    </div>
  )
}

export default Currency
