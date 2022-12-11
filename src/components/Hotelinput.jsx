
import '../components/hotelinput.css';
import { useState } from 'react';

const Hotelinput = ({addHotel}) => { 
const [hotelinfo, setHotelinfo] = useState(
  {
    hotelname: "",
    adresse:"",
    zimmeranzahl:"",
  }
)

const handleChange = (event) => {
  setHotelinfo({...hotelinfo, [event.target.name]: event.target.value})
  
}

const handleSubmit = (event) => {
  event.preventDefault();
 
  addHotel(hotelinfo);
  setHotelinfo({hotelname: "", adresse:"", zimmeranzahl:"" })
}

<form onSubmit={handleSubmit}/>



 

  return (



    <div className="form-container">
      <form onSubmit={handleSubmit} > 
        <div>

      <input id="input1" type="text" name="hotelname" placeholder="Hotelname" value={hotelinfo.hotelname} onChange={handleChange} required />
      <input id="input4" type="text" name="adresse" placeholder="Straße" value={hotelinfo.adresse} onChange={handleChange} required />
      <input id="input5" type="number" name="zimmeranzahl" placeholder="Anzahl der Zimmer" value={hotelinfo.zimmeranzahl} onChange={handleChange} required />
      <button >Speichern</button>
    </div>

   
    </form>
    </div>

  )


}

export default Hotelinput;