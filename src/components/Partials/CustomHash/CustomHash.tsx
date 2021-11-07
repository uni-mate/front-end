import React from "react"

import "./CustomHash.css"

interface Props {
  children: string
}

const CustomHash = ({ children }: Props) => {
  return <div className="hashtag">{children}</div>
}

export default CustomHash
