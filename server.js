const express = require("express");
const route = require('./routes/index');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route)

app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
})