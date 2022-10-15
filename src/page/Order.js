import React from 'react';
import styled from 'styled-components';
import { theme } from '../config';
import { Flex, Title } from '../components';
// images
import firstRice from '../constants/images/first-rice.png';
import secondRice from '../constants/images/second-rice.png';
import thirdRice from '../constants/images/third-rice.png';
import plus from '../constants/images/plus.svg';

const Order = () => {
  return (
    <>
      <OrderContainer>
        <Title>Make Your Order</Title>
        <FlexContainer>
          <div className="order-card">
            <img src={firstRice} className="rice-img" alt="white-rice" />
            <h6>White Rice</h6>
            <p>Rice with a touch of delicacies, inviting and satisfying</p>
            <div>
              <span className="price">N1,500</span>
              <span className="plus">
                <img src={plus} alt="plus" />
              </span>
            </div>
          </div>

          <div className="order-card">
            <img src={secondRice} className="rice-img" alt="nigerian-jollof" />
            <h6>Nigerian Jollof Rice</h6>
            <p>Rice with a touch of delicacies, inviting and satisfying</p>
            <div>
              <span className="price">N2,500</span>
              <span className="plus">
                <img src={plus} alt="plus" />
              </span>
            </div>
          </div>

          <div className="order-card">
            <img src={thirdRice} className="rice-img" alt="fried-rice" />
            <h6>Fried Rice</h6>
            <p>Rice with a touch of delicacies, inviting and satisfying</p>
            <div>
              <span className="price">N4,500</span>
              <span className="plus">
                <img src={plus} alt="plus" />
              </span>
            </div>
          </div>
        </FlexContainer>
      </OrderContainer>
    </>
  );
};

export default Order;

const OrderContainer = styled.section`
  margin: ${theme.margin.xmd} ${theme.margin.xlg};
  padding: ${theme.padding.xmd} ${theme.padding.md};

  .order-card {
    border-radius: 24px;
    background: ${theme.colors.gray300};
    padding: ${theme.padding.md};
    align-items: center;
    margin: 0 ${theme.margin.xmd};

    .rice-img {
      border-radius: 12px;
      width: 100%;
    }

    h6 {
      font-family: ${theme.fonts[1]};
      font-size: ${theme.fontSizes.mediumText};
      font-weight: ${theme.fontWeight.bold};
      line-height: ${theme.lineHeights.mediumText};
      color: ${theme.colors.black300};
      margin-block-start: 0;
      margin-block-end: 0;
    }

    p {
      font-family: ${theme.fonts[1]};
      font-size: ${theme.fontSizes.smallText};
      font-weight: ${theme.fontWeight.normal};
      line-height: ${theme.lineHeights.smalltext};
      color: ${theme.colors.gray};
      margin: ${theme.margin.xmd} 0;
    }

    .price {
      font-family: ${theme.fonts[1]};
      font-size: ${theme.fontSizes.featureTitle};
      font-weight: ${theme.fontWeight.bold};
      line-height: ${theme.lineHeights.featureTitle};
      color: ${theme.colors.black400};
    }

    .plus {
      float: right;

      img {
        width: 30px;
      }
    }

    &:hover {
      background: ${theme.colors.white};
      box-shadow: 0px 24px 60px rgba(49, 49, 49, 0.08);
    }
  }
`;

const FlexContainer = styled(Flex)`
  justify-content: space-evenly;
  padding: 0 ${theme.padding.lg};
`;
