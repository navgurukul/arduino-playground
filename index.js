const express = require('express');
const {exec} = require('child_process');
const cors = require('cors')
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express();
app.use(bodyParser.json());
app.options("*", cors({ origin: 'http://localhost:3002', optionsSuccessStatus: 200 }));
const fs = require('fs');
const path = require("path");

app.use(cors({ origin: "http://localhost:3002", optionsSuccessStatus: 200 }));

app.post('/get-code', (req, res) => {
  console.log('req = ',req.body.code)
  var writer = fs.createWriteStream('output/output.ino');
  writer.write(req.body.code);
  res.set('Access-Control-Allow-Origin', '*');
  let command = 'arduino-cli compile output/output.ino -b arduino:avr:uno --output-dir ./output'
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return res.status(500).send('Error executing command');
    }

    console.log('Command output:', stdout);
    console.error('Command errors:', stderr);
    const filePath = './output/output.ino.hex'
    const fileStream = fs.createReadStream(filePath);
    res.setHeader('Content-Type', 'application/octet-stream');
    fileStream.pipe(res);

  });
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
