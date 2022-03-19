import React, { useState, createContext } from "react"

export const popupContext = createContext()

export const PopupState = ({ children }) => {
  const [show, setShow] = useState(false)
  const [menu, setMenu] = useState(false)

  /* Handles the show/hide state of the Popup Congratulations */
  const handlePopup = () => {
    setShow((show) => !show)
  }

  /* Handles the show/hide state of the Mobile navigation */
  const handleMenu = () => {
    setMenu((menu) => !menu)
  }

  /* Return value is the state and actions we want globally in our app */
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
