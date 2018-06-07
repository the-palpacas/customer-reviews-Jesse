import React from "react";

const ReviewBody = (props) => {
  return (
    <div>
      <div><span>{props.rating} stars</span> <span>{props.date}</span></div>
      <div>{props.review}</div>
      <a href={`http://localhost:3001/${props.productId}/`}><img src={props.img}/>{props.productName}</a>
    </div>
  )
}

export default ReviewBody;
