import React from "react";
import "../Stylesheets/features.css";

function Features() {
	return (
		<div>
			<h1 className="heading">
				<span>Features</span>
			</h1>
			<section className="icons-container">
				<div className="icons">
					<i className="fa-solid fa-face-laugh-wink icons_for-bookhub"></i>
					<div className="feature-content">
						<h3 className="port-shipping">Emotion based</h3>
						<p className="facility_for-port">emotion based music player</p>
					</div>
				</div>

				<div className="icons">
					<i className="fa-solid fa-universal-access icons_for-bookhub"></i>
					<div className="feature-content">
						<h3 className="port-shipping">Accessibility</h3>
						<p className="facility_for-port">easy user interaction</p>
					</div>
				</div>

				<div className="icons">
					<i className="fa-solid fa-camera icons_for-bookhub"></i>
					<div className="feature-content">
						<h3 className="port-shipping">Mood capture</h3>
						<p className="facility_for-port">captures mood</p>
					</div>
				</div>

				<div className="icons">
					<i className="fa-solid fa-laptop icons_for-bookhub"></i>
					<div className="feature-content">
						<h3 className="port-shipping">Web Application</h3>
						<p className="facility_for-port">web based app</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export { Features };
