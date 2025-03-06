// Imports
import React, { useState } from "react";
import styles from "./CustomVisionAI.module.css";
import axios from "axios";

function CustomVisionAI() {
      // Variables & states
      const [imageFile, setImageFile] = useState(null);
      const [prediction, setPrediction] = useState();

      //Handle image file
      const handleFileChange = (e) => {
            setImageFile(e.target.files[0]);
      };

      //API
      const handleUpload = async () => {
            if (!imageFile) return alert("Please select an image");

            console.log("Is image being sent to the backend?!", imageFile);

            const formData = new FormData();
            formData.append("image", imageFile);

            try {
                  // API request to backend
                  const response = await axios.post("http://localhost:4000/", formData, {
                        headers: {
                              "Content-Type": "multipart/form-data",
                        },
                  });

                  console.log("Response from backend??", response.data);

                  setPrediction(response.data.prediction);
            } catch (error) {
                  console.error("Crystal ball says error:", error);
            }
      };

      return (
            // CSS containers
            <div className={styles.wrapped}>
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

                              {prediction && ( // Renders prediction results for user
                                    <div className={styles.predictionResults}>
                                          <h3>Result:</h3>
                                          <p>
                                                {" "}
                                                {/* Only show img with highest probability */}
                                                {prediction[0].tagName}: {Math.round(prediction[0].probability * 100)}%
                                          </p>
                                    </div>
                              )}
                        </div>
                  </div>
            </div>
      );
}

export default CustomVisionAI;
