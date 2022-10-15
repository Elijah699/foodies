import React from 'react';
import styled from 'styled-components';
import { theme } from '../config';
import { Flex } from '../components';
// images
import jollof from '../constants/images/jollof.png';

const Recipe = () => {
  return (
    <RecipeContainer>
      <FlexContainer>
        <div className="col">
          <h4>People that feeds well loves our recipe</h4>
          <p>
            We delivered healthy food, we focus mainly on giving you a
            completely different taste of rice, the best taste you will never
            forget. We delivered healthy food, we focus mainly on giving you a
            completely different taste of rice, the best taste you will never
            forget.
          </p>
        </div>
        <div className="col">
          <img src={jollof} alt="jollof" />
        </div>
      </FlexContainer>
    </RecipeContainer>
  );
};

export default Recipe;

const RecipeContainer = styled.section`
  margin: ${theme.margin.xxlg} ${theme.margin.xlg};
  padding: ${theme.padding.xlg} ${theme.padding.md};
  background: linear-gradient(
    180deg,
    #fafafa 0%,
    rgba(249, 248, 248, 0) 79.13%
  );
  border-radius: 32px;

  .col {
    width: 50%;

    h4 {
      font-family: ${theme.fonts[2]};
      font-size: ${theme.fontSizes.bigTextTwo};
      font-weight: ${theme.fontWeight.normal};
      line-height: ${theme.lineHeights.bigTextTwo};
      color: ${theme.colors.black200};
      width: 80%;
    }

    p {
      font-family: ${theme.fonts[1]};
      font-size: ${theme.fontSizes.mediumText};
      font-weight: ${theme.fontWeight.normal};
      line-height: ${theme.lineHeights.mediumText};
      color: ${theme.colors.gray500};
      width: 80%;
    }

    img {
      max-width: 100%;
    }
  }
`;

const FlexContainer = styled(Flex)`
  padding: 0 ${theme.padding.lg};
`;
