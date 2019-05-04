import React, { Component } from 'react';
import './App.css';
import startPage from './components/startPage';
import CardContainer from './components/CardContainer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {

  

  render() {

    
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component= { startPage }/>
            <Route path="/cardGame" render= {(props)=>{return <CardContainer shuffle={this.shuffle} />}} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
