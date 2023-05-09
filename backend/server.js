const express = require("express");
const path = require("path");
const fileReaderAsync = require("./fileReader");
const filePath = path.join(`${__dirname}/pkgs.json`);
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 9001;

app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/index.html`));
});

app.get("/example", async (req, res) => {
  const fileData = await fileReaderAsync(filePath);

  console.log(fileData.toString());
	res.send(fileData.toString())
});

app.listen(port, () => console.log(`http://127.0.0.1:${port}`));
