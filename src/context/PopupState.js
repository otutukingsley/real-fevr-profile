import React, { useState, createContext } from "react"

export const popupContext = createContext()

export const PopupState = ({ children }) => {
  const [show, setShow] = useState(false)
  const [menu, setMenu] = useState(false)

  const handlePopup = () => {
    setShow((show) => !show)
  }
  const handleMenu = () => {
    setMenu((menu) => !menu)
  }

  return (
    <popupContext.Provider
      value={{
        show,
        menu,
        handlePopup,
        handleMenu,
        setShow,
        setMenu,
      }}
    >
      {children}
    </popupContext.Provider>
  )
}
