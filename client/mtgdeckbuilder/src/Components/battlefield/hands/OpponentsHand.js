import React, { Component } from "react";

class OpponentsHand extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let {handSize} = this.props;
		if(handSize){
			return(
				<div className="hand">
				map handSize
				</div>

				)
		}
		return (
			<div className="hand">
				<h1>Opponent's Hand</h1>
			</div>
		);
	}
}

export default OpponentsHand;
