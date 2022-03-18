import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { PopupState } from "./context/PopupState"

const App = () => {
  return (
    <PopupState>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </PopupState>
  )
}

export default App
