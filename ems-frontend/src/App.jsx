import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import ListEmployee from './components/ListEmployee'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <h1>Employee Information Management System</h1>
        <Routes>
          <Route path="/" element={<ListEmployee />}></Route>
          <Route path="/employee" element={<ListEmployee />}></Route>
          <Route path='add-employee' element= {<EmployeeComponent />}></Route>

          <Route path='/edit-employee/:id' element = { <EmployeeComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
