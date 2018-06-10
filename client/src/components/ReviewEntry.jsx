import React from "react";
import styled from "styled-components";
import ReviewUser from "./ReviewUser.jsx";
import ReviewBody from "./ReviewBody.jsx";
import Helpfulness from "./Helpfulness.jsx";

const Wrapper = styled.div`
  font-size: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
`;

const ReviewEntry = (props) => {
  return (
    <Wrapper>
      <Helpfulness
        reviewId={props.data.id}
        votes={props.data.votes}
        helpfulness={props.data.helpfulness}
      />
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
    </Wrapper>
  )
}

export default ReviewEntry;
