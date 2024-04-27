import React, { useState } from "react";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import axios from "axios";
import theme from "./theme/theme";
import Search from "./Componments/search/search";
import TodayWeather from "./Componments/todayWeather/todayWeather";
import ForeCast from "./Componments/forecast/forecast";
import bg from "./images/bg.png";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api/api";

function App() {
  const [currentWeather, setcurrentWeather] = useState(null);
  const [currentForecast, setcurrentForecast] = useState(null);

  const onSearchChange = async (searchData) => {

    if (searchData && searchData.value) {
      let [lat, lon] = searchData.value.split(" ");

      try {
        const weatherResponse = await axios.get(
          `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const currentWeatherData = weatherResponse.data;
        setcurrentWeather(currentWeatherData);

        const foreCastResponse = await axios.get(
          `${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric`
        );
        const forecastData = foreCastResponse.data;
        setcurrentForecast(forecastData);
      } catch (error) {
        console.log(error);
      }
    }
  };



  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          padding: { xs: 2, md: 2.5 },
          backgroundImage: `url(${bg})`,
          borderRadius: "10px",
          boxShadow:
            "rgb(200 200 200 / 30%) 0px 1px 2px 0px, rgb(200 200 200 / 15%) 0px 1px 3px 1px",
          maxWidth: "1100px!important",
          margin: "auto",
        }}
      >
        <Grid item xs={12}>
          <Search onSearchChange={onSearchChange} />
        </Grid>
        <Grid item xs={12} md={6} >
          {currentWeather && <TodayWeather data={currentWeather} />}
        </Grid>
       <Grid item xs={12} md={6} pt={{xs:5}}>
          {currentForecast && <ForeCast data={currentForecast} />}
      </Grid>
      </Grid>

    </ThemeProvider>
  );
}

export default App;
