const express = require("express");
const { exec } = require("child_process");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: process.env.FE_BASE_URL, optionsSuccessStatus: 200 }));

app.post("/get-code", (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("No code provided");
  }

  const outputDir = "output";
  const outputFilePath = path.join(outputDir, "output.ino");

  // Ensure the output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  // Write the provided code to a file
  fs.writeFileSync(outputFilePath, code, (err) => {
    if (err) {
      console.error(`Error writing to file: ${err.message}`);
      return res.status(500).send("Error writing to file");
    }
  });

  // Compile the Arduino code
  const command = `arduino-cli compile ${outputFilePath} -b arduino:avr:uno --output-dir ${outputDir}`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return res.status(500).send("Error executing command");
    }

    console.log("Command output:", stdout);
    console.error("Command errors:", stderr);

    const hexFilePath = path.join(outputDir, "output.ino.hex");

    // Check if the hex file was created
    if (!fs.existsSync(hexFilePath)) {
      return res.status(500).send("Compilation failed");
    }

    // Send the compiled hex file
    res.setHeader("Content-Type", "application/octet-stream");
    const fileStream = fs.createReadStream(hexFilePath);
    fileStream.pipe(res);
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
