import React from "react";
import StarRating from "react-star-rating-component";
import styled from "styled-components";

const SmallImg = styled.img`
  height: 75px;
  width: 75px;
  margin: auto 10px auto 0px;
`;

const Wrapper = styled.div`
  width: 415px;
`;

const Date = styled.span`
  color: #444;
  float: right;
`;

const Review = styled.div`
  color: #444;
  margin-top: 10px;
  margin-bottom: 12px;
`;

const ReviewHead = styled.div`
  margin-top: 15px;
`;

const Link = styled.a`
  color: #444;
  font-size: 85%;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  margin-bottom: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const Product = styled.span`
  margin: auto 0px;
`;

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
  
  return (
    <Wrapper>
      <ReviewHead><StarRating name="rating" value={props.rating} editing={false} /> <Date>{formatted}</Date></ReviewHead>
      <Review>{props.review}</Review>
      <Link href={`/${props.productId}/`}><SmallImg src={props.img}/><Product>{props.productName}</Product></Link>
    </Wrapper>
  )
}

export default ReviewBody;
