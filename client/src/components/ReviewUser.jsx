import React from "react";

const ReviewUser = (props) => {
  return (
    <div>
      <img src={props.img} />
      <div>Reviewed by {props.username}</div>
    </div>
  )
}

export default ReviewUser;
