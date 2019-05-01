import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../styles/Home.scss';

export default class startPage extends Component {
  render() {
    return (
      <div className="homePage">
        <Link to='/cardGame' className="homePage__title">
            <h1 className="mainTitle" >Rick and Morty Matching Game</h1>
            <h2>START GAME</h2>
        </Link> 
        <embed src="./media/Rick_and_Morty_Theme_Song.mp3" width="0" height="0" loop="true" autostart="true" hidden="true"/>
      </div>
    )
  }
}
