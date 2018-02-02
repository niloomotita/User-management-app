import React from "react";
import { connect } from "react-redux";
import "../styles/User.css";

function User(props) {
  return (
    <div className="user-container">
      <div className="user-wrapper">
        <h2 className="title">Registered Users</h2>
        <ul className="user-list">
          {props.users.map((user, i) => {
            return (
                <div className="items">
                <li key={i} className="user-name" >
                {user.firstName}  {user.lastName}
              </li>
              <span className="delete" onClick={()=>props.removeUser(user)}>X</span>
                </div>
              
            );
          })}
        </ul>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    users: state.users
  };
};
const mapDispatchToProps = dispatch => {
    return {
      removeUser: user => dispatch({ type: "REMOVE_USER", user })
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(User);
