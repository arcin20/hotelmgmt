import { useContext } from "react";
import { ZimmerGastContext } from "../../contexts/zimmer_gast.context";
import Hotellist from '../../components/hotellist';

const Buchungen = () => {
   const {zimmeranzahl} = useContext(ZimmerGastContext);
    
    return (
        <div>
        <h1>Buchungen</h1>
        <div  name="name">
           { zimmeranzahl.map(roomanzahl => <Hotellist name={roomanzahl.name} hotel={roomanzahl} /> )}

        </div>
        
        </div>
    )
}

export default Buchungen;
