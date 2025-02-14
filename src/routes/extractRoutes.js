const express = require("express");
const { extractData } = require("../controllers/extractController");

const router = express.Router();
router.post("/extract", extractData);

module.exports = router;
