import React from 'react';
import styled from 'styled-components';
import { theme } from '../config';
import { Flex } from '../components';
// images
import seafood from '../constants/images/seafood.png';
import woman from '../constants/images/beautiful-woman.png';

const Review = () => {
  return (
    <ReviewContainer>
      <FlexContainer>
        <div className='col-one'>
          <p className='review-header'>Satisfied Customer Review</p>
          <h5>Look what they recommended for you</h5>
          <div className='review-card'>
            <img src={woman} alt="beautiful woman" />
            <p>
              The best, top rated.The best, top rated. The best, top rated. The
              best, top rated. The best, top rated. The best, top rated. The
              best, top rated. The best, top rated. The best, top rated. The
              best, top rated. The best, top rated. The best, top rated. The
              best, top rated. The best, top rated. The best, top rated. The
              best, top rated. The best, top rated. The best, top rated. The
              best, top rated. The best, top rated. The best, top rated. The
              best, top rated. The best, top rated. The best, top rated. The
              best, top rated. The best, top rated. The best, top rated
            </p>
          </div>
        </div>
        <div className='col-two'>
          <img src={seafood} alt="seafood" />
        </div>
      </FlexContainer>
    </ReviewContainer>
  );
};

export default Review;


const ReviewContainer = styled.section`
  margin: ${theme.margin.xxlg} ${theme.margin.xlg};
  padding: ${theme.padding.xmd} ${theme.padding.md};

  .col-one,
  .col-two {
    width: 45%;
  }

  .col-one {
    padding: ${theme.padding.md} 0;

    .review-header {
      font-family: ${theme.fonts[1]};
      font-size: ${theme.fontSizes.smallText};
      line-height: ${theme.lineHeights.smalltext};
      color: ${theme.colors.gray};
    }

    h5 {
      font-family: ${theme.fonts[2]};
      font-size: ${theme.fontSizes.bigTextTwo};
      font-weight: ${theme.fontWeight.normal};
      line-height: ${theme.lineHeights.bigTextTwo};
      color: ${theme.colors.black200};
      margin-block-start: 0;
    }

    .review-card {
      background: ${theme.colors.white200};
      padding: ${theme.padding.lg};
      border-radius: 24px;
      position: relative;

      img {
        border-radius: 50%;
        position: absolute;
        width: 60px;
        top: -2rem;
      }

      p {
        font-family: ${theme.fonts[1]};
        font-size: ${theme.fontSizes.smallText};
        font-weight: ${theme.fontWeight.normal};
        line-height: ${theme.lineHeights.smalltext};
        color: ${theme.colors.gray};
      }
    }
  }

  .col-two {
    img {
      border-radius: 24px;
      max-width: 100%;
    }
  }
`;

const FlexContainer = styled(Flex)`
  justify-content: space-between;
`