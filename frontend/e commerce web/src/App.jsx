import './App.css'
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