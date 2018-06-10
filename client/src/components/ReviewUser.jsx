import React from "react";
import styled from "styled-components";

const ReviewUser = (props) => {
  const RoundedImg = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 25px;
  `;
  
  return (
    <div>
      <RoundedImg src={props.img} />
      <div>Reviewed by {props.username}</div>
    </div>
  )
}

export default ReviewUser;
