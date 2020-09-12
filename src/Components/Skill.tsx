import React from 'react'

function Skill(props: {
  classes?: string
  checked?: boolean
  onChange: (arg0: string, arg1: string | boolean) => void
  name: string
  value: string | number | readonly string[] | undefined
  label?: React.ReactNode
  hint?: React.ReactNode
}) {
  let classes = 'espergen-skill'
  if (props.classes) {
    classes += ' ' + props.classes
  }

  return (
    <div className={classes}>
      <div
        className={
          props.checked ? 'espergen-skill-circle active' : 'espergen-skill-circle'
        }
        onClick={() => props.onChange(props.name + 'Checked', !props.checked)}
      />
      <input
        type='text'
        value={props.value ? props.value : ''}
        onChange={(e) => props.onChange(props.name, e.target.value)}
      />
      <label>{props.label}</label>
      {props.hint ? (
        <span className='espergen-skill-hint'>{props.hint}</span>
      ) : null}
    </div>
  )
}

export default Skill
