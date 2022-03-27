import { React, useRef, useEffect} from "react";
import "./capture.css";
import { useTheme } from "../../Context/theme-context.js";

function Capture() {
	const videoRef = useRef(null);
	const photoRef = useRef(null);
	const { theme } = useTheme();

	const getVideo = () => {
		navigator.mediaDevices
			.getUserMedia({
				video: true,
			})
			.then((stream) => {
				const video = videoRef.current;
				video.srcObject = stream;
				video.play();
			})
			.catch((err) => {
				console.error(err);
			});
	};
	const takePicture = () => {
		const width = 400;
		const height = width / (16 / 9);

		const video = videoRef.current;

		const photo = photoRef.current;

		photo.width = width;

		photo.height = height;

		const ctx = photo.getContext("2d");

		ctx.drawImage(video, 0, 0, width, height);
		
	};

	const clearImage = () => {
		const photo = photoRef.current;

		const ctx = photo.getContext("2d");

		ctx.clearRect(0, 0, photo.width, photo.height);
	};

	useEffect(() => {
		getVideo();
	}, [videoRef]);

	return (
		<div className="capture-container mx-auto mb-8 w-4/5 md:w-2/6 p-4 rounded cursor-pointer">
			<video ref={videoRef} className="container"></video>
			<button
				onClick={takePicture}
				className="capture-btn px-4 py-2 mx-auto md:mx-0 ml-4"
				style={{
					backgroundColor: `${theme.mode.secondaryColor}`,
					color: `${theme.mode.bgColor}`,
				}}
			>
				Capture
			</button>
			
			<canvas className="container" ref={photoRef}></canvas>
			<button
				onClick={clearImage}
				className="capture-btn px-4 py-2 md:mx-0 mr-16"
				style={{
					backgroundColor: `${theme.mode.secondaryColor}`,
					color: `${theme.mode.bgColor}`,
				}}
			>
				Close
			</button>
			
		</div>
	);
}

export { Capture };
