import React from "react"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type: "primary" | "secondary" | "transparent" | "orange"
}

const Button: React.FC<ButtonProps> = ({
  children = "Button",
  onClick,
  disabled = false,
  type = "primary",
}) => {
  const base: string =
    "inline-flex text-md font-sans leading-6 font-semibold justify-center items-center rounded-large gap-2 disabled:cursor-not-allowed transition px-6 py-4 duration-300 border border-solid capitalize"
  const styles: Record<string, string> = {
    primary:
      base +
      "  text-white bg-dark-blue hover:bg-light-blue hover:text-black border-dark-blue hover:border-black  active:text-white active:bg-dark-blue active:border-dark-blue disable:bg-gray-300 disable:text-white",
    secondary:
      base +
      "  text-black  bg-transparent border-black active:text-white active:bg-black disable:bg-gray-300 disable:text-white",
    transparent:
      base +
      "  text-black bg-transparent border-transparent hover:bg-gray-100 hover:border-gray-100 active:border-transparent active:bg-transparent disable:bg-gray-300 disable:text-white",
    orange:
      base +
      "  text-white bg-orange hover:bg-dark-orange border-orange hover:border-dark-orange active:text-white active:bg-orange active:border-orange disable:bg-gray-300 disable:text-gray-300 disable=border-gray-300",
  }

  return (
    <button onClick={onClick} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  )
}

export default Button
