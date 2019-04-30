import React, { Component } from 'react';
import './App.css';
import startPage from './startPage';
import CardContainer from './CardContainer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

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
