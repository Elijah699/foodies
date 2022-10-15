import React from 'react';
import styled from 'styled-components';
import { theme } from '../config';
import dot from '../constants/images/Ellipse 15.png';

export const Header = () => {
  return (
    <HeaderContainer>
      <h3>
        Foodies <img src={dot} alt="dot" />
      </h3>

      <ul>
        <li>Reviews</li>
        <li>Contact</li>
        <li>About</li>
        <li>Download Now</li>
      </ul>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  margin: 0 ${theme.margin.xlg};
  padding: 0 ${theme.padding.md};
  align-items: center;

  h3 {
    font-family: ${theme.fonts[2]};
    font-size: ${theme.fontSizes.brandName};
    font-weight: ${theme.lineHeights.brandName};
    color: ${theme.colors.blackTwo};
    cursor: pointer;

    img {
      position: relative;
      bottom: 1.1rem;
      right: 1rem;
    }
  }

  ul {
    margin-left: auto;
    display: flex;
    align-items: center;
    list-style: none;
    font-family: ${theme.fonts[1]};
  }

  li {
    margin: 0 ${theme.margin.md};
    cursor: pointer;

    &:last-child {
      border: 1px solid ${theme.colors.red};
      color: ${theme.colors.red};
      border-radius: 13px;
      padding: 13px 12px;
    }
  }
`;
