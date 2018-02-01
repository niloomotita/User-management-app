import React, { Component } from "react";
import "../styles/Numbers.css";
import { connect } from "react-redux";

class Numbers extends Component {
  render() {
    return (
      <div className="num-app">
        <div className="wrapper">
          <button onClick={this.props.addOne}>Add One</button>
          <button onClick={this.props.subOne}>Subtrack One</button>
          <h1>The total is: {this.props.total}</h1>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    total: state.total
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addOne: () => dispatch({ type: "ADD_ONE" }),
    subOne: () => dispatch({ type: "SUB_ONE" })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)( Numbers);
