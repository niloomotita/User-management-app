import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "../styles/App.css";
import RemoveUserContainer from './RemoveUserContainer'
import AddUserContainer from './AddUserContainer'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={() => (
              <div>
                <Header/>
                <RemoveUserContainer/>
              </div>
            )}
          />
          <Route exact path="/adduser" render={() => (
              <div>
                <Header/>
                <AddUserContainer/>
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
