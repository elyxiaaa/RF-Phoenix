import Home from './Pages/Home'
import OngoingEvents from './Components/OngoingEvents'
import Rule from './Pages/Rule'
import Donate from './Pages/Donate'
import Download from './Pages/Download'
import Guides from './Pages/Guides'
import Page from './Pages/Page'
import Footer from './Components/Footer'


import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Home/> <OngoingEvents/> <Footer/> </>}/>
          <Route path="/Rule" element={<Rule/>}/>
          <Route path="/Donate" element={<Donate/>}/>
          <Route path="/Download" element={<Download/>}/>
          <Route path="/Guides" element={<Guides/>}/>
          <Route path="/Page" element={<Page/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
