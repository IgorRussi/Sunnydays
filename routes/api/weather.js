const express = require("express");
const router = express.Router();

// @route    GET api/weather
// @desc     Test route
// @access   Public
router.get("/", (req, res) => res.send("Weather route"));

module.exports = router;
