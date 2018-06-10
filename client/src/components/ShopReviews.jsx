import React from "react";
import axios from "axios";
import styled from "styled-components";
import StarRating from "react-star-rating-component";
import ReviewEntry from "./ReviewEntry.jsx";
import SubmitReview from "./SubmitReview.jsx";

class ShopReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      avgRating: null,
      shopId: null
    }
  }

  componentDidMount() {
    this.getReviews();
  }
  
  getReviews() {
    axios.get(`${window.location.pathname}reviews`)
      .then(response => {
        let avgRating = response.data.reduce((acc, val) => {
          return acc + val.rating;
        }, 0) / response.data.length;
        let shopId = response.data[0].shop_id;

        this.setState({
          reviews: response.data, 
          avgRating: Math.round(avgRating), 
          shopId: shopId
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const Wrapper = styled.section`
      font-family: 'Helvetica', 'Arial', sans-serif;
    `;

    return (
      <Wrapper>
        <h3>
          Reviews 
          <StarRating 
            name="avgRating" 
            value={this.state.avgRating} 
            editing={false} 
          /> 
          ({this.state.reviews.length})
        </h3>
        {this.state.reviews.map((review, i) => {
          if (i < 5) {
            return (
              <ReviewEntry data={review} key={review.id}/>
            )
          }
        })}
        <SubmitReview 
          getReviews={this.getReviews.bind(this)} 
          shopId={this.state.shopId}
        />
      </Wrapper>
    )
  }
}

export default ShopReviews;
