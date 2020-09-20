import React from 'react'

const Content = ({eachPart}) => {
    return (
        <p>{eachPart.name} {eachPart.exercises}</p>
    );
  };
  

export default Content