import React from "react";
import axios from "axios";

class SubmitReview extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <form>
        Username: <input type="text" name="username"></input><br/>
        <textarea rows="5" cols="70"></textarea>
        <button>Submit Review!</button>
      </form>
    )
  }
}

export default SubmitReview;
