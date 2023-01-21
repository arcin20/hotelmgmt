import '../components/hotellist.css';


const Hotellist = ({hotels}) => {
  
  
    return (
        <div>
           {hotels && hotels.map((hotel) => (
                <div name="name" key={hotel.hotelname}>
                <p className="card-name">{hotel.hotelname}</p>
          <p>{hotel.adresse}</p>
          <p>{hotel.zimmeranzahl}</p>
         
                </div>
                ))}
                
    </div>
  );
}
export default Hotellist;