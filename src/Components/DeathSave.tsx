import React from 'react'

function DeathSave(props: {
  classes?: string
  label: React.ReactNode
  value?: number
  onChange: (arg0: any, arg1: number | null) => void
  name: any
}) {
  let classes = 'espergen-deathsave'
  if (props.classes) {
    classes += ' ' + props.classes
  }

  return (
    <div className={classes}>
      <label>{props.label}</label>
      <div style={{ display: 'inline-block' }}>
        <div
          className={
            props.value && props.value >= 1
              ? 'espergen-skill-circle active'
              : 'espergen-skill-circle'
          }
          onClick={() =>
            props.onChange(props.name, props.value === 1 ? null : 1)
          }
        />
        =
        <div
          className={
            props.value && props.value >= 2
              ? 'espergen-skill-circle active'
              : 'espergen-skill-circle'
          }
          onClick={() =>
            props.onChange(props.name, props.value === 2 ? null : 2)
          }
        />
        =
        <div
          className={
            props.value && props.value >= 3
              ? 'espergen-skill-circle active'
              : 'espergen-skill-circle'
          }
          onClick={() =>
            props.onChange(props.name, props.value === 3 ? null : 3)
          }
        />
      </div>
    </div>
  )
}

export default DeathSave
