import React from "react";
import ReviewUser from "./ReviewUser.jsx";
import ReviewBody from "./ReviewBody.jsx";

const ReviewEntry = (props) => {
  return (
    <div>
      <ReviewUser 
        username={props.data.username} 
        img={"https://s3-us-west-1.amazonaws.com/front-end-capstone-images/default.png"} 
      />
      <ReviewBody 
        rating={props.data.rating}
        date={props.data.date_submitted}
        review={props.data.review}
        img={props.data.img_url}
        productName={props.data.product}
      />
    </div>
  )
}

export default ReviewEntry;
