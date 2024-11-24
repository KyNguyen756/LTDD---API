const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoute");
const tripRouter = require("./routes/tripRoute");

dotenv.config();
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Ket noi db thanh cong!")
    })
    .catch((err) => {
        console.log(err)
    })

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("common"));

app.use("/userAPI", userRouter);
app.use("/tripAPI", tripRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});