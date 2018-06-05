import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
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
      <div>Hello World</div>
    )
  }
}
