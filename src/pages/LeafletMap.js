import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { mapActions } from "../store/mapSlice";

const Map = () => {
  const dispatch = useDispatch();
  const [showCountry, setShowCountry] = useState(null);
  const countryData = useSelector((state) => state.map.countryData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://disease.sh/v3/covid-19/countries"
      );
      const data = response.data;
      dispatch(mapActions.addCountryData({ countryData: data }));
    };
    fetchData();
  }, [dispatch]);

  return (
      <MapContainer
        style={{width: "100%", height: "100vh"}}
        center={[20.593683, 78.962883]}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {countryData.map((country) => (
          <Marker
            key={Math.random()}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            eventHandlers={{
                click: () =>{
                    setShowCountry(country)
                }
            }}
          />
        ))}
        {showCountry && (
            <Popup
            position={ [ showCountry.countryInfo.lat, showCountry.countryInfo.long ] }
            onClose={()=>{
               setShowCountry(null)
             }}
           >
             <div>
              <h1>{ showCountry.country }</h1>
              <p>Total cases:  { showCountry.cases }</p>
              <p>Active cases: {showCountry.active} </p>
              <p>Recovered cases: {showCountry.recovered} </p>
              <p>Deaths: {showCountry.deaths} </p>
            </div>
          </Popup>
        )}
      </MapContainer>
  );
};

export default Map;
