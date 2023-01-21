import { createContext, useState } from "react";


export const addHotelItem = (zimmeranzahl, roomToAdd) => {

  return [...zimmeranzahl, {...roomToAdd}]
}

// Zugriff auf den aktuellen Wert
export const ZimmerGastContext = createContext({
    zimmeranzahl: [],
    addHotelToCheckin: () => 0,
})




export const ZimmerGastProvider = ({children}) => {
    const [zimmeranzahl, setZimmeranzahl] = useState([]);
    

    const addHotelToCheckin = (roomToAdd) => {
            setZimmeranzahl(addHotelItem(zimmeranzahl, roomToAdd))
    }

    const value = {zimmeranzahl, setZimmeranzahl, addHotelToCheckin};

    return <ZimmerGastContext.Provider value={value}>{children}</ZimmerGastContext.Provider>
}