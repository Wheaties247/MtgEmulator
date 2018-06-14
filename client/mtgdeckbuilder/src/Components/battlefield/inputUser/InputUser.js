import React, { Component } from "react";
import {Redirect } from "react-router-dom";
import { VERIFY_USER } from "../../../Events.js";

class InputUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formSent: false,
			redirect: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.setUser = this.setUser.bind(this);
	}
	setUser({ user, isUser }) {
		console.log(user, isUser);
		if (isUser) {
			console.log("username Taken");
		} else {
			this.props.setUser(user);
		}
	}
	handleSubmit(ev) {
		ev.preventDefault();
		
		// this.props.setUser(this.state);
		const { socket } = this.props;
		this.setState({ formSent: true,
		redirect: true });
		
			socket.emit(VERIFY_USER, this.state.user, this.setUser);

	}
	handleChange(e) {
		let value = e.target.value;
		console.log(value);
		this.setState({ user: value });
	}
	componentDidMount(){
		this.props.initSocket();
	}

	render() {

		return (
				<form onSubmit={this.handleSubmit}>
					<label>
						Input Username for game
						<input
							type="text"
							name="user"
							onChange={this.handleChange}
						/>
					</label>
					<input type="submit" value="submit" />
					{this.state.redirect ? <Redirect to="/play" /> : null }
				</form>
				
			);
	}
}

export default InputUser;
