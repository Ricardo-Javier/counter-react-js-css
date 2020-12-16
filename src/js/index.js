//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="clock">
				<i className="far fa-clock" />
			</div>
			<div className="four">{props.secondFour % 10}</div>
			<div className="three">{props.secondThree % 10}</div>
			<div className="two">{props.secondTwo % 10}</div>
			<div className="one">{props.secondOne % 10}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	secondOne: PropTypes.number,
	secondTwo: PropTypes.number,
	secondThree: PropTypes.number,
	secondFour: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;
	ReactDOM.render(
		<SimpleCounter
			secondFour={four}
			secondThree={three}
			secondTwo={two}
			secondOne={one}
		/>,
		document.querySelector("#app")
	);
}, 1000);
