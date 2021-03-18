const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors(), express.urlencoded({ extended: true }), express.json());

require("./routes/myRoutes.routes")(app);

const server = app.listen(PORT, () => console.log(`The server is all fired up on port ${PORT}`));