// Imports
import React, { useState } from "react";
import styles from "./CustomVisionAI.module.css";
import axios from "axios";

function CustomVisionAI() {
      // Variables
      const [file, setFile] = useState(null);
      const [prediction, setPrediction] = useState();

      const handleFileChange = (e) => {
            setFile(e.target.files[0]);
      };
      return (
            <div className={styles.container}>
                  <div>
                        <label>
                              Upload Image
                              <input type="file" name="myImage" accept="image/png, image/gif, image/jpeg" />
                        </label>
                        <button onClick={uploadImage}>Analyze</button>
                  </div>
            </div>
      );
}

export default CustomVisionAI;
