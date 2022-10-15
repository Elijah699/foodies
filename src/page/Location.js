import React from 'react';
import styled from 'styled-components';
import { theme } from '../config';
import { FlexBetween } from '../components/Flex';
import { Button } from '../components';
import location from '../constants/images/location.png';

const Location = () => {
  return (
    <LocationContainer>
      <FlexBetween>
        <div className='col-one'>
          <img src={location} alt="location" />
        </div>
        <div className='col-two'>
          <h5>Our Locations in Lagos</h5>

          <div className='address'>
            Address 1: Somewhere in Lagos, area 1, street this <br />
            Address 2:Somewhat in Lagos, area 2, street that, <br />
            Address 3: Somewhere in Lagos, area 3, street this. <br />
            Address 4: Somewhere in Lagos, area 4, street this <br />
          </div>

          <p>
            We are all over lagos, available at your hood to serve you better.
            We wil always be at your service.
          </p>

          <Button>Check Locations</Button>
        </div>
      </FlexBetween>
    </LocationContainer>
  );
};

export default Location;

const LocationContainer = styled.div`
  margin: ${theme.margin.xxlg} ${theme.margin.xlg};
  padding: ${theme.padding.xmd} ${theme.padding.md};

  .col-one,
  .col-two {
    width: 45%;
  }

  .col-two {
    padding: ${theme.padding.md} 0;

    h5 {
      font-family: ${theme.fonts[2]};
      font-size: ${theme.fontSizes.bigTextTwo};
      font-weight: ${theme.fontWeight.normal};
      line-height: ${theme.lineHeights.bigTextTwo};
      color: ${theme.colors.black200};
      margin-block-start: 0;
    }

    .address,
    p {
      font-family: ${theme.fonts[1]};
      font-size: ${theme.fontSizes.smallText};
      font-weight: ${theme.fontWeight.normal};
      line-height: ${theme.lineHeights.smalltext};
      color: ${theme.colors.gray};
    }

    p {
      margin-bottom: ${theme.margin.xlg} !important;
    }
  }

  .col-one {
    img {
      border-radius: 24px;
      max-width: 100%;
    }
  }
`;
