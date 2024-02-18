import Userclass from "./Userclass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("parent component did called");
  }

  render() {
    console.log("parent render called");
    return (
      <div>
        <h1>This is About Us</h1>
        <Userclass name="First" />
        <Userclass name="Second" />
        <Userclass name="Third" />
      </div>
    );
  }
}

export default About;

/*
  Constructor called
  parent render called
    Firstchild constructor called
    Firstchild render called
    Secondchild constructor called
    Secondchild render called
    Thirdchild constructor called
    Thirdchild render called
    Firstchild component did called
    Secondchild component did called
    Thirdchild component did called
parent component did called
*/
