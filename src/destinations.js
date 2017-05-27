import React, { PureComponent } from "react";

class Destination extends PureComponent {
	state = {
		tmpOrigin: null,
		origins: []
	};

	getIndex = (index, e) => {
		console.log(index);
		//const origin = event.target.value;
	};
	handleChange = e => {
		const tmpOrigin = e.target.value;
	};

	_handleKeyPress = event => {
		if (event.key === "Enter") {
			this.submitChange();
		}
	};

	render() {
		const inputList = Object.keys(
			this.state.origins
		).map((originId, index) => {
			return (
				<div key={index}>
					oo
				</div>
			);
		});
		return (
			<div>
				<div>
					add Destination:
					{" "}
					<input
						type="text"
						onChange={this.handleChange}
						onKeyPress={this._handleKeyPress}
					/>
				</div> <div>
					Origins:
					{inputList}
				</div>
			</div>
		);
	}
}

export default Destination;
