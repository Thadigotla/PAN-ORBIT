import React, { Component } from 'react';
import { Route, Router } from 'react-router';
import './App.css';
import  AllUsers  from './Components/allUsers/allUsers';
 
import  SpecificUser  from './Components/SpecificUser/specificUser';
 
class App extends Component {
 

  render () {
     
    return (
 

      <div className="App">
      {/* <h>PanOrbit</h> */}
           <switch>
      <Route exact path="/" component={AllUsers}></Route>

      <Route exact path="/user/:id" component={SpecificUser}></Route>
      </switch>
     
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
