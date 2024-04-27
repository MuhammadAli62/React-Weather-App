import React from "react";
import { Grid, Typography, Box, styled, Stack } from "@mui/material";
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';




const StyledTypography = styled(Typography)({
  fontSize: { xs: "12px", sm: "13px" },
  fontWeight: { xs: 400, sm: 600 },
  color: "white",
  fontFamily: "Poppins",
  lineHeight: 1,
});

const Styledgrid = styled(Grid)({
  display: "flex",
  flexFlow: "column wrap",
  alignItems: "self-start"
})

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "31px",
  color: "rgba(255, 255, 255, .7)",
  width: "100%",
});

const ForeCast = ({data}) => {

  const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    data.daily.splice(-1)
    
    return (
      <Stack direction="column" spacing={1} > 
        <Typography variant="h6" component="p" textAlign="center">WEEKLY FORECAST</Typography>
      {data.daily.map((item, idx) =>
          <Grid container sx={{background:'linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(171, 203, 222, 0.05) 100%) 0% 0%', boxShadow:' rgb(0 0 0 / 5%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px', borderRadius:1}}>
            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row",p:1 }}>
              <Styledgrid container>
                <Typography variant="body1" component="p" xs={12} fontWeight={600} color="#fff">
                {forecastDays[idx]}
                </Typography>
                <StyledBox component="div" xs={12} justifyContent="flex-start!important">
                  <Box
                    component="img"
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weater-icon"
                    sx={{ width: { xs: "24px", sm: "28px", md: "31px" }, mr:"4px" }}
                  />
                  <Typography variant="body2" component="p" xs={12}>
                  {item.weather[0].description}
                  </Typography>
                </StyledBox>
              </Styledgrid>
              <Styledgrid container>
                <StyledBox component="div" sx={{gap: { xs: "3px", sm: "4px", md: "6px", }}}>
                  <DeviceThermostatIcon />
                  <StyledTypography component="p" variant="subtitle2" xs={12}>
                    {Math.round(item.feels_like.day)}&nbsp;°C
                  </StyledTypography>
                </StyledBox>
                <StyledBox component="div" sx={{gap: { xs: "3px", sm: "4px", md: "6px", }}}>
                  <FilterDramaIcon />
                  <StyledTypography component="p" variant="subtitle2" xs={12}>
                    {item.pressure}&nbsp;%
                  </StyledTypography>
                </StyledBox>
              </Styledgrid>
              <Styledgrid container>
                <StyledBox component="div" sx={{gap: { xs: "3px", sm: "4px", md: "6px", }}}>
                  <AirIcon />
                  <StyledTypography component="p" variant="subtitle2" xs={12}>
                    {item.wind_speed}&nbsp;m/s
                  </StyledTypography>
                </StyledBox>
                <StyledBox component="div" sx={{gap: { xs: "3px", sm: "4px", md: "6px", }}}>
                  <WaterDropIcon />
                  <StyledTypography component="p" variant="subtitle2" xs={12}>
                    {item.humidity}&nbsp;%
                  </StyledTypography>
                </StyledBox>
              </Styledgrid>
            </Grid>
          </Grid>
      )}
  </Stack>)
  
  };

  export default ForeCast;
