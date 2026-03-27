import {Toaster} from 'sonner';
import{BrowserRouter, Routes, Route} from 'react-router';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Combo from './pages/Combo';
import Contact from './pages/Contact';



function App() {

  return (
    <>
    <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/combo' element={<Combo />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
