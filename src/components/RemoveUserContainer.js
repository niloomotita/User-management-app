import React from "react";
import { connect } from "react-redux";
import { removeUser } from "../redux/actions";
import User from "./User";

function RemoveUserContainer(props) {
  return (
      <div>
        <User users={props.users} removeUser = {props.removeUser}/>
      </div>
  )
}
const mapStateToProps = state => ({ users: state.users });
  
const mapDispatchToProps = dispatch => {
  return {
    removeUser: user => dispatch(removeUser(user)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(RemoveUserContainer);
