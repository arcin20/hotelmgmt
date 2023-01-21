
const ZimmerAnzahl = ({zimmermenge}) => {
    return (
        <div className="hotellist">
           { zimmermenge.map((anzahlZimmer) => (
                <div className="card" key={anzahlZimmer.zimmeranzahl}>
                
          <p>{anzahlZimmer.zimmeranzahl}</p>
         
                </div>
                ))}
    </div>
  );
}
export default ZimmerAnzahl;
