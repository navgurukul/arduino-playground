# arduino-playground

# Server Setup Instructions

## Overview

This project sets up a Node.js server that receives Arduino code, compiles it using the Arduino CLI, and sends back the compiled hex file. The server uses Express.js and handles CORS for cross-origin requests.

## Prerequisites

1. Node.js installed on your machine.
2. Arduino CLI installed and set up.

## Setup Instructions

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. **Download Arduino CLI and set the executable path in the environment variable:**
    Follow the installation guide here: [Arduino CLI Installation](https://arduino.github.io/arduino-cli/0.34/installation/)

3. **Install Arduino AVR core:**
    ```bash
    arduino-cli core install arduino:avr
    ```

4. **Install Node.js dependencies:**
    ```bash
    npm install
    ```

5. **Run the application:**
    ```bash
    npm start or node index.js
    ```

6. **Server will run on port 3000:**
    - Open your browser or API client and access the server at `http://localhost:3000`

## API Endpoints

### POST /get-code

- **Description:** Receives Arduino code, compiles it, and returns the compiled hex file.
- **Request Body:**
    ```json
    {
        "code": "<your-arduino-code-here>"
    }
    ```
- **Response:** The compiled hex file.

## Environment Variables

Create a `.env` file in the root directory of your project and add the following:

