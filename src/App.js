
import './App.css';
import Hotelinfo from './routes/hotelinfo/hotelinfo.component';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication  from './routes/authentication/authentication.component';
import Buchungen from './routes/buchungen/buchungen.component';
import CheckIn from './routes/checkin/checkin.component';

const App = () => {
  
  

  return (
    <div className='app'>
      
      <div>
        <Routes>
          <Route path='/' element={<Navigation />} >
          < Route index element={<Home />} />
          <Route path='/hotelinfo' element={<Hotelinfo />} />
          <Route path='/buchungen' element={<Buchungen />} />
          <Route path='/checkin' element={<CheckIn />} />
          <Route path='/anmelden' element={<Authentication />} />
          </Route>
      </Routes>
      </div>
    </div>
  )
  
}
 
export default App;
