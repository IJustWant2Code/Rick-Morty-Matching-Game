import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Home.scss';

export default class startPage extends Component {
  render() {
    return (
      <div className="homePage">
        <Link to='/cardGame' className="homePage__title">
            <h1>START GAME</h1>
        </Link> 
      </div>
    )
  }
}
