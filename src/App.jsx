import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Builder from './components/Builder'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/builder" element={<Builder />} />
    </Routes>
  )
}
