import React from 'react';
import styled from 'styled-components';
import { theme } from '../config';
import { Flex, Title } from '../components';
// images
import circle from '../constants/images/Ellipse 4.png';
import line from '../constants/images/line.png';

const Features = () => {
  return (
    <FeatureContainer>
      <Title>Our Features</Title>

      <Flex>
        <div className="feature-card">
          <div>
            <img src={circle} alt="circle" />
            <img src={line} className="line" alt="line" />
          </div>
          <h6 className="feature-title">Best Food Service</h6>
          <p>
            We serve you the best meal, we have the responsibities caring for
            your health which is why making healthy is our priority. We serve
            you the best meal, we have.
          </p>
        </div>
        <div className="feature-card">
          <div>
            <img src={circle} alt="circle" />
            <img src={line} className="line" alt="line" />
          </div>
          <h6 className="feature-title">Fastest Delivery Services</h6>
          <p>
            We serve you the best meal, we have the responsibities caring for
            your health which is why making healthy is our priority. We serve
            you the best meal, we have.
          </p>
        </div>
        <div className="feature-card">
          <div>
            <img src={circle} alt="circle" />
            <img src={line} className="line" alt="line" />
          </div>
          <h6 className="feature-title">Eat-In. Takeaway, Home Delivery</h6>
          <p>
            We serve you the best meal, we have the responsibities caring for
            your health which is why making healthy is our priority.
          </p>
        </div>
      </Flex>
    </FeatureContainer>
  );
};

export default Features;

const FeatureContainer = styled.section`
  margin: ${theme.margin.xlg} ${theme.margin.xlg};
  padding: ${theme.padding.xmd} ${theme.padding.md};

  .feature-card {
    margin: 0 ${theme.margin.lg};
    width: 30%;

    .line {
      height: 50px;
      margin-left: 5px;
      width: 5px;
    }

    .feature-title {
      font-family: ${theme.fonts[1]};
      font-size: ${theme.fontSizes.largeText};
      font-weight: ${theme.fontWeight.bold};
      line-height: ${theme.lineHeights.largeText};
      color: ${theme.colors.black300};
      padding: ${theme.padding.sm} 0;
      margin-block-end: 0;
      margin-block-start: 0;
    }
  }
`;
