import React, { Component } from 'react'
import characters from './data';
import Card from './Card';
import './Cards.scss';
export default class CardContainer extends Component {
    constructor(){
        super();
        this.state={
            characters:[]
        }
    }
    componentDidMount(){
        let shuffleArr=this.props.shuffle(characters)
        this.setState({
            characters:shuffleArr
        })
       
    }
    cardFlipper=(id)=>{

        //we need to update an array:
        //1>Copy Card array in State;
        //go throuhg the array ,find the one we want and flip its is Clicked value to true or w
        let newArr=this.state.characters;
        let foundInd=newArr.findIndex((element)=>{ return id===element.id });
        console.log(foundInd, newArr);
        newArr[foundInd].isClicked=true;
        this.setState({
            characters:newArr
        })
        let filteredArray = this.clickCounter(this.state.characters)
        let [element1, element2] = filteredArray; 
       
        setTimeout(()=>{
            if (filteredArray.length === 2 ){
                const characters = [...newArr];
                // let finalArr=[];
                if (element1.name === element2.name){
                    characters.forEach((obj)=>{
                        if(obj.name===element1.name){
                            obj.foundPair=true
                        }
                    });
                    this.setState({
                        characters:characters
                    })
                    // return finalArr;
                }else{
    
                    characters.forEach(obj=>{
                        if(obj.id===element1.id || obj.id===element2.id){
                            obj.isClicked=false;
                            console.log("Yo Mandy")
                        }
                    })
                    this.setState({
                        characters:characters
                    })
                }
            }
        },2000)
    
        }
    clickCounter=(arr)=>{
        let newArr = arr.filter((element)=>{ 
            return element.isClicked === true && element.foundPair === false
        })
        return newArr;
    }



  render() {      
      
 
    return (
      <div >
        <h1>Rick and Morty Matching Game</h1>
        <div className='card-container'>
            {this.state.characters.map((char,i)=>{ return <Card key={i} character={char} cardFlipper={this.cardFlipper} /> })}
        </div>
      </div>
    )
  }
}

// cardFlipper={this.cardFlipper}
