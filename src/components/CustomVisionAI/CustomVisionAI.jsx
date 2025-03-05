import React, { useState } from "react";
import styles from "./CustomVisionAI.module.css";
import axios from "axios";

function CustomVisionAI() {
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
