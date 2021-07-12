import React,{useEffect, useState} from 'react';
import Icons from './Icons';
import './App.scss';

const iconsCards = [
  {id: 0,name: "anchor", className:"fas fa-anchor", visibility: false, active: true},
  {id: 1,name: "glasses", className:"fas fa-glasses", visibility: false, active: true},
  {id: 2,name: "radiation", className:"fas fa-radiation-alt", visibility: false, active: true},
  {id: 3,name: "skull", className:"fas fa-skull-crossbones", visibility: false, active: true},
  {id: 4,name: "eye", className:"fas fa-eye", visibility: false, active: true},
  {id: 5,name: "images", className:"fas fa-images", visibility: false, active: true},
  {id: 6,name: "ghost", className:"fas fa-ghost", visibility: false, active: true},
  {id: 7,name: "grin-beam", className:"fas fa-grin-beam", visibility: false, active: true},
  {id: 8,name: "anchor", className:"fas fa-anchor", visibility: false, active: true},
  {id: 9,name: "glasses", className:"fas fa-glasses", visibility: false, active: true},
  {id: 10,name: "radiation", className:"fas fa-radiation-alt", visibility: false, active: true},
  {id: 11,name: "skull", className:"fas fa-skull-crossbones", visibility: false, active: true},
  {id: 12,name: "eye", className:"fas fa-eye", visibility: false, active: true},
  {id: 13,name: "images", className:"fas fa-images", visibility: false, active: true},
  {id: 14,name: "ghost", className:"fas fa-ghost", visibility: false, active: true},
  {id: 15,name: "grin-beam", className:"fas fa-grin-beam", visibility: false, active: true},
]


 const App = ()=>{
   const [currentlySelected, setCurrentlySelected] = useState([]);
   const [cards, setCards] = useState([]);
   const createCard=()=>{
    const cards = iconsCards.sort(()=> Math.random() - 0.5);
    setCards(cards);
  }
  useEffect(()=>{
    createCard()
  },[])


  useEffect(()=>{
    console.log(currentlySelected);
    if(currentlySelected.length<2){
      if(currentlySelected.length ===1){
        console.log(currentlySelected[0][1]);
        // cards[currentlySelected[0][1]].visibility = true;
        console.log("jest równy 1");
      }
    }else if(currentlySelected[0][0].name === currentlySelected[1][0].name){
            // cards[currentlySelected[0][1]].active = false
            // cards[currentlySelected[1][1]].active = false
            // setCurrentlySelected([]);
            // setCards(cards)
            
            console.log("są takie same");
          }else{
            
          }
      console.log("skasuj");
    
    
    // }else if(currentlySelected.length === 2){
    //   cards[currentlySelected[1][1]].visibility = true
    //   setCards(cards)
    //   if(currentlySelected[0][0].name === currentlySelected[1][0].name){
    //     cards[currentlySelected[0][1]].active = false
    //     cards[currentlySelected[1][1]].active = false
    //     setCurrentlySelected([]);
    //     setCards(cards)
        
    //     console.log("są takie same");
    //   }else{
    //     console.log("nie są takie same");

    //     setTimeout(() => {
    //       cards[currentlySelected[0][1]].visibility = false;
    //       cards[currentlySelected[1][1]].visibility = false;
    //       setCards(cards)
    //       setCurrentlySelected([]);
    //   }, 1000);
        
    //   }
      
    // }

    
  },[currentlySelected, cards])
  



  const handleClick=(index)=>{
    setCurrentlySelected([...currentlySelected, cards[index]]);
  }
  
   return(
    <div className="wrapper">
      <div className="memory-game">
        {
        cards.map((card, index) => {
        return <Icons
          key={index}
          index={index}
          active={card.active}
          visibility={card.visibility}
          className={card.className}
          handleClick={handleClick}
          />})
        }
        
      </div>
    </div>
   );
   }

export default App;