import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const ServicesCard = ({
  cardTitleFront,
  cardTitleBack,
  cardText,
  cardAnimationDirection,
  backgroundImageUrl,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div
        data-aos="zoom-in"
        className={`relative cursor-pointer  flex justify-center items-center w-full md:w-[48%] ${
          cardAnimationDirection == "vertical" ? " flip flip-vertical" : "flip"
        }`}
      >
        <div
          className="front bg-blend-lighten bg-cover bg-position"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          <h1
            className="text-shadow text-sm rounded-t-xl p-3 md:text-xl uppercase  text-white "
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0))",
            }}
          >
            {cardTitleFront}
          </h1>
        </div>
        <div className="back flex flex-col justify-between items-center">
          <div>
            <h2 className="text-sm md:text-xl  uppercase mb-[2px] lg:mb-2">
              {cardTitleBack}
            </h2>
            <p className="text-sm md:md text-justify p-1 lg:p-3">{cardText}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
