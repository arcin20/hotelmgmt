
import './App.css';
import Hotelinfo from './routes/hotelinfo/hotelinfo.component';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

const App = () => {
  
  

  return (
    <div className='app'>
      
      <div>
        <Routes>
          <Route path='/' element={<Navigation />} >
          < Route index element={<Home />} />
          <Route path='/hotelinfo' element={<Hotelinfo />} />
          <Route path='/anmelden' element={<SignIn />} />
          </Route>
      </Routes>
      </div>
    </div>
  )
 
}
 
export default App;
