import React, { useRef, useEffect } from 'react';
import Globe from 'globe.gl';
import { scaleSequential } from 'd3-scale';
import { interpolateRgb } from 'd3-interpolate';

const GlobeComponent = ({ countriesData, covidData }) => {
  const globeEl = useRef();

  useEffect(() => {
    if (countriesData.length === 0 || Object.keys(covidData).length === 0) return;

    // Create color scale
    const colorScale = scaleSequential(interpolateRgb("blue", "red")).domain([0, 1000000]); // Adjust domain to suit your data

    const globe = Globe()(globeEl.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .polygonsData(countriesData)
      .polygonAltitude(0.1)
      .polygonCapColor(d => {
        const countryName = d.properties.NAME;
        if (covidData.hasOwnProperty(countryName)) {
          const countryDetails = covidData[countryName].details;
          return colorScale(countryDetails.confirmed); // Use color scale to set color based on confirmed cases
        } else {
          return 'gray'; // Default color for countries not in covidData
        }
      })
      .polygonStrokeColor(() => '#111')
      .pointAltitude('size')
      .pointColor('color')
      .onPointHover(point => console.log(point))
      .onPointClick(point => console.log(point));

    // Clean up function
    return () => {
      globe.resetProps(); // Reset props to avoid memory leaks
    };
  }, [countriesData, covidData]);

  return <div ref={globeEl} />;
};

export default GlobeComponent;
