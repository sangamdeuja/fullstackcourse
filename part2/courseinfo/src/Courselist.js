import React from "react";
//import App from "./App";
import Header from "./Header";
//import Content from "./Content";
import Part from "./Part";
import Total from "./Total";

const Courselist = ({ course }) => {
    console.log(course)
  return (
    <div>
      <Header name={course.name} />
      <Part parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Courselist;
