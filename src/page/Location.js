import React from 'react';
import styled from 'styled-components';
import { Flex } from '../components/Flex';
import location from '../constants/images/location.png';

const Location = () => {
  return (
    <LocationContainer>
      <Flex>
        <div>
          <img src={location} alt="location" />
        </div>
        <div>
          <h5>Our Locations in Lagos</h5>

          <div>
            Address 1: Somewhere in Lagos, area 1, street this <br />
            Address 2:Somewhat in Lagos, area 2, street that, <br />
            Address 3: Somewhere in Lagos, area 3, street this. <br />
            Address 4: Somewhere in Lagos, area 4, street this <br />
          </div>

          <p>
            We are all over lagos, available at your hood to serve you better.
            We wil always be at your service.
          </p>

          <button>Check Locations</button>
        </div>
      </Flex>
    </LocationContainer>
  );
};

export default Location;

const LocationContainer = styled.div``;
