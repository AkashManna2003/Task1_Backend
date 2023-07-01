const express = require("express");
const app=express();
const router = express.Router();

const {Formf,Findf,Find} = require("../middleware/shop");

router.post("/form", Formf);// route:/api/form
router.get("/findf", Findf);// route:/api/findf
router.get("/find", Find);// route:/api/find
module.exports=router;