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
              <li key={i} className="items">
                {user.firstName}  {user.lastName}
              </li>
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
export default connect(mapStateToProps)(User);
