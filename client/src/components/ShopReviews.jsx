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
      lastPage: null
    }
  }

  componentDidMount() {
    this.getReviews();
  }
  
  getReviews() {
    axios.get(`${window.location.pathname}reviews`)
      .then(response => {
        let reviews = response.data;
        let count = reviews.length;
        let avgRating = reviews.reduce((acc, val) => {
          return acc + val.rating;
        }, 0) / count;
        let shopId = reviews[0].shop_id;
        let lastPage;

        count % 5 === 0 
        ? lastPage = count / 5 
        : lastPage = Math.ceil(count / 5);

        this.setState({
          reviews: reviews, 
          avgRating: Math.round(avgRating), 
          shopId: shopId,
          lastPage: lastPage
        });
      })
      .catch(err => console.log(err));
  }

  handleBackArrow() {
    this.state.page === 1 
    ? null 
    : this.setState(prevState => {
      return {page: prevState.page - 1};
    });
  }

  handleForwardArrow() {
    this.state.page === this.state.lastPage 
    ? null 
    : this.setState(prevState => {
      return {page: prevState.page + 1};
    });
  }

  render() {
    let reviews = this.state.reviews;
    let page = this.state.page;
    let reviewIdxs = [0 + ((page - 1) * 5), 5 + ((page - 1) * 5)];
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
            style={page === 1 ? {color: "#D3D3D3"} : {color: "black"}}
            onClick={() => this.handleBackArrow()}
          />
            {page}
          <Icon 
            className="fas fa fa-caret-right" 
            style={page === this.state.lastPage ? {color: "#D3D3D3"} : {color: "black"}}
            onClick={() => this.handleForwardArrow()}
          />
        </div>
        {toRender.map(review => <ReviewEntry data={review} key={review.id}/>)}
        <div>
          <Page>Page</Page>
          <Icon 
            className="fas fa-caret-left"
            style={page === 1 ? {color: "#D3D3D3"} : {color: "black"}}
            onClick={() => this.handleBackArrow()}
          />
            {page}
          <Icon 
            className="fas fa fa-caret-right" 
            style={page === this.state.lastPage ? {color: "#D3D3D3"} : {color: "black"}}
            onClick={() => this.handleForwardArrow()}
          />
        </div>
        <SubmitReview 
          getReviews={this.getReviews.bind(this)} 
          shopId={this.state.shopId}
        />
      </Wrapper>
    )
  }
}

export default ShopReviews;
