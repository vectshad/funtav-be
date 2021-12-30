const express = require("express");

const PORT = 3000;
const app = express();

app.get("/" , (req, res, next) => {
    res.send("Hello");
})

app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
})