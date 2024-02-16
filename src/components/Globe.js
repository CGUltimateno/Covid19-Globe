import React, { useRef, useEffect } from 'react';
import Globe from 'globe.gl';
import * as d3 from 'd3';
import { useNavigate } from 'react-router-dom';
import { numberWithCommas } from '../index';

const GlobeComponent = ({ countriesData, covidLatestData }) => {
  const globeContainer = document.getElementById('root');
  const globeEl = useRef();
  const colorScale = d3.scaleSequentialPow(d3.interpolateYlOrRd).exponent(1 / 4);
  const navigate = useNavigate();

    const goBack = () => { // Add this function
    navigate('/');
  };
  const getVal = feat => {
    if (covidLatestData[feat.properties.ADMIN]) {
      return covidLatestData[feat.properties.ADMIN].details.confirmed / feat.properties.POP_EST;
    } else {
      return 0; // Default value
    }
  };
  let flagName;
  const flagEndpoint = 'https://corona.lmao.ninja/assets/img/flags';

  useEffect(() => {
    if (!countriesData || countriesData.length === 0) return;

    const maxVal = Math.max(...countriesData.map(getVal));
    colorScale.domain([0, maxVal]);

    // Add COVID-19 visualizer HTML line
    const covidVisualizerHTML = document.createElement('div');
    covidVisualizerHTML.innerHTML = '<h1 style="position: absolute; top: 10px; color: white;">COVID-19 Visualizer</h1>';
    globeContainer.appendChild(covidVisualizerHTML);

    const globe = Globe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
      .showGraticules(false)
      .lineHoverPrecision(0)
      .polygonsData(countriesData.filter(d => d.properties.ISO_A2 !== 'AQ'))
      .polygonAltitude(0.06)
      .polygonCapColor(feat => colorScale(getVal(feat)))
      .polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
      .polygonStrokeColor(() => '#111')
      .polygonLabel(({ properties: d }) => {
        const countryName = d.ADMIN;
        const covidDetails = covidLatestData[countryName]?.details || { confirmed: 0, deaths: 0, recoveries: 0 };
        const population = d.POP_EST;
        const covidData = { ...covidDetails, population };
        if (d.ADMIN === 'France') {
          flagName = 'fr';
        } else if (d.ADMIN === 'Norway') {
          flagName = 'no';
        } else {
          flagName = d.ISO_A2.toLowerCase();
        }

        return `
          <div class="card">
            <img class="card-img" src="${flagEndpoint}/${flagName}.png" alt="flag" />
            <div class="container">
              <span class="card-title"><b>${d.NAME}</b></span> <br />
              <div class="card-spacer"></div>
              <hr />
              <div class="card-spacer"></div>
              <span>Cases: ${numberWithCommas(covidData.confirmed)}</span>  <br />
              <span>Deaths: ${numberWithCommas(covidData.deaths)}</span> <br />
              <span>Recovered: ${numberWithCommas(covidData.recoveries)}</span> <br />
              <span>Population: ${d3.format('.3s')(covidData.population)}</span>
            </div>
          </div>
        `;
      })
      .onPolygonHover(hoverD => {
        globe
          .polygonAltitude(d => (d === hoverD ? 0.12 : 0.06))
          .polygonCapColor(d => (d === hoverD ? 'steelblue' : colorScale(getVal(d))))
      })
      .polygonsTransitionDuration(300)
      (globeContainer);
  }, [countriesData, covidLatestData]);

  return (
      <div>
          <div className="top-info-container">
              <div className="title">COVID-19 Visualizer</div>
              <button id="back-button" className="back-button" onClick={goBack}>Back</button>
          </div>
          <div ref={globeEl}/>
      </div>
  );
};

export default GlobeComponent;
