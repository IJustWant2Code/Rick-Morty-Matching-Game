import React, { Component } from 'react'
import './Cards.scss'
export default class Card extends Component {
    
    
    render() {
    const {id,name, image,isClicked}=this.props.character;
    
    var style={

        backgroundImage: isClicked ? `url(${this.props.character.img})` : 'none'
     
    };
    console.log(style);
    
    return (
      <div className='card' style={style} onClick={(e)=>{ 
        console.log(e)
          return this.props.cardFlipper(id)}}   >
        {/* <img src={this.props.character.img} alt='cards' /> */}
      </div>
    )
  }
}
