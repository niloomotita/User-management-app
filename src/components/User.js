import React from "react";
import "../styles/User.css";
function User(props) {
  return (
    <div className="user-container">
      <div className="user-wrapper">
        <h2 className="title">Registered Users</h2>
        <ul className="user-list">
          {props.users.map((user, i) => {
            return (
              <div key={i} className="items">
                <li className="user-name">
                  {user.firstName} {user.lastName}
                </li>
                <span className="delete" onClick={() => props.removeUser(user)}>
                  X
                </span>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default User;
