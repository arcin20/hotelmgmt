import '../components/Hotellist.css';

const Hotellist = ({hotels}) => {
    return (
        <div className="hotellist">
           { hotels.map((hotel) => (
                <div className="card" key={hotel.zimmeranzahl}>
                <p className="card-name">{hotel.hotelname}</p>
          <p>{hotel.adresse}</p>
          <p>{hotel.zimmeranzahl}</p>
         
                </div>
                ))}
    </div>
  );
}
export default Hotellist;