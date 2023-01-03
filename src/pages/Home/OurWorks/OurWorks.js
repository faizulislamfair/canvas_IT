import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import SectionTitleTwo from './../../../components/SectionTitle/SectionTitleTwo';

const OurWorks = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={{ mt: 5 }}>

            {/* Heading Section */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center'
            }}>
                <SectionTitleTwo title="Displaying some of" colored="our works" sx={{
                    textAlign: 'left',
                }} />
                <Box>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </Box>
            </Box>

        </Box>
    );
};

export default OurWorks;