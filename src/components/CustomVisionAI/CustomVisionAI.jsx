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
                        "https://customvisionaitest-prediction.cognitiveservices.azure.com/",
                        formData,
                        {
                              headers: { "Content-Type": "multipart/form-data" },
                        }
                  );

                  setPrediction(response.data.prediction);
            } catch (error) {
                  console.error("Crystal ball says error:", error);
            }
      };

      return (
            <div className={styles.container}>
                  <div>
                        <label>
                              <h1>Upload Image</h1>
                              <input
                                    type="file"
                                    name="myImage"
                                    accept="image/png, image/gif, image/jpeg"
                                    onChange={handleFileChange}
                              />
                        </label>
                        <button onClick={handleUpload}>Analyze</button>

                        {prediction && (
                              <div>
                                    <h3>Result:</h3>
                                    <p>{prediction}</p>
                              </div>
                        )}
                  </div>
            </div>
      );
}

export default CustomVisionAI;
