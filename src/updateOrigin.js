import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";

class UpdateOrigin extends PureComponent {
	state = {
		tmpOrigin: ""
	};
	handleChange = e => {
		const tmpOrigin = e.target.value;
		this.setState({ tmpOrigin: tmpOrigin });
	};

	_handleKeyPress = event => {
		if (event.key === "Enter") {
			this.submitChange();
		}
	};
	submit = () => {
		const origin = this.state.tmpOrigin;
		this.props.updateOrigin(origin);
	};
	submitCurrentLocation = () => {
		const success = result => {
			const origin = {
				latitude: result.coords.latitude,
				longitude: result.coords.longitude
			};
			this.props.updateOrigin(origin);
		};
		navigator.geolocation.getCurrentPosition(success);
	};
	render() {
		return (
			<div>
				Origin:
				<input
					type="text"
					onChange={this.handleChange}
					onKeyPress={this._handleKeyPress}
				/>
				<input type="submit" onClick={this.submit} value="submit" />
				<input
					type="submit"
					onClick={this.submitCurrentLocation}
					value="Use Current Location"
				/>

			</div>
		);
	}
}

export default connect(
	storeState => ({
		origin: storeState.origin
	}),
	{
		updateOrigin: actions.updateOrigin
	}
)(UpdateOrigin);
