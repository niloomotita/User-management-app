import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "../styles/App.css";
import { connect } from "react-redux";
import Numbers from './Numbers'
import AddUser from './AddUser'
import User from './User'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={() => (
              <div>
                <Header/>
                <User/>
              </div>
            )}
          />
          <Route exact path="/adduser" render={() => (
              <div>
                <Header/>
                <AddUser/>
              </div>
            )}
          />
        
        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
