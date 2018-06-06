import React from "react";
import axios from "axios";

class SubmitReview extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <div><span>Name goes here</span><span>Star rating goes here</span></div>
        <div>Review goes here</div>
      </div>
    )
  }
}

export default SubmitReview;
