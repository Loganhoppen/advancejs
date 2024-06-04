"use client";

import React, { ReactNode, useState } from 'react';
import { createConverter } from '../utilities/createConverter';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  
  const [weightInput, setWeightInput] = useState('');
  const [weightOutput, setWeightOutput] = useState('');

  
  const [distanceInput, setDistanceInput] = useState('');
  const [distanceOutput, setDistanceOutput] = useState('');

  
  const [temperatureInput, setTemperatureInput] = useState('');
  const [temperatureOutput, setTemperatureOutput] = useState('');

  const handleWeightConversion = (fromUnit: string, toUnit: string) => {
    const convertFn = createConverter(fromUnit, toUnit);
    const value = parseFloat(weightInput);
    if (!isNaN(value)) {
      setWeightOutput(convertFn(value).toString());
    }
  };

  const handleDistanceConversion = (fromUnit: string, toUnit: string) => {
    const convertFn = createConverter(fromUnit, toUnit);
    const value = parseFloat(distanceInput);
    if (!isNaN(value)) {
      setDistanceOutput(convertFn(value).toString());
    }
  };

  const handleTemperatureConversion = (fromUnit: string, toUnit: string) => {
    const convertFn = createConverter(fromUnit, toUnit);
    const value = parseFloat(temperatureInput);
    if (!isNaN(value)) {
      setTemperatureOutput(convertFn(value).toString());
    }
  };

  return (
    <div className="container mx-auto p-4">
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li><a href="#weight" className="text-blue-500">Weight</a></li>
          <li><a href="#distance" className="text-blue-500">Distance</a></li>
          <li><a href="#temperature" className="text-blue-500">Temperature</a></li>
        </ul>
      </nav>

      <div id="weight" className="mb-8">
        <h2 className="text-xl font-bold mb-2">Weight Conversion</h2>
        <input
          type="text"
          value={weightInput}
          onChange={(e) => setWeightInput(e.target.value)}
          className="border p-2 mb-2"
          placeholder="Enter value"
        />
        <button
          onClick={() => handleWeightConversion('lb', 'kg')}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Convert lb to kg
        </button>
        <button
          onClick={() => handleWeightConversion('kg', 'lb')}
          className="bg-blue-500 text-white p-2 rounded ml-2"
        >
          Convert kg to lb
        </button>
        <div className="mt-4">Output: {weightOutput}</div>
      </div>

      <div id="distance" className="mb-8">
        <h2 className="text-xl font-bold mb-2">Distance Conversion</h2>
        <input
          type="text"
          value={distanceInput}
          onChange={(e) => setDistanceInput(e.target.value)}
          className="border p-2 mb-2"
          placeholder="Enter value"
        />
        <button
          onClick={() => handleDistanceConversion('miles', 'km')}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Convert miles to km
        </button>
        <button
          onClick={() => handleDistanceConversion('km', 'miles')}
          className="bg-blue-500 text-white p-2 rounded ml-2"
        >
          Convert km to miles
        </button>
        <div className="mt-4">Output: {distanceOutput}</div>
      </div>

      <div id="temperature" className="mb-8">
        <h2 className="text-xl font-bold mb-2">Temperature Conversion</h2>
        <input
          type="text"
          value={temperatureInput}
          onChange={(e) => setTemperatureInput(e.target.value)}
          className="border p-2 mb-2"
          placeholder="Enter value"
        />
        <button
          onClick={() => handleTemperatureConversion('c', 'f')}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Convert °C to °F
        </button>
        <button
          onClick={() => handleTemperatureConversion('f', 'c')}
          className="bg-blue-500 text-white p-2 rounded ml-2"
        >
          Convert °F to °C
        </button>
        <div className="mt-4">Output: {temperatureOutput}</div>
      </div>

      {children}
    </div>
  );
};

export default Layout;
