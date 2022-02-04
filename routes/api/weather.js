const express = require("express");
const router = express.Router();
const axios = require("axios");

// @route    GET api/weather
// @desc     Test route
// @access   Public
router.get("/", (req, res) => res.send("Weather route"));

// @route    GET api/weather/city
// @desc     Get City by name
// @access   Public
router.get("/city/:cityname", async (req, res) => {
  try {
    const uri = encodeURI(
      `https://openweathermap.org/data/2.5/find?q=${req.params.cityname}&type=like&sort=population&cnt=30&appid=439d4b804bc8187953eb36d2a8c26a02`
    );

    const cityResponse = await axios.get(uri);
    return res.json(cityResponse.data);
  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: "Server Error" });
  }
});

module.exports = router;
