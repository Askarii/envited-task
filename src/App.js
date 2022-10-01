import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AppRoute from './routes/AppRoute'

//pages
import Landing from './pages/landing/Landing'
import Create from './pages/create/Create'
import Event from './pages/event/Event'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppRoute />}>
          <Route index path="/" element={<Landing />} />
          <Route index path="/create" element={<Create />} />
          <Route index path="/event" element={<Event />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App