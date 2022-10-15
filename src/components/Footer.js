import React from 'react';
import styled from 'styled-components';
import { theme } from '../config';
import { FlexBetween } from './Flex';
import circle from '../constants/images/Ellipse 4.png';

export const Footer = () => {
  return (
    <FooterContainer>
      <FlexBetween>
        <div>
          <h6>Social Media</h6>
          <div className="social-icons">
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
          </div>
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
      </FlexBetween>

      <div className="rights">
        <small>(c) foodies eatery 2022</small>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  margin: ${theme.margin.xlg} ${theme.margin.xlg} ${theme.margin.md};
  padding: ${theme.padding.xmd} ${theme.padding.md};

  h6 {
    font-size: ${theme.fontSizes.normalText};
    font-weight: ${theme.fontWeight.bolder};
    line-height: ${theme.lineHeights.normalText};
  }

  ul {
    list-style: none;
    padding-inline-start: 0;
    margin-bottom: 0 !important;
  }

  li {
    font-size: ${theme.fontSizes.smallText};
    line-height: ${theme.lineHeights.smalltext};
    color: ${theme.colors.gray200};
    margin-top: ${theme.margin.sm};
  }

  .social-icons {
    display: flex;

    a {
      margin-right: ${theme.margin.sm};

      img {
        width: 30px;
      }
    }
  }

  .rights {
    margin-top: ${theme.margin.lg};
    text-align: center;
    color: ${theme.colors.gray200};
  }
`;
