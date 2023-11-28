import { useState } from 'react';

import './App.css';
import Tabel from './Tabel';
import NewLocation from './NewLocation';
import LocationName from './LocationName';


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(undefined);
  const [selectedLocationWeather, setSelectedLocationWeather] = useState(undefined);
  const [locations, setLocations] = useState([
    {
      name: 'Tallinn',
      latitude: 59.4370,
      longitude: 24.7536,
    },
    {
      name: 'Bali',
      latitude: -8.4095,
      longitude: 115.1889,
    },
  ]);

  const selectLocation = (location) => {
    setSelectedLocation(location);
    getLocationData(location);
  }

  const getLocationData = async (location) => {
    setIsLoading(true);
    const data = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,wind_speed_10m_max&timezone=auto`);
    const dataJson = await data.json();
    setIsLoading(false);
    setSelectedLocationWeather(dataJson);
  }


  return (
    <div className="App" className="main">
      <header className="App-header" style={{ display: 'flex', flexDirection: 'row', gap: 24, padding: 24 }}>
        <div style={{ borderRight: '1px solid gray', padding: '0 24px 0 0' }}>

          <NewLocation locations={locations} selectLocation={selectLocation} setLocations={setLocations} />

        </div>
        <div style={{ textAlign: 'left' }}>
          {selectedLocation ? (
            <>
              <LocationName selectedLocation={selectedLocation} />
              {isLoading ?
                'Laen...' :
                <Tabel ilm={selectedLocationWeather} />}
            </>
          ) : (
            <>
              <h3>No weather forecast available</h3>
              <div>Please select a location!</div>
            </>
          )}
        </div>
      </header>
    </div >
  );
}

export default App;