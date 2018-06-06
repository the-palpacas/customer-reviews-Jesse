import React from "react";
import axios from "axios";

class SubmitReview extends React.Component {
  constructor(props) {
    super(props);
  }

  createDate() {
    let d = new Date();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let year = d.getFullYear();

    return `${month}/${day}/${year}`;
  }
  
  render() {
    return (
      <form>
        Name: <input type="text" name="name"></input><br/>
        Review:<br/>
        <textarea rows="5" cols="70"></textarea>
        <button>Submit Review!</button>
      </form>
    )
  }
}

export default SubmitReview;
