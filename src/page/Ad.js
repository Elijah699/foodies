import React from 'react';
import styled from 'styled-components';
import { Flex } from '../components/Flex';
import iPhone from '../constants/images/iPhone 11 Pro Max - 1.png';

const Ad = () => {
  return (
    <AdContainer>
      <Flex>
        <div>
          <h4>Get 10% Off using our App</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus.
          </p>

          <button>Download App</button>
        </div>
        <div>
          <img src={iPhone} alt="iphone" />
        </div>
      </Flex>
    </AdContainer>
  );
};

export default Ad;

const AdContainer = styled.div``;
