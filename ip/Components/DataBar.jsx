

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const LocationTracker = ({ searchValue, setLatitude, setLongitude }) => {
  const [ipAddress, setIpAddress] = useState('Loading...');
  const [location, setLocation] = useState('Loading...');
  const [timezone, setTimezone] = useState('Loading...');
  const [isp, setIsp] = useState('Loading...');

  useEffect(() => {
    fetchLocationData(searchValue);
  }, [searchValue]);

  const fetchLocationData = async (ipOrDomain = '') => {
    try {
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_kyrcAcpZOUdOcQkBxkGB22HTENrz2&ipAddress=${ipOrDomain}`
      );

      const data = response.data;
      setIpAddress(data.ip);
      setLocation(`${data.location.city}, ${data.location.region}, ${data.location.country}`);
      setTimezone(`UTC ${data.location.timezone}`);
      setIsp(data.isp);

      // Update latitude and longitude for the map
      setLatitude(data.location.lat);
      setLongitude(data.location.lng);
    } catch (error) {
      console.error('Error fetching location data:', error);
      setIpAddress('Unable to fetch IP');
      setLocation('Error fetching data');
      setTimezone('Error fetching data');
      setIsp('Error fetching data');
    }
  };

  return (
    <>
      <HeaderList>
        <ListItem><strong>IP Address:</strong> {ipAddress}</ListItem>
        <ListItem><strong>Location:</strong> {location}</ListItem>
        <ListItem><strong>Timezone:</strong> {timezone}</ListItem>
        <ListItem><strong>ISP:</strong> {isp}</ListItem>
      </HeaderList>
      <DataBar>
        <DataSection>
          <SectionTitle>IP ADDRESS</SectionTitle>
          <SectionValue>{ipAddress}</SectionValue>
        </DataSection>
        <Division />
        <DataSection>
          <SectionTitle>LOCATION</SectionTitle>
          <SectionValue>{location}</SectionValue>
        </DataSection>
        <Division />
        <DataSection>
          <SectionTitle>TIMEZONE</SectionTitle>
          <SectionValue>{timezone}</SectionValue>
        </DataSection>
        <Division />
        <DataSection>
          <SectionTitle>ISP</SectionTitle>
          <SectionValue>{isp}</SectionValue>
        </DataSection>
      </DataBar>
    </>
  );
};

const HeaderList = styled.ul`
  display: none;
  list-style: none;
  padding: 10px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;

  @media (max-width: 768px) {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
`;

const ListItem = styled.li`
  font-size: 0.9rem;
  padding: 5px 0;
  color: #333;
`;

const DataBar = styled.div`
  width: 80%;
  background-color: white;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 20px;
  position: relative;
  bottom: -30px;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Division = styled.hr`
  width: 40px;
  rotate: 90deg;
  margin: 0 auto;
  border: 0.5px solid #d2d2d2;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DataSection = styled.div`
  text-align: left;
  padding: 0 20px;
  height: 60px;
  margin-top: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 0.8rem;
  color: #7a7a7a;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const SectionValue = styled.p`
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
  margin: 0;
`;

export default LocationTracker;
