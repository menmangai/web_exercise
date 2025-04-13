import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor: Component is being initialized.");
  }

  componentDidMount() {
    console.log("componentDidMount: Component mounted.");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate: Component updated.");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component is being removed.");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increase</button>
        <button onClick={this.props.unmount}>Unmount Component</button>
      </div>
    );
  }
}

export default LifecycleDemo;

