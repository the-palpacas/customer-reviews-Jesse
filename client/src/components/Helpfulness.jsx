import React from "react";

class Helpfulness extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null
    }
  }

  render() {
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
            onClick={
              this.state.selected === "upvote" 
              ? () => this.setState({selected: null}) 
              : () => this.setState({selected: "upvote"})
            }
          />
        </div>
        <div>{this.props.helpfulness}</div>
        <div>
          <i 
            className="fas fa-arrow-down"
            style={
              this.state.selected === "downvote" 
              ? {color: "orange"} 
              : {color: "black"}
            }
            onClick={
              this.state.selected === "downvote" 
              ? () => this.setState({selected: null}) 
              : () => this.setState({selected: "downvote"})
            }
          />
        </div>
      </div>
    )
  }
}

export default Helpfulness;
