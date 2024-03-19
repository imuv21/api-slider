import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slider from './components/Slider';
import Signup from './pages/Signup';
import Otp from './pages/Otp';
import SellerForm from './pages/SellerForm';
import SellerDash from './pages/SellerDash';
import Progress from './components/Progress';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/slider' element={< Slider /> } />
          <Route path='/' element={< Signup /> } />
          <Route path='/seller-form' element={<SellerForm  /> } />
          <Route path='/otp' element={< Otp /> } />
          <Route path='/seller-dash' element={< SellerDash /> } />
          <Route path='/progress' element={< Progress /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
