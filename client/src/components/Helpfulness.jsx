import React from "react";

const Helpfulness = (props) => {
  return (
    <div>
      <div><i className="fas fa-arrow-up" /></div>
      <div>{props.helpfulness}</div>
      <div><i className="fas fa-arrow-down" /></div>
    </div>
  )
}

export default Helpfulness;
