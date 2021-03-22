const express = require("express");
const cors = require("cors");
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors(), express.urlencoded({ extended: true }), express.json());

require("./routes/myRoutes.routes")(app);

app.use(express.static(path.join(__dirname, '..', 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/client/build/index.html'))
});

const server = app.listen(PORT, () => console.log(`The server is all fired up on port ${PORT}`));