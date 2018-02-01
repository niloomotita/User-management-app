import React, { Component } from "react";
import { connect } from "react-redux";
import {Link,withRouter} from 'react-router-dom'
import "../styles/Adduser.css";
class AddUser extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName:"",
            lastName:""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.firstName === "" || this.state.lastName === ""){
            return
        }
        this.props.addUser({
           firstName:this.state.firstName,
           lastName:this.state.lastName 
        })
        this.handleRedirect()
        this.setState({firstName:"",lastName:""})
    }
    handleRedirect = ()=>{
        this.props.history.push("/")
    }
    render(){
        return (
            <form action="submit" onSubmit={this.handleSubmit}>
                <h2>Add users</h2>
                <input 
                    className="input"
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={(e)=> this.setState({firstName:e.target.value})}
                />
                <br/>
                <input 
                    className="input"
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={(e)=> this.setState({lastName:e.target.value})}
                />
                <br/>
                <button type="submit" className="submit"> submit </button>
            </form>
        )
    }
}
const mapStateToProps = state => {
    return {
     users: state.users
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      addUser: (user) => dispatch({ type: "ADD_USER",user }),
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AddUser));