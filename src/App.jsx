import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slider from './components/Slider';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Slider /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
