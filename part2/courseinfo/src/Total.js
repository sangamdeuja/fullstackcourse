import React from "react";

const Total = ({parts}) => {
    const total =parts.reduce((accumulator,exercises)=>accumulator+exercises.exercises,0)
    console.log(total)
  return (
    <p>
      <b>total of {total} exercises</b>
    </p>
  );
};

export default Total