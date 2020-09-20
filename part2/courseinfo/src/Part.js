import React from "react";
import Content from "./Content";

const Part = ({ parts }) => {
  console.log(parts);
  return (
    <>
      {parts.map((eachPart) => (
        <Content key={eachPart.id} eachPart={eachPart} />
      ))}
    </>
  );
};

export default Part;
