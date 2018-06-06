import React from "react";

const ReviewBody = (props) => {
  return (
    <div>
      <div><span>{props.rating} stars</span> <span>{props.date}</span></div>
      <div>{props.review}</div>
      <div><img src={props.img}/>{props.productName}</div>
    </div>
  )
}

export default ReviewBody;
