# Turners Car Insurance AI Vision Prototype

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Prerequisites](#prerequisites)
- [Step-by-step Installation](#step-by-step-installation)
- [Backend Repository](#backend-repository)
- [How it Works](#how-it-works)

## Overview

This project is part of the Turners Car Auctions' vision to integrate AI-powered vehicle recognition into their system. The goal is to enhance the user experience by allowing users to upload images of cars, and the AI will automatically identify the vehicle type. This project leverages Microsoft Azure’s Custom Vision AI to recognize various vehicle types.

## Features

- **AI Vision Model**: Trains on uploaded car images to classify vehicle types.
- **User Interface**: A React.js-based frontend that allows users to upload car images and display the AI's predictions for vehicle types.
- **Backend Integration**: Integrates with Azure Custom Vision for processing and vehicle type identification.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js ( To handle API calls to Azure)
- **Libraries**: MUI
- **Cloud Services**: Microsoft Azure Custom Vision
- **Other**: HTML, CSS (via React), JavaScript, GitHub

## Installation

### Prerequisites:

1. Node.js installed (preferably the latest stable version)
2. Azure account with access to Custom Vision AI
3. Access to the repository where the code is hosted

### Step-by-step Installation:

1. Clone front-end repository:
      ```
      https://github.com/DeanJB/Mission1FrontEnd.git
      ```
2. Navigate to the project directory:
      ```
      cd Mission1FrontEnd
      ```
3. Run the application:
      ```
      npm run dev
      ```

#### Backend Repository:

1. Clone the backend repository (if applicable):

```
  git clone https://github.com/DeanJB/Mission1Backend.git

```

2. Navigate to the backend project directory:

```
 cd Mission1Backend
```

3. Install the required dependencies:

```
npm install async axios dotenv express multer


```

        4. Set up the environment variables for Azure Custom Vision:
    - Create a `.env` file in the root of the project and add the following keys:
      ```

(Add your own URL + KEY from your Custom Vision AI Model using Azure)
CUSTOM_VISION_URL=< URL >
CUSTOM_VISION_KEY=< KEY >

```
Then npm run dev

## How it Works

1. **User Uploads an Image**: The user uploads an image of a car via the React.js interface.
2. **AI Prediction**: The backend sends the image to the Azure Custom Vision service for processing.
3. **Result Display**: The result (vehicle type) is returned and displayed on the front end for the user.
```
