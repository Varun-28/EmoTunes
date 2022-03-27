import { React, useRef } from "react";
import Webcam from "react-webcam";
import "./capture.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../Context/theme-context.js";

function Capture() {
	const webRef = useRef();
	const { theme } = useTheme();

	function showImage() {
		console.log(webRef.current);
	}
	return (
		<div className="capture-container mx-auto mb-8 w-4/5 md:w-2/6 p-4 rounded cursor-pointer">
			<Webcam ref={webRef} />
			<button
				onClick={showImage}
				className="hero-btn px-4 py-2 mx-auto md:mx-0 ml-4"
				style={{
					backgroundColor: `${theme.mode.secondaryColor}`,
					color: `${theme.mode.bgColor}`,
				}}
			>
				<Link to="">Show Image on console</Link>
			</button>
			<button
				onClick={showImage}
				className="hero-btn px-4 py-2 md:mx-0 mr-16"
				style={{
					backgroundColor: `${theme.mode.secondaryColor}`,
					color: `${theme.mode.bgColor}`,
				}}
			>
				<Link to="">Capture</Link>
			</button>
		</div>
	);
}

export { Capture };
