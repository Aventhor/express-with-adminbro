const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use("/admin", require("./admin/admin"));

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, async () => {
    console.log(`🔥  Server started on PORT: ${PORT}`);
});
