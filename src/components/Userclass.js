import React from "react";
import UserContext from "../utils/Usercontext";

class Userclass extends React.Component {
  constructor(props) {
    super(props);

    //this.state is the big object which contain all state variable
    //declaration of state variable in class component
    this.state = {
      count: 1,
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };

    console.log(this.props.name + "child constructor called");
  }

  async componentDidMount() {
    console.log(this.props.name + "child component did called");

    const data = await fetch("https://api.github.com/users/rahulll18");

    const userInfo = await data.json();

    this.setState({ userInfo: userInfo });
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  render() {
    console.log(this.props.name + "child render called");
    console.log("Component render ");
    const { count } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} style={{ height: 200, width: 200 }} />
        <h1>{name}</h1>
        <h2>Count is : {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>{this.props.type}</h2>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <h3>{location}</h3>
      </div>
    );
  }
}

export default Userclass;
