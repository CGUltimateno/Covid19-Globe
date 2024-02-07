import React, { useState, useEffect } from 'react';
import GlobeComponent from './components/Globe';

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [tinyCountriesData, setTinyCountriesData] = useState([]);
  const [covidData, setCovidData] = useState({});

useEffect(() => {
  // Fetch countries data
  fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson')
    .then(response => response.json())
    .then(data => setCountriesData(data.features))
    .catch(error => console.error('Error fetching countries data:', error));

  // Fetch tiny countries data
  fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_tiny_countries.geojson')
    .then(response => response.json())
    .then(data => setTinyCountriesData(data.features))
    .catch(error => console.error('Error fetching tiny countries data:', error));

  // Fetch covid data
  fetch('https://raw.githubusercontent.com/wobsoriano/covid3d/master/data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => setCovidData(data))
    .catch(error => {
      console.error('Error fetching covid data:', error);

      // Check if there's a response object and log its text
      if (error.response) {
        return error.response.text().then(text => console.error('Response text:', text));
      }
    });
}, []);



  return (
    <div className="App">
      <GlobeComponent countriesData={countriesData} tinyCountriesData={tinyCountriesData} covidData={covidData} />
    </div>
  );
}


export default App;