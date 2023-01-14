import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import HomePage from '../pages/HomePage'

const MainContent = () => {
  return (
    <div className="container-fluid p-3">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}>
          
        </Route>
      </Routes>
    </div>
  )
}

export default MainContent