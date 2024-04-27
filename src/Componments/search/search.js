import React, { useState } from "react";
import axios from "axios";
import { AsyncPaginate } from "react-select-async-paginate";
import { Geo_APi_Url, geo_api_options } from "../../api/api";
import { Stack, Button } from "@mui/material";
import MyLocationIcon from '@mui/icons-material/MyLocation';
const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);


    const loadOptions = async (inputValue) => {
        try {
            const response = await axios.get(
                `${Geo_APi_Url}/cities?&namePrefix=${inputValue}`,
                geo_api_options);
            console.log(response)
            return {
                options: response.data.data.map((city) => ({
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name} ${city.countryCode}`
                }))
            };
        } catch (error) {
            console.log(error);
            return { options: [] }
        }
    };
    const detectLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const searchData = {
                        value: `${latitude} ${longitude}`,
                        label: "Current Location"
                    };
                    setSearch(searchData);
                    onSearchChange(searchData);
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };
    const handleChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    return (
        <Stack direction="column" spacing={2} pb={2}>
            <AsyncPaginate
                placeholder="Search"
                debounceTimeout={500}
                value={search}
                onChange={handleChange}
                loadOptions={loadOptions}
            />
            <Button variant="contained" startIcon={<MyLocationIcon/>}  onClick={detectLocation}>Your Location</Button>
        </Stack>
    );
};

export default Search;
