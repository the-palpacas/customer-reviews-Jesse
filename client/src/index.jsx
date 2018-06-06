import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ReviewEntry from "./components/ReviewEntry.jsx";
import SubmitReview from "./components/SubmitReview.jsx";

class ShopReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    axios.get(`${window.location.pathname}reviews`)
      .then(response => {
        this.setState({reviews: response});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>Reviews (Avg star rating goes here)</h2>
        {this.state.reviews.map(review => {
          return (
            <ReviewEntry />
          )
        })}
        <SubmitReview />
      </div>
    )
  }
}

ReactDOM.render(<ShopReviews />, document.getElementById("shop-reviews"));
