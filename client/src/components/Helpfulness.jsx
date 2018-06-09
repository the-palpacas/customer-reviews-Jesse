import React from "react";
import axios from "axios";

class Helpfulness extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
      votes: this.props.votes,
      helpfulness: this.props.helpfulness
    }
  }

  handleVote(id, votes, helpfulness, selected) {
    axios.put(`${window.location.pathname}reviews`, {
      id: id,
      votes: votes,
      helpfulness: helpfulness
    })
      .then(() => this.setState({
        selected: selected,
        votes: votes,
        helpfulness: helpfulness
      }))
      .catch(err => console.log(err));
  }

  render() {
    let selected = this.state.selected;
    let handleUpvoteClick;
    let handleDownvoteClick;

    if (selected === "upvote") {
      handleUpvoteClick = () => this.handleVote(this.props.reviewId, this.state.votes - 1, this.state.helpfulness - 1, null)
      handleDownvoteClick = () => this.handleVote(this.props.reviewId, this.state.votes, this.state.helpfulness - 2, "downvote")
    } else if (selected === "downvote") {
      handleUpvoteClick = () => this.handleVote(this.props.reviewId, this.state.votes, this.state.helpfulness + 2, "upvote")
      handleDownvoteClick = () => this.handleVote(this.props.reviewId, this.state.votes - 1, this.state.helpfulness + 1, null)
    } else {
      handleUpvoteClick = () => this.handleVote(this.props.reviewId, this.state.votes + 1, this.state.helpfulness + 1, "upvote")
      handleDownvoteClick = () => this.handleVote(this.props.reviewId, this.state.votes + 1, this.state.helpfulness - 1, "downvote")
    }

    return (
      <div>
        <div>
          <i 
            className="fas fa-arrow-up" 
            style={
              this.state.selected === "upvote" 
              ? {color: "orange"} 
              : {color: "black"}
            }
            onClick={handleUpvoteClick}
          />
        </div>
        <div>{this.state.helpfulness}</div>
        <div>
          <i 
            className="fas fa-arrow-down"
            style={
              this.state.selected === "downvote" 
              ? {color: "orange"} 
              : {color: "black"}
            }
            onClick={handleDownvoteClick}
          />
        </div>
      </div>
    )
  }
}

export default Helpfulness;
