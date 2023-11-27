import React from "react";
import Card from "./Card";
import data from "../assets/data/data";

const MethodsGNR = () => {
  return (
    <div className="p-10">
      {data.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
};

export default MethodsGNR;
