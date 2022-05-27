import { useState, useEffect, useRef, useCallback } from "react";
import { LoaderAnimation } from "../../components/LoaderAnimation";
import { useTheme } from "../../Context/theme-context.js";
import * as faceapi from "face-api.js";
import "./selectImage.css";
import { useAlert } from "react-alert";
import { useSong } from "../../Context/songDataContext/song-context";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

function SelectImage() {
	const alert = useAlert();
	const { theme } = useTheme();
	const [showCamera, setShowCamera] = useState(false);
	const [isModelLoading, setIsModelLoading] = useState(false);
	const [imageURL, setImageURL] = useState(null);
	const [results, setResults] = useState("");
	const imageRef = useRef();
	const textInputRef = useRef();
	const fileInputRef = useRef();
	const { songCategoryHandler } = useSong();
	const navigate = useNavigate();

	const expressionResult = {
		angry: "Angry 😠",
		disgusted: "Angry 😠",
		fearful: "Surprise 😲",
		happy: "Happy 😀",
		neutral: "Neutral 😑",
		sad: "Sad 😔",
		surprised: "Surprise 😲",
	};

	const pathToSong = {
		angry: "Angry",
		disgusted: "Angry",
		fearful: "Surprise",
		happy: "Happy",
		neutral: "Neutral",
		sad: "Sad",
		surprised: "Surprise",
	};

	//image capture
	const videoConstraints = {
		width: 1280,
		height: 720,
		facingMode: "user",
	};

	const webcamRef = useRef(null);
	const capture = useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot();
		setShowCamera((val) => !val);
		setImageURL(imageSrc);
	}, [webcamRef]);
	// when image is uploaded
	const uploadImage = (e) => {
		const { files } = e.target;
		if (files.length > 0) {
			const url = URL.createObjectURL(files[0]);
			setImageURL(url);
		} else {
			setImageURL(null);
		}
	};

	// when image url is given
	const handleOnChange = (e) => {
		setImageURL(e.target.value);
		setResults([]);
	};

	// when upload button is clicked
	const triggerUpload = () => {
		fileInputRef.current.click();
	};

	// face detection code
	function getKeyByValue(object, value) {
		return Object.keys(object).find((key) => object[key] === value);
	}
	const identifyImage = async () => {
		setIsModelLoading(true);
		try {
			const detections = await faceapi
				.detectAllFaces(imageRef.current, new faceapi.TinyFaceDetectorOptions())
				.withFaceLandmarks()
				.withFaceExpressions();
			const expressionObj = detections[0].expressions;
			const expressionArr = Object.values(expressionObj);
			let maxVal = expressionArr[0];
			expressionArr.forEach((element) => {
				if (element > maxVal) {
					maxVal = element;
				}
			});
			const mood = getKeyByValue(expressionObj, maxVal);
			setResults(mood);
		} catch (err) {
			alert.show("Retry! Image Not Clear", { type: "error" });
			console.log(err);
		} finally {
			setIsModelLoading(false);
		}
	};

	useEffect(() => {
		const loadModels = () => {
			Promise.all([
				faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
				faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
				faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
				faceapi.nets.faceExpressionNet.loadFromUri("/models"),
			])
				.then(console.log("model loaded"))
				.catch((e) => {
					alert.show("Retry! Image Not Clear", { type: "error" });
					console.log(e);
				});
		};

		imageRef.current && loadModels();
	}, [imageURL]);

	return (
		<div className="App">
			<h1 className="header text-3xl text-center mb-4 font-bold">
				Image Prediction
			</h1>
			<div className="inputHolder px-32 py-8 flex flex-col gap-4 items-center justify-around md:flex-row">
				<div className="flex gap-4">
					<input
						type="file"
						accept="image/*"
						capture="camera"
						className="uploadInput"
						onChange={uploadImage}
						ref={fileInputRef}
					/>
					<button
						className="uploadImage  btn-upload"
						onClick={triggerUpload}
						style={{
							backgroundColor: `${theme.mode.secondaryColor}`,
							color: `${theme.mode.bgColor}`,
						}}
					>
						<i className="fas fa-upload"></i>
					</button>
					<button
						className="captureImage btn-upload"
						onClick={() => setShowCamera((val) => !val)}
						style={{
							backgroundColor: `${theme.mode.secondaryColor}`,
							color: `${theme.mode.bgColor}`,
						}}
					>
						<i className="fas fa-camera"></i>
					</button>
				</div>
				<input
					type="text"
					className="rounded px-4 py-2"
					placeholder="Image URL"
					ref={textInputRef}
					onChange={handleOnChange}
				/>
			</div>
			<div className="mainWrapper">
				<div className="mainContent p-8">
					<div className="imageHolder p-4 border-box text-center">
						<h4 className="p-2 text-2xl underline">Preview</h4>
						{imageURL && (
							<img
								src={imageURL}
								className="preview-img"
								alt="Upload Preview"
								crossOrigin="anonymous"
								ref={imageRef}
							/>
						)}
						{imageURL && (
							<button
								className="button btn-upload mt-2 mx-auto"
								onClick={identifyImage}
								style={{
									backgroundColor: `${theme.mode.secondaryColor}`,
									color: `${theme.mode.bgColor}`,
								}}
							>
								Identify Mood 🤔
							</button>
						)}
					</div>
					<div className="resultsHolder p-4 border-box">
						<h4 className="text-center p-2 text-2xl underline">Output</h4>
						{results.length !== 0 && (
							<div className=" flex flex-col items-center justify-center mt-4">
								<span className="text-2xl font-bold my-12">
									{expressionResult[results]}
								</span>
								<button
									className="button btn-upload mt-4"
									onClick={() => {
										songCategoryHandler(pathToSong[results]);
										navigate("/choice/playlist");
									}}
									style={{
										backgroundColor: `${theme.mode.secondaryColor}`,
										color: `${theme.mode.bgColor}`,
									}}
								>
									<i className="fas fa-music"></i> Listen Songs
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
			{showCamera && (
				<div className="webcam-container">
					<div className="webcam-wrapper">
						<Webcam
							audio={false}
							height={500}
							ref={webcamRef}
							screenshotFormat="image/jpeg"
							width={500}
							videoConstraints={videoConstraints}
						/>
						<div className="webcam-btns">
							<button
								className="btn-upload btn-capture"
								onClick={capture}
								style={{
									backgroundColor: `${theme.mode.secondaryColor}`,
									color: `${theme.mode.bgColor}`,
								}}
							>
								<i className="fas fa-camera"></i>
							</button>
							<button
								className="btn-upload btn-close-capture"
								onClick={() => setShowCamera((val) => !val)}
								style={{
									backgroundColor: `${theme.mode.secondaryColor}`,
									color: `${theme.mode.bgColor}`,
								}}
							>
								<i className="fas fa-times"></i>
							</button>
						</div>
					</div>
				</div>
			)}
			{isModelLoading && <LoaderAnimation />}
		</div>
	);
}

export { SelectImage };
