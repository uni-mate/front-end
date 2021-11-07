import React from "react"

import "./CustomButton.css"

interface Props {
  children: string
  inverse?: boolean
  type?: "button" | "submit" | "reset" | undefined
  className?: string
  width?: string
  height?: string
  color?: string
  onClick?: () => void
}

const CustomButton = ({
  children,
  inverse,
  className,
  width,
  height,
  color,
  ...props
}: Props) => {
  return (
    <button
      className={`auth-btn__container ${inverse ? "inverse" : ""}`}
      style={{ width: width, height: height, color: color }}
      {...props}
    >
      {children}
    </button>
  )
}

export default CustomButton
