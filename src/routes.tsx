import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import { restaurants } from './pages/objects/objects'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path={restaurants[0].name} element={<Restaurant id={0} />} />
    <Route path={restaurants[1].name} element={<Restaurant id={1} />} />
  </Routes>
)

export default Rotas
