import { useState, useEffect, useRef } from "react";
import { LoaderAnimation } from "../../components/LoaderAnimation";
import { useTheme } from "../../Context/theme-context.js";
import * as tf from "@tensorflow/tfjs";
import "./selectImage.css";

function SelectImage() {
  const { theme } = useTheme();
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [results, setResults] = useState([]);
  const op = {
    0: "Angry",
    1: "Disguist",
    2: "Fear",
    3: "Happy",
    4: "Neutral",
    5: "Sad",
    6: "Surprise",
  };

  const imageRef = useRef();
  const textInputRef = useRef();
  const fileInputRef = useRef();

  const loadModel = async () => {
    try {
      const Resmodel = await tf.loadLayersModel("/tfjs/model.json");
      setModel(Resmodel);
    } catch (error) {
      console.log(error);
    }
  };

  const identify = async () => {
    setIsModelLoading(true);
    try {
      textInputRef.current.value = "";
      var img = new Image();
      img.width = 244;
      img.height = 244;
      img.src = imageURL;
      const tensorImg = tf.browser
        .fromPixels(img)
        .resizeNearestNeighbor([244, 244])
        .toFloat()
        .expandDims();
      const Imgresults = await model.predict(tensorImg).data();
      setResults(Imgresults);
      setIsModelLoading(false);
    } catch (error) {
      console.log(error);
      setIsModelLoading(false);
    }
  };

  const uploadImage = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageURL(url);
    } else {
      setImageURL(null);
    }
  };

  const handleOnChange = (e) => {
    setImageURL(e.target.value);
    setResults([]);
  };

  const triggerUpload = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    loadModel();
  }, []);

  return (
    <div className="App">
      <h1 className="header text-3xl text-center mb-4 font-bold">
        Image Prediction
      </h1>
      <div className="inputHolder p-8 flex flex-col gap-4 items-center justify-center md:flex-row">
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
          Upload Image
        </button>
        <span className="or">OR</span>
        <input
          type="text"
          className="rounded px-4 py-2"
          placeholder="Paster image URL"
          ref={textInputRef}
          onChange={handleOnChange}
        />
      </div>
      <div className="mainWrapper">
        <div className="mainContent p-8">
          <div className="imageHolder p-4 border-box text-center">
            <h4 className="p-2 text-2xl underline">Image Preview</h4>
            {imageURL && (
              <img
                src={imageURL}
                alt="Upload Preview"
                crossOrigin="anonymous"
                ref={imageRef}
              />
            )}
            {imageURL && (
              <button
                className="button btn-upload mt-2 mx-auto"
                onClick={identify}
                style={{
                  backgroundColor: `${theme.mode.secondaryColor}`,
                  color: `${theme.mode.bgColor}`,
                }}
              >
                Predict Mood
              </button>
            )}
          </div>
          <div className="resultsHolder p-4 border-box">
            <h4 className="text-center p-2 text-2xl underline">Results</h4>
            {results.length > 0 && (
              <div className=" flex flex-col items-center justify-center mt-4">
                {results.map((result, index) => {
                  return (
                    <div className="result" key={result.className}>
                      <span className="name">{result.className}</span>
                      <span className="confidence">
                        Confidence level:{" "}
                        {(result.probability * 100).toFixed(2)}%{" "}
                        {index === 0 && (
                          <span className="bestGuess">Best Guess</span>
                        )}
                      </span>
                    </div>
                  );
                })}
                <button
                  className="button btn-upload mt-4"
                  onClick={identify}
                  style={{
                    backgroundColor: `${theme.mode.secondaryColor}`,
                    color: `${theme.mode.bgColor}`,
                  }}
                >
                  Listen Songs
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {isModelLoading && <LoaderAnimation />}
    </div>
  );
}

export { SelectImage };
