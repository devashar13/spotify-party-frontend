import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './app.css';
import Home from './Home/Home';
import CreateRoom from './Room/CreateRoom';
import RoomJoin from './Room/RoomJoin';

function App() {
  return (
    <Router>
      <div className="app">
          <Switch>
              <Route exact path="/"  component={Home}/>
              <Route exact path="/join" component={RoomJoin}/>
              <Route exact path="/create" component={CreateRoom}/>
      
          </Switch>    
      </div>
    </Router>
  );
}

export default App;
