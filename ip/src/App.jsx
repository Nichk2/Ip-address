import React, { useState } from 'react';
import styled from 'styled-components';
import Header, { InputCoord, InputButton } from '../Components/Header';
import LocationTracker from '../Components/DataBar';
import Arrow from '../Images/icon-arrow.svg';
import GlobalStyle from '../Components/GlobalStyle';
import 'leaflet/dist/leaflet.css';
import MapComponent from '../Components/MapComponent';


const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [latitude, setLatitude] = useState(51.505); // Default latitude
  const [longitude, setLongitude] = useState(-0.09); // Default longitude

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchValue(inputValue);
  };

  return (
    <>
    <GlobalStyle/>
      <Header>
        <div>
          <h1>IP Address Tracker</h1>
          <div>
            <InputCoord
              type="text"
              placeholder="Search for any IP address or domain"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <InputButton onClick={handleSearch}>
              <img src={Arrow} alt="Search" />
            </InputButton>
          </div>
        </div>
        <LocationTracker searchValue={searchValue} setLatitude={setLatitude} setLongitude={setLongitude} />
      </Header>

     

      {/* Render the map */}
      <MapComponent latitude={latitude} longitude={longitude} />
    </>
  );
};

export default App;