import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            The best and cheapest dentistry is when the right thing is done
            extremely well the first time and it lasts for a long time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
