import React, { Component } from "react";
import CardInPlay from "./cardInPlay/CardInPlay";


class InPlay extends Component{
	constructor(props){
	super(props);

    this.state = {
    	allCards:{...this.props}
    	};
    	this.cardRender = this.cardRender.bind(this);
	}

	cardRender(cards){
		console.log(cards.playedCards);
		if(cards){
		return cards.playedCards.map((cardNode, index)=>{
			let card = cardNode.name.card;
			console.log(card)
			return(
				<CardInPlay
				key={index}
				 cardData={card} />
				)
		})
		}

	}
	componentDidMount(){
		// this.state.client.on('RECEIVE_MESSAGE', stuff =>{
  //     console.log('RECEIVE_MESSAGE frontEnd', stuff);
  //     this.setState({stuff});
  //   		});
	}
	render(){
		let {allCards} = this.state;
		return(
			<div className="inPlay">
				<h1>inPlay</h1>
				{allCards===[] ? null: this.cardRender(allCards)}
			</div>
			)
	}

}

export default InPlay;