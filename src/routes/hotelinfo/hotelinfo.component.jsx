import Hotelinput from '../../components/Hotelinput.jsx';
import { useState } from 'react';
import Hotellist from "../../components/Hotellist.jsx";



const Hotelinfo = () => {
  
  const [hotels, updateHotels] = useState([]);

  const addHotel = (hotel) => {
      updateHotels([...hotels, hotel]);
  }
 

  return (
    <div className='app'>
      <h1 className='text-center'>Hotel</h1>
      <div>
      <Hotelinput addHotel={addHotel} />
      <Hotellist hotels={hotels}/>
      </div>
    </div>
  )
 
}
 
export default Hotelinfo;
