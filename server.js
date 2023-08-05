const express = require("express")
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler")
const connectDB = require("./config/db");
const cors = require("cors")
const app = express();
const port =process.env.PORT || 5000;
//use for parse the data
connectDB()
app.use(cors());
app.use(express.json());
app.use("/api/contact",require("./routes/contactRoutes"));
app.use(errorHandler);
app.listen(port,()=>[
    console.log(`Server is running on ${port}`)
])