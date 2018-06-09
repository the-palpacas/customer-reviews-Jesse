import React from "react";

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
    <div>
      <div><span>{props.rating} stars</span> <span>{formatted}</span></div>
      <div>{props.review}</div>
      <a href={`/${props.productId}/`}><img src={props.img}/>{props.productName}</a>
    </div>
  )
}

export default ReviewBody;
