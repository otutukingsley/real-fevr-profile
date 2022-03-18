import React, { useState, createContext } from "react"

export const popupContext = createContext()

export const PopupState = ({ children }) => {
  const [show, setShow] = useState(false)

  const handlePopup = () => {
    setShow((show) => !show)
  }

  return (
    <popupContext.Provider
      value={{
        show,
        handlePopup,
        setShow,
      }}
    >
      {children}
    </popupContext.Provider>
  )
}
