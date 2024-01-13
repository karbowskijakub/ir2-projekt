import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="w-full xl:w-full bg-tetnary rounded my-10">
      <div className="p-4 flex flex-col xl:flex-row">
        <div className="flex justify-center content-center xl:justify-normal">
          <img src={data.image} alt="" />
        </div>
        <div className="flex flex-col ml-8 mt-5 xl:mt-0 xl:w-full">
          <div>
            <h1 className="text-white text-4xl font-bold">{data.title}</h1>
            <p className="mt-10 text-white">{data.text}</p>
          </div>
          <div className="w-full h-full relative">
            <Link to={`/methods/more-info/${data.id}`}>
              <button className="xl:absolute w-full xl:w-1/4 bottom-0 right-0 btn-secondary mt-5">
                Przeczytaj więcej
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
