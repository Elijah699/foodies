import React from 'react';
import circle from '../constants/images/Ellipse 4.png';
import line from '../constants/images/line.png';

const Features = () => {
  return (
    <div className="container">
      <h4>Our Features</h4>

      <div className="flex-row">
        <div>
          <div>
            <img src={circle} alt="circle" />
            <img src={line} alt="line" />
          </div>
          <h6>Best Food Service</h6>
          <p>
            We serve you the best meal, we have the responsibities caring for
            your health which is why making healthy is our priority. We serve
            you the best meal, we have.
          </p>
        </div>
        <div>
          <div>
            <img src={circle} alt="circle" />
            <img src={line} alt="line" />
          </div>
          <h6>Fastest Delivery Services</h6>
          <p>
            We serve you the best meal, we have the responsibities caring for
            your health which is why making healthy is our priority. We serve
            you the best meal, we have.
          </p>
        </div>
        <div>
          <div>
            <img src={circle} alt="circle" />
            <img src={line} alt="line" />
          </div>
          <h6>Eat-In. Takeaway, Home Delivery</h6>
          <p>
            We serve you the best meal, we have the responsibities caring for
            your health which is why making healthy is our priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
