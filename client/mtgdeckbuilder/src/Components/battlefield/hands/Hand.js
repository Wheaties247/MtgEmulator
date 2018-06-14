import React, { Component } from "react";
import CardInHand from "./cardInHand/CardInHand";

class Hand extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.cardRender = this.cardRender.bind(this);
	}
	cardRender(multiverseIds){
		console.log(multiverseIds);
		return multiverseIds.map(cardId=>{
			return(
				<CardInHand 
				playCard={this.props.playCard}
				key={cardId.id} 
				cardId= {cardId}/>
				)
		})


	}
	componentDidMount(){
		this.setState({
			user:this.props.currUser
		})
	}


	render(){

		
		return(
			<div className="hand">
				<h1>'s' Hand</h1>
				{this.cardRender(this.props.multiverseIds)}
			</div>
			)
	}
}

export default Hand;
