import React from "react";
import { FaStar,FaRegStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";


const TestimonialItem = ({id,imgLink,role,ratings,name,feedback}) => {
  return (
    <>
            <div className=" mt-5 text-gray-500 bg-white p-7 rounded-md" key={id}>
        <div className="info flex items-center">
            <img src={imgLink} className="max-w-20 w-20 me-5 align-middle rounded-full" alt="user-image" />
            <div className="text-box">
                <h3 className="text-2xl capitalize font-bold text-black">{name}</h3>
                <span className="capitalize text-gray-500">{role}</span>
            </div>
        </div>
        <p>{feedback}</p>
        <div className="flex items-center mt-4 text-xl text-[hsl(36,88%,66%)]">
            {ratings.map(rating => 
               <div key={rating.id}>
                { rating.rating == "star"? <FaStar />:rating.rating =="halfstar"? <FaStarHalfStroke/>:<FaRegStar/>  }
               </div> 
                )}

        </div>
    </div>
    </>
  )
};

export default TestimonialItem;
