import React from "react";
import axios from "axios";

class SubmitReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputName: "",
      inputReview: ""
    }
  }

  createDate() {
    let d = new Date();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let year = d.getFullYear();

    return `${month}/${day}/${year}`;
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
      <form>
        Name: <input 
                type="text" 
                name="name" 
                onChange={e => this.setState({inputName: e.target.value})}
              ></input><br/>
        Review:<br/>
        <textarea 
          rows="5" 
          cols="70"
          onChange={e => this.setState({inputReview: e.target.value})}
        ></textarea>
        <button>Submit Review!</button>
      </form>
    )
  }
}

export default SubmitReview;
