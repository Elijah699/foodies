import React from 'react';
import styled from 'styled-components';
import { theme } from '../config';
import { FlexBetween } from '../components/Flex';
import { Button } from '../components';
// image
import iPhone from '../constants/images/iPhone 11 Pro Max - 1.png';

const Ad = () => {
  return (
    <AdContainer>
      <FlexContainer>
        <div className="col-one">
          <h5>Get 10% Off using our App</h5>
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

          <Button>Download App</Button>
        </div>
        <div className="col-two">
          <img src={iPhone} alt="iphone" />
        </div>
      </FlexContainer>
    </AdContainer>
  );
};

export default Ad;

const AdContainer = styled.div`
  margin: ${theme.margin.xxlg} ${theme.margin.xlg};
  padding: ${theme.padding.xmd} ${theme.padding.md};

  .col-one,
  .col-two {
    width: 45%;
  }

  .col-one {
    padding: ${theme.padding.lg} ${theme.padding.xxlg};

    h5 {
      font-family: ${theme.fonts[2]};
      font-size: ${theme.fontSizes.bigTextTwo};
      font-weight: ${theme.fontWeight.normal};
      line-height: ${theme.lineHeights.bigTextTwo};
      color: ${theme.colors.white};
      margin-block-start: 0;
      margin-block-end: 0;
    }

    p {
      font-family: ${theme.fonts[1]};
      font-size: ${theme.fontSizes.smallText};
      font-weight: ${theme.fontWeight.normal};
      line-height: ${theme.lineHeights.smalltext};
      color: ${theme.colors.gray};
      margin: ${theme.margin.lg} 0 !important;
    }
  }

  .col-two {
    text-align: center;

    img {
      width: 300px;
    }
  }
`;


const FlexContainer = styled(FlexBetween)`
  background: ${theme.colors.black300};
  border-radius: 24px;
`;
