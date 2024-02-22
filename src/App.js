import React, { useState, useEffect } from 'react';
import GlobeComponent from './components/Globe';
import LandingPage from './components/landingpage';
import {HashRouter as Router, Navigate, Route, Routes} from 'react-router-dom';

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
    fetch('https://raw.githubusercontent.com/CGUltimateno/Covid19-Globe/master/public/latest.json')
      .then(response => response.json())
      .then(data => {
        setCovidLatestData(data);
      })
      .catch(error => console.error('Error fetching latest covid data:', error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/Covid19-Globe/globe" element={<GlobeComponent countriesData={countriesData} covidLatestData={covidLatestData} />} />
        <Route path="/Covid19-Globe" element={<LandingPage />} />
        <Route path="/Covid19-Globe" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
