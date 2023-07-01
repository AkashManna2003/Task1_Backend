require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const business = require("./middleware/business");
const customer = require("./middleware/customer");
const routes=require("./routes/routes");
const cors = require("cors");
const cookiParser = require("cookie-parser")
const port = 8080;

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use("/api/customers",customer);
app.use("/api/business",business);
app.use("/api",routes);
app.listen(port,()=>{
    console.log(`server start at port no : ${port}`);
})