import React from 'react';
import styled from 'styled-components';
import seafood from '../constants/images/seafood.png';
import woman from '../constants/images/beautiful-woman.png';

const Review = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <p>Satisfied Customer Review</p>
          <h5>Look what they recommended for you</h5>
          <div>
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
        <div>
          <img src={seafood} alt="seafood" />
        </div>
      </div>
    </div>
  );
};

export default Review;
