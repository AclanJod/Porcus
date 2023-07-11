const express = require("express");
require("dotenv").config();
const cors = require('cors')
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require("./routes/users_routes");
app.use("/routes/users",router)

app.get("/", (req, res) => {
    res.json({ message: "hello" });
});

app.listen(process.env.PORT, () => {
    console.log(`app is running on PORT ${process.env.PORT}`);
});