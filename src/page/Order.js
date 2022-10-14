import React from 'react';
import firstRice from '../constants/images/first-rice.png';
import secondRice from '../constants/images/second-rice.png';
import thirdRice from '../constants/images/third-rice.png';
import plus from '../constants/images/plus.svg';
import jollof from '../constants/images/jollof.png';

const Order = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <h4>Make Your Order</h4>
        <div className="flex-row">
          <div>
            <img src={firstRice} alt="white-rice" />
            <h6>White Rice</h6>
            <p>Rice with a touch of delicacies, inviting and satisfying</p>
            <div>
              <span>N1,500</span>
              <span>
                <img src={plus} alt="plus" />
              </span>
            </div>
          </div>
          <div>
            <img src={secondRice} alt="nigerian-jollof" />
            <h6>Nigerian Jollof Rice</h6>
            <p>Rice with a touch of delicacies, inviting and satisfying</p>
            <div>
              <span>N2,500</span>
              <span>
                <img src={plus} alt="plus" />
              </span>
            </div>
          </div>
          <div>
            <img src={thirdRice} alt="fried-rice" />
            <h6>Fried Rice</h6>
            <p>Rice with a touch of delicacies, inviting and satisfying</p>
            <div>
              <span>N4,500</span>
              <span>
                <img src={plus} alt="plus" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Love */}
      <div className="container mx-auto px-3">
        <div className="flex-row">
          <div>
            <h6>People that feeds well loves our recipe</h6>
            <p>
              We delivered healthy food, we focus mainly on giving you a
              completely different taste of rice, the best taste you will never
              forget. We delivered healthy food, we focus mainly on giving you a
              completely different taste of rice, the best taste you will never
              forget.
            </p>
          </div>
          <div>
            <img src={jollof} alt="jollof" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
