const express = require("express");
const app = express();


app.use('/static', express.static('video'))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8000, function () {
    console.log("Listening on port 8000!");
});
