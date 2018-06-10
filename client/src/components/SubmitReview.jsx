import React from "react";
import axios from "axios";
import styled from "styled-components";
import StarRating from "react-star-rating-component";

const Form = styled.form`
  margin: 5px 0px;
  display: flex;
  flex-direction: column;
`;

const Rating = styled(StarRating)`
  vertical-align: middle;
  margin: 5px 0px;
  font-size: 16px;
`;

const InputName = styled.input`
  margin: 5px 0px;
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 14px;
`;

const TextAreaReview = styled.textarea`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 14px;
  height: 100px;
  width: 400px;
`;

const Button = styled.button`
  width: 100px;
  background: #F56400;
  color: white;
  border-radius: 3px;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
  }
`;

class SubmitReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputName: "",
      inputReview: "",
      rating: 1
    }
  }

  createDate() {
    let d = new Date();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let year = d.getFullYear();

    month < 10 ? month = "0" + month : null;

    return `${month}/${day}/${year}`;
  }

  onStarClick(nextValue) {
    this.setState({rating: nextValue});
  }

  postReview(name, review, rating) {
    let date = this.createDate();

    axios.post(`${window.location.pathname}reviews`, {
      username: name,
      dateSubmitted: date,
      rating: rating,
      review: review,
      shopId: this.props.shopId
    })
      .then(() => {
        this.props.getReviews();
      })
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div>
        <h4>Leave a Review</h4>
        <Form>
          <div>
            <Rating 
              name="rating"
              starCount={5}
              value={this.state.rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div>
            <InputName
              type="text"
              name="name"
              placeholder="Name"
              onChange={e => this.setState({inputName: e.target.value})}
            />
          </div>
          <div>
            <TextAreaReview 
              placeholder="Your review here..."
              onChange={e => this.setState({inputReview: e.target.value})}
            />
          </div>
          <Button 
            onClick={e => {
              e.preventDefault();
              this.postReview(this.state.inputName, this.state.inputReview, this.state.rating);
            }}
          >Submit Review!</Button>
        </Form>
      </div>
    )
  }
}

export default SubmitReview;
