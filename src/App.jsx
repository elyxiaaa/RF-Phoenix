import Home from './Pages/Home'
import OngoingEvents from './Components/OngoingEvents'
import Rule from './Pages/Rule'
import Donate from './Pages/Donate'
import Download from './Pages/Download'
import Guides from './Pages/Guides'
import Combination from './Pages/Combination'
import FarmSite from './Pages/FarmSite'
import DropList from './Pages/DropList'
import ArmorTypes from './Pages/ArmorTypes'
import Footer from './Components/Footer'
import Interface from './Pages/Interface'
import ScrollToTop from './Components/ScrollToTop'


import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (

    <>
      <BrowserRouter>
      <ScrollToTop/>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Rule" element={<Rule/>}/>
          <Route path="/Donate" element={<Donate/>}/>
          <Route path="/Guides" element={<Guides/>}/>
          <Route path="/Combination" element={<Combination/>}/>
          <Route path="/DropList" element={<DropList/>}/>
          <Route path="/FarmSite" element={<FarmSite/>}/>
          <Route path="/ArmorTypes" element={<ArmorTypes/>}/>
          <Route path="/Download" element={<Download/>}/>
          <Route path="/Interface" element={<Interface/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
