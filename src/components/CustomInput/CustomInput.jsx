import React from 'react'

const CustomInput = (props) => {
  return (
    <input onChange={props.onChange} value={props.value} className={props.className} placeholder={props.placeholder} />
  )
}

export default CustomInput;
