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
    const hourlyList = [];
    const dailyList = [];
    const weatherResponse = await axios.get(uri);
    const data = weatherResponse.data;

    let weather = new Object();
    weather.current = new Object();

    weather.current.dt = data.current.dt;

    // need await?
    // const hourlyList = data.hourly.map((hourlyObj) => ({
    //  dt: hourlyObj.dt, sunrise: hourlyObj.sunrise, sunset: hourlyObj.sunset,
    //  temp: hourlyObj.temp, feels_like: hourlyObj.feels_like, 
    //  humidity: hourlyObj.humidity, weather: hourlyObj.weather
    //}));
    data.hourly.map((hourlyObj) => {
      let hourly = new Object();
      // To do : try a best code for that!

      hourly.dt = hourlyObj.dt;
      hourly.sunrise = hourlyObj.sunrise;
      hourly.sunset = hourlyObj.sunset;
      hourly.temp = hourlyObj.temp;
      hourly.feels_like = hourlyObj.feels_like;
      hourly.humidity = hourlyObj.humidity;
      hourly.weather = hourlyObj.weather;

      hourlyList.push(hourly);
    });

    weather.hourly = hourlyList;

    // need await?
    // const dailyList = data.hourly.map((dailyObj) => ({
    //  dt: dailyObj.dt, sunrise: dailyObj.sunrise, sunset: dailyObj.sunset,
    //  temp: dailyObj.temp, feels_like: dailyObj.feels_like, 
    //  humidity: dailyObj.humidity, weather: dailyObj.weather
    //}));    
    data.daily.map((dailyObj) => {
      let daily = new Object();

      daily.dt = dailyObj.dt;
      daily.sunrise = dailyObj.sunrise;
      daily.sunset = dailyObj.sunset;
      daily.temp = dailyObj.temp;
      daily.feels_like = dailyObj.feels_like;
      daily.humidity = dailyObj.humidity;
      daily.weather = dailyObj.weather;

      dailyList.push(daily);
    });

    weather.daily = dailyList;

    return res.json(weather);
  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: "Server Error" });
  }
});

module.exports = router;
