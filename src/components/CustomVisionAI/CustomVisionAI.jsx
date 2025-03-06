// Imports
import React, { useState } from "react";
import styles from "./CustomVisionAI.module.css";
import axios from "axios";

function CustomVisionAI() {
      // Variables
      const [imageFile, setImageFile] = useState(null);
      const [prediction, setPrediction] = useState();

      const handleFileChange = (e) => {
            setImageFile(e.target.files[0]);
      };

      //API
      const handleUpload = async () => {
            if (!imageFile) return alert("Please select an image");

            const formData = new FormData();
            formData.append("image", imageFile);

            try {
                  const response = await axios.post(
                        "https://customvisionaitest-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/f67e91ef-c2d1-4b73-ac22-fe483453c222/classify/iterations/Iteration3Deploy/image",
                        formData,
                        {
                              headers: {
                                    "Content-Type": "multipart/form-data",
                                    "Prediction-Key":
                                          "DCp0OF82FMXY4xVHMWGDEmmMnth0UfewPGdJAvjs9upQ0wWcy8z8JQQJ99BCACL93NaXJ3w3AAAIACOG7W6e",
                              },
                        }
                  );

                  setPrediction(response.data.predictions);
            } catch (error) {
                  console.error("Crystal ball says error:", error);
            }
      };

      return (
            <div className={styles.container}>
                  <div className={styles.fileUploadContainer}>
                        <label>
                              <h1>Upload Image</h1>
                              <input
                                    type="file"
                                    name="myImage"
                                    accept="image/png, image/gif, image/jpeg, image/jfif"
                                    onChange={handleFileChange}
                              />
                        </label>
                        <button onClick={handleUpload}>Analyze</button>

                        {prediction && (
                              <div className={styles.predictionResults}>
                                    <h3>Result:</h3>
                                    <p>
                                          {prediction[0].tagName}: {Math.round(prediction[0].probability * 100)}%
                                    </p>
                              </div>
                        )}
                  </div>
            </div>
      );
}

export default CustomVisionAI;
