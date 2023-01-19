import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import AddMovie from '../pages/AddMovie'
import HomePage from '../pages/HomePage'

const MainContent = () => {
  return (
    <div className="container-fluid p-3">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}>
        </Route>
        <Route path="/movies/create" element={<AddMovie></AddMovie>}>
        </Route>
      </Routes>
    </div>
  )
}

export default MainContent