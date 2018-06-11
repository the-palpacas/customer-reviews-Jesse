import React from "react";
import axios from "axios";
import styled from "styled-components";
import StarRating from "react-star-rating-component";
import ReviewEntry from "./ReviewEntry.jsx";
import SubmitReview from "./SubmitReview.jsx";

const Wrapper = styled.section`
  font-family: 'Helvetica', 'Arial', sans-serif;
`;

const Rating = styled(StarRating)`
  vertical-align: middle;
  margin: 0px 12px;
`;

const Count = styled.span`
  color: #444;
  font-size: 14px;
  font-weight: 200;
`;

const Page = styled.span`
  font-size: 14px;
  color: #444;
  margin-right: 10px;
`;

const Icon = styled.i`
  margin: 0px 5px;
`;

class ShopReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      avgRating: null,
      shopId: null,
      page: 1,
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

  handleBackArrow() {
    this.state.page === 1 
    ? null 
    : this.setState(prevState => {
      return {"page": prevState.page - 1};
    });
  }

  render() {
    let reviews = this.state.reviews;
    let page = this.state.page;
    let reviewIdxs = [(1 * page) - 1, (5 * page)];
    let toRender = reviews.slice(reviewIdxs[0], reviewIdxs[1]);

    return (
      <Wrapper>
        <h4>
          Reviews
          <Rating 
            name="avgRating" 
            value={this.state.avgRating} 
            editing={false}
          /> 
          <Count>({this.state.reviews.length})</Count>
        </h4>
        <div>
          <Page>Page</Page>
          <Icon 
            className="fas fa-caret-left"
            onClick={() => this.handleBackArrow()}
          />
            {page}
          <Icon 
            className="fas fa fa-caret-right" 
          />
        </div>
        {toRender.map(review => <ReviewEntry data={review} key={review.id}/>)}
        <SubmitReview 
          getReviews={this.getReviews.bind(this)} 
          shopId={this.state.shopId}
        />
      </Wrapper>
    )
  }
}

export default ShopReviews;
