import React, { Component } from "react";
import axios from "axios";

class CardInHand extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			played: false
		};
		this.getCardData = this.getCardData.bind(this);
		this.handlePlayCard = this.handlePlayCard.bind(this);
	}

	getCardData() {
		this.setState({ loading: true });
		const cardInfo = this.props.cardId;
		axios({
			url: `https://api.magicthegathering.io/v1/cards/${cardInfo.cardId}`
		}).then(resp => {
			const cardData = resp.data;
			console.log(cardData);

			this.setState({
				loading: false,
				cardData: cardData
			});
		});
	}
	handlePlayCard() {
		this.props.playCard(this.state.cardData);
		this.setState({ played: true });
	}
	componentDidMount() {
		this.getCardData();
	}

	render() {
		if (!this.state.played) {//if card is not played show card it hand
			return (
				<div
					style={
						this.state.cardData
							? {
									backgroundImage: `url(${
										this.state.cardData.card.imageUrl
									})`
							  }
							: null
					}
					className="playCard"
				>
					{this.state.loading ? (
						"Loading..."
					) : (
						<h1 onClick={this.handlePlayCard}>PlayCard</h1>
					)}
				</div>
			);
		} else return null; //else show null
	}
}

export default CardInHand;
