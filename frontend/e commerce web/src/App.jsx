import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomerHomePage from './pages/CustomerHomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerHomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App