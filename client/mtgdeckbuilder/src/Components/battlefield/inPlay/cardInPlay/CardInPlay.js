import React, { Component } from "react";

class CardInPlay extends Component{
	constructor(props){
		super(props);
		this.state = {...this.props};
	}
	render(){
		const card = {...this.state.cardData};
		let image = card.imageUrl;
		console.log(image)
		return(
			<div className="cardInPlay" style={{ backgroundImage:`url(${image})` } } >
				
			</div>
			)
	}
}

export default CardInPlay
