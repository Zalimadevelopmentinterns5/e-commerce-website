import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomerHomePage from './pages/CustomerHomePage'
import StorefrontPage from './pages/StorefrontPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerHomePage />} />
        <Route path="/storefront" element={<StorefrontPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App