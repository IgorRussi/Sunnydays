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
      }&lon=${req.params.lon}&appid=${config.get(
        "apikey"
      )}&units=metric&exclude=minutely`
    );

    const weatherResponse = await axios.get(uri);
    const data = weatherResponse.data;

    let weather = new Object();

    weather = {
      lat: data.lat,
      lon: data.lon,
      timezone: data.timezone,
      timezone_offset: data.timezone_offset,
    };

    weather.current = {
      dt: new Date(data.current.dt * 1000),
      sunrise: new Date(data.current.sunrise * 1000),
      sunset: new Date(data.current.sunset * 1000),
      temp: data.current.temp,
      feels_like: data.current.feels_like,
      humidity: data.current.humidity,
      weather: data.current.weather,
    };

    weather.hourly = data.hourly.map((hourlyObj) => ({
      dt: hourlyObj.dt,
      sunrise: hourlyObj.sunrise,
      sunset: hourlyObj.sunset,
      temp: hourlyObj.temp,
      feels_like: hourlyObj.feels_like,
      humidity: hourlyObj.humidity,
      weather: hourlyObj.weather,
    }));

    weather.daily = data.hourly.map((dailyObj) => ({
      dt: dailyObj.dt,
      sunrise: dailyObj.sunrise,
      sunset: dailyObj.sunset,
      temp: dailyObj.temp,
      feels_like: dailyObj.feels_like,
      humidity: dailyObj.humidity,
      weather: dailyObj.weather,
    }));

    return res.json(weather);
  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: "Server Error" });
  }
});

module.exports = router;
