const express = require("express");
const router = express.Router();
const axios = require("axios");
const config = require("config");

// @route    GET api/weather/city
// @desc     Get City by name
// @access   Public
router.get("/city/:cityname", async (req, res) => {
  try {
    const uri = encodeURI(
      `https://openweathermap.org/data/2.5/find?q=${
        req.params.cityname
      }&type=like&sort=population&cnt=30&appid=${config.get("appid")}`
    );
    const cityList = [];
    const cityResponse = await axios.get(uri);
    const data = cityResponse.data;

    data.list.map((cityObj) => {
      let city = new Object();

      city.name = cityObj.name;
      city.coord = cityObj.coord;
      city.country = cityObj.sys.country;

      cityList.push(city);
    });

    return res.json(cityList);
  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: "Server Error" });
  }
});

// @route    GET api/weather
// @desc     Test route
// @access   Public
router.get("/:lat/:lon", async (req, res) => {
  try {
    const uri = encodeURI(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${
        req.params.lat
      }&lon=${req.params.lon}&appid=${config.get("apikey")}&units=metric`
    );

    const weatherResponse = await axios.get(uri);
    const data = weatherResponse.data;

    // data.list.map((cityObj) => {
    //   let city = new Object();

    //   city.name = cityObj.name;
    //   city.coord = cityObj.coord;
    //   city.country = cityObj.sys.country;

    //   cityList.push(city);
    // });

    return res.json(data);
  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: "Server Error" });
  }
});

module.exports = router;
