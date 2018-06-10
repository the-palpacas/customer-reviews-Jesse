import React from "react";
import StarRating from "react-star-rating-component";
import styled from "styled-components";

const ReviewBody = (props) => {
  let months = {
    "01": "Jan", 
    "02": "Feb", 
    "03": "Mar", 
    "04": "Apr",
    "05": "May", 
    "06": "Jun", 
    "07": "Jul", 
    "08": "Aug",
    "09": "Sept", 
    "10": "Oct", 
    "11": "Nov", 
    "12": "Dec"
  };

  let [month, day, year] = props.date.split("/");
  let formatted = `${months[month]} ${day}, ${year}`;  

  const SmallImg = styled.img`
    height: 75px;
    width: 75px;
  `;

  const Wrapper = styled.div`
    float: right;
  `;
  
  return (
    <Wrapper>
      <div><StarRating name="rating" value={props.rating} editing={false} /> <span>{formatted}</span></div>
      <div>{props.review}</div>
      <a href={`/${props.productId}/`}><SmallImg src={props.img}/>{props.productName}</a>
    </Wrapper>
  )
}

export default ReviewBody;
