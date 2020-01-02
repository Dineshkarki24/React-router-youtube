import React, { Component } from "react";

class AboutPage extends Component {
  handleLogin = () => {
    // this.props.history.push("/service");
    this.props.history.replace("/service");
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>About Page</h1>
        <button onClick={this.handleLogin}>login</button>
      </div>
    );
  }
}

export default AboutPage;
