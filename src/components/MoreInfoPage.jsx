import React from "react";
import { useParams } from "react-router-dom";
import data from "../assets/data/data";

const MoreInfoPage = () => {
  const { id } = useParams();
  const selectedData = data.find((item) => item.id.toString() === id);

  if (!selectedData) {
    return (
      <div>
        <h1>Data Not Found</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-screen mt-10 flex justify-center">
      <div className=" bg-tetnary w-1/2 h-full  rounded  flex justify-start flex-col p-10">
        <div className="my-10">
          <h1 className="text-white uppercase text-center text-5xl ">
            {selectedData.title}
          </h1>
        </div>
        <div className="text-white text-3xl text-justify">
          <p>{selectedData.bigger_text}</p>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoPage;
