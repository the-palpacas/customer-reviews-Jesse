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
        <div><i className="fas fa-arrow-up" /></div>
        <div>{props.helpfulness}</div>
        <div><i className="fas fa-arrow-down" /></div>
      </div>
    )
  }
}

export default Helpfulness;
