import React from "react";
import ReviewUser from "./ReviewUser.jsx";
import ReviewBody from "./ReviewBody.jsx";
import Helpfulness from "./Helpfulness.jsx";

const ReviewEntry = (props) => {
  return (
    <div>
      <ReviewUser 
        username={props.data.username} 
        img={props.data.user_img} 
      />
      <ReviewBody 
        rating={props.data.rating}
        date={props.data.date_submitted}
        review={props.data.review}
        img={props.data.product_img}
        productName={props.data.product}
        productId={props.data.product_img.slice(68, props.data.product_img.indexOf(".jpg"))}
      />
      <Helpfulness />
    </div>
  )
}

export default ReviewEntry;
