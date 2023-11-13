import './button.css';

import React from "react"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type: "submit" | "button"
  className: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} transition-all`}
      type={type}>
      {children}
    </button>
  )
}
