import React from "react"

import "./CustomInput.css"

interface Props {
  type: string
  id: string
  name: string
  value: string
  placeholder: string
  onChange: (e: React.ChangeEvent<Element>) => void
}

const CustomInput = (props: Props) => {
  return <input className="autn-input__container" {...props} size={12} />
}

export default CustomInput
