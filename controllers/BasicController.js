const axios = require("axios").default;

module.exports = {
  index: function (req, res) {
    res.send("Hello World!");
  },
  getMaxMinTemperature: async function (req, res) {
    console.log("getMaxMinTemperature");
    const location_name = req.params.location_name;
    console.log("location name:", location_name);
    const options = {
      method: "GET",
      url: `https://forecast9.p.rapidapi.com/rapidapi/forecast/${location_name}/summary/`,
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.RAPID_API_HOST,
      },
    };
    try {
      const { data } = await axios.request(options);
      console.log("Received data from API:", data);

      const { max: maxTemp, min: minTemp } = data.forecast.items[0].temperature;
      let res_json = {
        location: location_name,
        max_temp: maxTemp,
        min_temp: minTemp,
      };
      return res.json(res_json);
    } catch (err) {
      console.log(err);
      const resp_message =
        err.response?.data?.message ||
        "Something went wrong while fetching data.";
      return res.json({
        location: resp_message,
        max_temp: "N/A",
        min_temp: "N/A",
      });
    }
  }, // end of getMaxMinTemperature
};
