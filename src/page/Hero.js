import React from 'react';
import basilRice from '../constants/images/rice-with-basil-minced-pork 2.png';
import feedWell from '../constants/images/feed-well.svg';
import firstAvatar from '../constants/images/first-avatar.svg';
import secondAvatar from '../constants/images/second-avatar.svg';
import thirdAvatar from '../constants/images/third-avatar.svg';
import line from '../constants/images/line.png';

const Hero = () => {
  return (
    <div className="flex-row">
      <div>
        <h2>Authentic Food Dishes</h2>
        <p>
          We delivered healthy food, we focus mainly on giving you a completely
          different taste of rice, the best taste you will never forget
        </p>

        <button>Place Order</button>

        <div className="flex-row">
          <div>
            <img src={firstAvatar} alt="" />
            <img src={secondAvatar} alt="" />
            <img src={thirdAvatar} alt="" />
          </div>
          <img src={line} alt="" />
          <div>
            <p>Happy Customers</p>
            <p>3.5k</p>
          </div>
        </div>
      </div>
      <div>
        <img src={basilRice} alt="rice-with-basil-minced-pork" />
        <img src={feedWell} alt="feed-well" />
      </div>
    </div>
  );
};

export default Hero;
