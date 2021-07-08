import React,{Component} from 'react';
import Icons from './Icons';
import './App.scss';

const iconsCards = [
  {id: 0,name: "anchor", className:"fas fa-anchor", visibility: true, active: false},
  {id: 1,name: "glasses", className:"fas fa-glasses", visibility: true, active: false},
  {id: 2,name: "radiation", className:"fas fa-radiation-alt", visibility: true, active: false},
  {id: 3,name: "skull", className:"fas fa-skull-crossbones", visibility: true, active: false},
  {id: 4,name: "eye", className:"fas fa-eye", visibility: true, active: false},
  {id: 5,name: "images", className:"fas fa-images", visibility: true, active: false},
  {id: 6,name: "ghost", className:"fas fa-ghost", visibility: true, active: false},
  {id: 7,name: "grin-beam", className:"fas fa-grin-beam", visibility: true, active: false},
]


class App extends Component{
  state={
    cards: [],
    active: false,
  }
  checkCards = [];

  componentDidMount = () =>{
    console.log("componentDidMount");
    let cards = [...iconsCards, ...iconsCards];
    cards.sort(()=>0.5-Math.random())
    this.setState({cards})
  }
  

  checkDoubleCard = (item, index) =>{    
    let cards = this.state.cards;
    let checkCards = this.checkCards;
    let inx0 =null;
    let inx1 = null;
    checkCards.push({...item, index});
    if(checkCards.length ===1){
      inx0 = checkCards[0].index;
      cards[inx0].active = true;

    } else if(checkCards.length === 2){
      inx0 = checkCards[0].index;
      inx1 = checkCards[1].index;
      console.log(inx1);
      this.checkCards = [];

      if(checkCards[0].name === checkCards[1].name){
        cards[inx0].visibility = false;
        cards[inx1].visibility = false;
      }else{
        console.log("nie są takie same");
      }
    }


    return cards
  }

  handleClickCard = id => {
    const {cards} = this.state;   
    this.checkDoubleCard(cards[id], id)
    this.setState({cards})
  }
  
  componentDidUpdate =() =>{
    console.log("componentDidUpdate");
  }


  render(){
    const {cards} = this.state;
     const cardsMap = cards.map((card, index) =>{
      return <Icons 
        key={index} 
        className={card.className} 
        visibility={card.visibility} 
        active={card.active}
        handleClick={this.handleClickCard} 
        index={index} />
    })
    return (
      <div className="wrapper">
        <div className="memory-game">
          {cardsMap}
        </div>
      </div>
    );
  }  
}

export default App;




// checkDoubleCard = (item, index) =>{    
//   let cards = this.state.cards;
//   let checkCards = this.checkCards;
//   checkCards.push({...item, index});
//   if(checkCards.length === 2){
//     let inx0 = checkCards[0].index;
//     let inx1 = checkCards[1].index;
//     this.checkCards = [];

//     if(checkCards[0].name === checkCards[1].name){
//       cards[inx0].visibility = false;
//       cards[inx1].visibility = false;
//     }
//   }
//   return cards
// }