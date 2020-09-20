import React from "react";
import Courselist from "./Courselist";

const Course = ({ courses }) => {
    console.log(courses)
  return (
    <div>
      <h1>Web development curriculum</h1>
      <>
        {courses.map((eachCourse) => (
          <Courselist key={eachCourse.id} course={eachCourse} />
        ))}
      </>
      
    </div>
  );
};

export default Course;
