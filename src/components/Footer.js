import React from 'react';
import styled from 'styled-components';
import { Flex } from './Flex';
import circle from '../constants/images/Ellipse 4.png';

const Footer = () => {
  return (
    <FooterContainer>
      <Flex>
        <div>
          <h6>Social Media</h6>
          <Flex>
            <a href="/" aria-label="Just a test link">
              <img src={circle} alt="circle" />
            </a>
            <a href="/" aria-label="Just a test link">
              <img src={circle} alt="circle" />
            </a>
            <a href="/" aria-label="Just a test link">
              <img src={circle} alt="circle" />
            </a>
            <a href="/" aria-label="Just a test link">
              <img src={circle} alt="circle" />
            </a>
          </Flex>
        </div>
        <div>
          <h6>Quick links</h6>

          <ul>
            <li>About Us</li>
            <li>Privacy Policies</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div>
          <h6>Get App</h6>

          <ul>
            <li>Download Andriod</li>
            <li>Download IOS</li>
          </ul>
        </div>
      </Flex>

      <div className="rights">
        <small>(c) foodies eatery 2022</small>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  .rights {
    text-align: center;
  }
`;
