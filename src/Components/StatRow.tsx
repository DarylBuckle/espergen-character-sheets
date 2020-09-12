import React from 'react'

function StatRow(props: {
  classes?: string
  value: string | number | readonly string[] | undefined
  onChange: (arg0: any, arg1: string) => void
  name: any
  label: React.ReactNode
}) {
  let classes = 'espergen-statrow'
  if (props.classes) {
    classes += ' ' + props.classes
  }

  return (
    <div className={classes}>
      <div className='espergen-statrow-value'>
        <input
          type='text'
          value={props.value ? props.value : ''}
          onChange={(e) => props.onChange(props.name, e.target.value)}
        />
      </div>
      <div className='espergen-statrow-label'>
        <label>{props.label}</label>
      </div>
    </div>
  )
}

export default StatRow
