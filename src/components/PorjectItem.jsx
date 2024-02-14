import React from "react";

const PorjectItem = ({ imgUrl }) => {
  return (
    <>
      <div className={`h-[300px] md:h-[400px] lg:h-[570px]  `}>
        <figure className="w-full h-full overflow-hidden  lg:blur-[3px] duration-300 blur-0 hover:blur-0 cursor-pointer ">
          <img
            src={imgUrl}
            loading="lazy"
            alt="project image"
            title="Project Image"
            className="w-full h-full scale-100  duration-1000 ease-in-out hover:scale-110 brightness-100 hover:brightness-50 lg:brightness-50 lg:hover:brightness-100"
          />
        </figure>
        <span>Hover</span>
      </div>
    </>
  );
};

export default PorjectItem;
