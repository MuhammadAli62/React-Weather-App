import React from "react";
import { Box, Typography, Divider, Stack, Chip, styled } from "@mui/material"
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import TireRepairIcon from '@mui/icons-material/TireRepair';
const TodayWeather = ({ data }) => {

    const StyledBox = styled(Box)({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    })

    let date = new Date(data.dt  * 1000)
       
    return (
        <Stack direction="column" maxWidth={{ xs: "100%", sm: "100%" }} >
             <Typography variant="h6" component="p">CURRENT WEATHER</Typography>
            <Stack direction={{xs:"column", sm:"row"}} justifyContent="space-between" alignItems="center">
                <Box sx={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "start", flexDirection: "column"
                }}>
                    <Typography variant="subtitle1" component="p">{date.toDateString()}</Typography>
                    <Typography variant="h3" component="h4" sx={{display:"inline" }}>{data.name}&nbsp;<Typography variant="subtitle1" component="p" sx={{display:"inline" }}>{data.sys.country}</Typography></Typography>
                </Box>
                <img src={`icons/${data.weather[0].icon}.png`} alt={data.weather[0].icon} />
            </Stack>
            <Stack direction={{xs:"column"}} alignItems="center">
                <Box component="div">
                    <Typography variant="h2" component="h3">{Math.round(data.main.temp)}°C</Typography>
                    <Typography variant="subtitle1" component="p" textAlign="center">{data.weather[0].main}</Typography>
                    <Typography variant="h6" component="p" textAlign="center">AIR CONDITIONS</Typography>
                </Box>
                <Divider orientation="vertical" flexItem sx={{margin:"0 10px"}}/>
                <Stack gap={0.2} width="100%">
                    <StyledBox>
                        <Chip icon={<DeviceThermostatIcon />} label="Feels Like" />
                        <Typography variant="subtitle2" component="p">{Math.round(data.main.feels_like)}°C</Typography>
                    </StyledBox>
                    <Divider />
                    <StyledBox>
                        <Chip icon={<AirIcon />} label="Wind" />
                        <Typography variant="subtitle2" component="p">{data.wind.speed} m/s</Typography>
                    </StyledBox>
                    <Divider />
                    <StyledBox>
                        <Chip icon={<WaterDropIcon />} label="Humidity" />
                        <Typography variant="subtitle2" component="p">{data.main.humidity}%</Typography>
                    </StyledBox>
                    <Divider />
                    <StyledBox>
                        <Chip icon={<TireRepairIcon />} label="Pressure" />
                        <Typography variant="subtitle2" component="p">{data.main.pressure} hpa</Typography>
                    </StyledBox>
                    <Divider />
                    <StyledBox>
                        <Chip icon={<FilterDramaIcon />} label="Clouds" />
                        <Typography variant="subtitle2" component="p">{data.clouds.all} %</Typography>
                    </StyledBox>
                    <Divider />
                </Stack>
            </Stack>
        </Stack >
    )
}


export default TodayWeather