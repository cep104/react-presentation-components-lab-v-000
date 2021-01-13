// Code SimplerComponent Here

import React from "react";
//used deconstruction to put in handleClick. props would of worked too
const SimplerComponent = ({ handleClick }) => {
  return (
    //if props used instead it would be this.props.handleClick
    <div id="words" onClick={handleClick}>
      I am just happy
    </div>
  );
};
export default SimplerComponent;
