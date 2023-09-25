import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Opportunity from './pages/Opportunity'
import Users from './pages/Users'
import Share from './pages/Share'
import Favorite from './pages/Favorite'
import Settings from './pages/Settings'
import CompanyOpportunity from './pages/CompanyOpportunity'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/opportunity' element={<Opportunity />} />
          <Route path='/opportunity/:company' element={<CompanyOpportunity />} />
          <Route path='/users' element={<Users />} />
          <Route path='/share' element={<Share />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
