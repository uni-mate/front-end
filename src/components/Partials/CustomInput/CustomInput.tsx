import React from "react"

import "./CustomInput.css"

interface Props {
  min?: string
  max?: string
  step?: string
  width?: string
  type?: string
  id?: string
  name?: string
  value?: string
  placeholder?: string
  readOnly?: boolean
  onChange?: (e: React.ChangeEvent<Element>) => void
}

const CustomInput = (props: Props) => {
  return (
    <input
      className="autn-input__container"
      style={{ width: props.width }}
      {...props}
      size={12}
    />
  )
}

export default CustomInput
