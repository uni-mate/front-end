import React from "react"

import "./CustomButton.css"

interface Props {
  children: string
  inverse?: boolean
  type?: "button" | "submit" | "reset" | undefined
  className?: string
  width?: string
  height?: string
  isDisabled?: boolean
  onClick?: () => void
}

const CustomButton = ({
  children,
  inverse,
  className,
  width,
  height,
  isDisabled,
  onClick,
  ...props
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`auth-btn__container ${inverse ? "inverse" : ""}`}
      style={{ width: width, height: height }}
      {...props}
      disabled={isDisabled ? true : false}
    >
      {children}
    </button>
  )
}

export default CustomButton
