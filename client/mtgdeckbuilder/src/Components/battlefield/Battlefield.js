import React, { Component } from "react";

import Hand from "./hands/Hand";
import OpponentsHand from "./hands/OpponentsHand";
import InPlay from "./inPlay/InPlay";
import {MY_STATE, USER_CONNECTED, LOGOUT, CARD_SENT, CARD_RECIEVED} from "../../Events.js";






class Battlefield extends Component{
  constructor(props){
    super(props);
    let {...user} = this.props.currUser
    this.state = {
      multiverseIds: [...this.props.multiverseIds],
      user: user,
      playedCards:[]
    };



    this.playCard = this.playCard.bind(this);
    this.onConnect = this.onConnect.bind(this);
    this.logout = this.logout.bind(this);
    this.recieveCard = this.recieveCard.bind(this);
  }


  
  logout(){
    const {socket} = this.state;
    socket.emit(LOGOUT)
    this.setState({user:null})
  }

  playCard(card){
    const {socket} = this.props;
   
    console.log('cardSent', card);
    socket.emit('CARD_SENT', {
        name: card,
        user: this.props.currentUser
    });
    
  }
  onConnect(){
    const {socket} = this.props;
    let mystate = this.state;
    let playerInfo;
    socket.on(USER_CONNECTED,(info)=>{
      
      console.log('recived connection', info);
      playerInfo = info;
      //get initial data back from

    });
    // socket.emit(MY_STATE, mystate);
    // socket.on(MY_STATE, (myState=>{
    //   console.log("mystate test", mystate)
    // }))
    this.setState({playerInfo});
  }
  recieveCard(){
    const {socket} = this.props;
    socket.on(CARD_RECIEVED, (card)=>{
      console.log("CARD RECIEVED from front end", card);
      this.setState(prevState=>{
       return prevState.playedCards.push(card);
      });
    })
  }

  componentDidMount(){
    this.props.initSocket();
    this.onConnect();
    this.recieveCard();
  }
  

  render(){
    // onClick={this.playCard}
    //handSize={}playedCards={}
    let {playedCards, currUser } = this.state,
    handSize = playedCards.length;
    console.log(playedCards.length) 
    return(
      <div className= 'battlefield'>
          <OpponentsHand  handSize={handSize}/>

        <InPlay

        playedCards={playedCards}
        socket={this.socket}
         />
          <Hand 
          currUser={currUser}
          playCard={this.playCard}
          multiverseIds ={this.props.multiverseIds} 
          />

        <div className="hover" onClick={this.logout}>
          <h1>LogOut</h1>
        </div>
      </div>
      )
  
  }
}

export default Battlefield;





  
  