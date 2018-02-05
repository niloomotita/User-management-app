import React from "react";
import { connect } from "react-redux";
import { addUser } from "../redux/actions";
import AddUser from "./AddUser";

function AddUserContainer(props) {
  return (
      <div>
        <AddUser users={props.users} addUser = {props.addUser}/>
      </div>
  )
}
const mapStateToProps = state => ({ users: state.users });
  
const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(AddUserContainer);
