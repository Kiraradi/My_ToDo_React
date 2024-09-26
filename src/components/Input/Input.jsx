import React from 'react'

const Input = (props) => {
  return (
    <input onChange={props.onChange} value={props.value} className={props.className} placeholder={props.placeholder} />
  )
}

export default Input;
