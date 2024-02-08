import React, { useState, useEffect } from 'react';
import GlobeComponent from './components/Globe';

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [covidLatestData, setCovidLatestData] = useState({});

  useEffect(() => {
    // Fetch countries data
    fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson')
      .then(response => response.json())
      .then(data => {
        setCountriesData(data.features);
      })
      .catch(error => console.error('Error fetching countries data:', error));

    // Fetch latest covid data
    fetch('/latest.json')
      .then(response => response.json())
      .then(data => {
        setCovidLatestData(data);
      })
      .catch(error => console.error('Error fetching latest covid data:', error));
  }, []);

  return (
    <div className="App">
        <GlobeComponent countriesData={countriesData} covidLatestData={covidLatestData} />
    </div>
  );
}

export default App;