import React from 'react'

function DeathSave(props: {
  classes?: string
  label: React.ReactNode
  valueSuccess?: number
  valueFailure?: number
  onChange: (arg0: any, arg1: number | null) => void
  name: any
}) {
  let classes = 'espergen-deathsave'
  if (props.classes) {
    classes += ' ' + props.classes
  }

  function renderHex(
    value: number | null | undefined,
    number: number | null,
    type: number | null
  ) {
    let cn = type && type > 0 ? 'deathsave' : 'deathsave fake'
    if (type === 2) {
      cn += ' failure'
    }
    if (value && number && value >= number) {
      cn += ' active'
    }
    if (number === 2) {
      cn += ' even'
    }

    let text = ''
    let click: any = null
    if (type && type > 0) {
      text =
        number === 1 ? 'I' : number === 2 ? 'II' : number === 3 ? 'III' : ''
      click =
        type === 1
          ? () =>
              props.onChange(
                props.name + 'Successes',
                value === number ? null : number
              )
          : () =>
              props.onChange(
                props.name + 'Failures',
                value === number ? null : number
              )
    }

    return (
      <div className={cn} onClick={click}>
        <div className='left' />
        <div className='middle'>{text}</div>
        <div className='right' />
      </div>
    )
  }

  return (
    <div className={classes}>
      <div className='deathsave-row'>
        {renderHex(null, 1, 0)}
        {renderHex(props.valueSuccess, 2, 1)}
        {renderHex(null, 3, 0)}
      </div>
      <div className='deathsave-row'>
        {renderHex(props.valueSuccess, 1, 1)}
        {renderHex(null, 2, 0)}
        {renderHex(props.valueSuccess, 3, 1)}
        <label className='ml-3 mb-0' style={{ paddingTop: '5px' }}>
          Survive
        </label>
      </div>
      <div className='deathsave-row'>
        {renderHex(props.valueFailure, 1, 2)}
        {renderHex(props.valueFailure, 2, 2)}
        {renderHex(props.valueFailure, 3, 2)}
        <label className='ml-3 mb-0' style={{ paddingTop: '5px' }}>
          Perish
        </label>
      </div>
    </div>
  )
}

export default DeathSave
