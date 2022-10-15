import React from 'react';
import styled from 'styled-components';
import { theme } from '../config';
import { Button } from '../components';
import { FlexBetween } from '../components';
// images
import basilRice from '../constants/images/rice-with-basil-minced-pork 2.png';
import feedWell from '../constants/images/feed-well.svg';
import firstAvatar from '../constants/images/first-avatar.svg';
import secondAvatar from '../constants/images/second-avatar.svg';
import thirdAvatar from '../constants/images/third-avatar.svg';
import line from '../constants/images/line.png';

const Hero = () => {
  return (
    <HeroContainer>
      <FlexBetween>
        <div className="col-one">
          <h2>
            Authentic <br /> Food Dishes
          </h2>
          <p className="text">
            We delivered healthy food, we focus mainly on giving you a
            completely different taste of rice, the best taste you will never
            forget
          </p>

          <div className="button">
            <Button>Place Order</Button>
          </div>

          <div className="avatar-card">
            <div>
              <img src={firstAvatar} alt="avatar" />
              <img src={secondAvatar} alt="avatar" />
              <img src={thirdAvatar} alt="avatar" />
            </div>
            <img src={line} className="line" alt="line" />
            <div>
              <p className="customer">Happy Customers</p>
              <p className="customer-numbers">3.5k</p>
            </div>
          </div>
        </div>
        <div className="col-two">
          <img className="feed-well" src={feedWell} alt="feed-well" />
          <img
            className="basil-rice"
            src={basilRice}
            alt="rice-with-basil-minced-pork"
          />
        </div>
      </FlexBetween>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.section`
  margin: ${theme.margin.md} ${theme.margin.xlg};
  padding: 0 ${theme.padding.md};

  .col-one,
  .col-two {
    width: 40%;
  }

  .col-one {
    h2 {
      font-family: ${theme.fonts[2]};
      font-size: ${theme.fontSizes.bigTextOne};
      font-weight: ${theme.fontWeight.normal};
      line-height: ${theme.lineHeights.bigTextOne};
      margin-block-start: 0;
      margin-block-end: 0;
      color: ${theme.colors.black200};
    }

    .text,
    .button {
      margin: ${theme.margin.xmd} 0;
    }

    .text {
      font-family: ${theme.fonts[1]};
      font-weight: ${theme.fontWeight.normal};
      font-size: ${theme.fontSizes.normalText};
      line-height: ${theme.lineHeights.normalText};
      color: ${theme.colors.gray500};
    }

    .avatar-card {
      display: flex;
      border-radius: 24px;
      background: ${theme.colors.white};
      box-shadow: 0px 16px 46px rgba(102, 102, 102, 0.08);
      width: fit-content;
      padding: ${theme.padding.sm};
      margin-top: ${theme.margin.xlg} !important;

      div {
        margin: 0 4px;
      }

      .customer {
        font-family: ${theme.fonts[1]};
        font-size: ${theme.fontSizes.smallText};
        color: ${theme.colors.gray400};
        font-weight: ${theme.fontWeight.normal};
        line-height: ${theme.lineHeights.smalltext};
        margin-block-start: 0;
        margin-block-end: 0;
      }

      .line {
        height: 50px;
      }

      .customer-numbers {
        font-family: ${theme.fonts[1]};
        font-size: ${theme.fontSizes.mediumText};
        color: ${theme.colors.black};
        font-weight: ${theme.fontWeight.bold};
        line-height: ${theme.lineHeights.mediumText};
        text-align: center;
        margin-block-start: 0;
        margin-block-end: 0;
      }
    }
  }

  .col-two {
    position: relative;

    .basil-rice {
      max-width: 100%;
      border-radius: 24px;
    }

    .feed-well {
      width: 80px;
      position: absolute;
      bottom: 5rem;
      left: -4rem;
    }
  }
`;
