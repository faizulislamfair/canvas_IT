import { Box, IconButton, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import SectionTitleTwo from './../../../components/SectionTitle/SectionTitleTwo';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const OurWorks = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={{ my: 5, mb: 10 }}>

            {/* Heading Section */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center'
            }}>
                <SectionTitleTwo title="Displaying some of" colored="our works" sx={{
                    textAlign: 'left',
                }} />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 2
                }}>
                    <Tabs value={value} onChange={handleChange} centered sx={{
                        '& .MuiTabs-indicator': {
                            display: 'none'
                        },
                        '& .Mui-selected': {
                            color: 'primary.green',
                            fontWeight: 'bold'
                        },
                        '& .MuiButtonBase-root': {
                            textTransform: 'capitalize'
                        },
                        '& .css-drrf1x-MuiButtonBase-root-MuiTab-root.Mui-selected': {
                            color: 'primary.green'
                        }
                    }}>
                        <Tab label="All" />
                        <Tab label="Web Design" />
                        <Tab label="Mobile App" />
                    </Tabs>
                    <Box>
                        <IconButton sx={{
                            border: `1px solid #959EAD`,
                            mr: 2
                        }}
                            onClick={() => setValue(value - 1)}
                            disabled={value === 0}
                        >
                            <ArrowBackIcon></ArrowBackIcon>
                        </IconButton>
                        <IconButton sx={{
                            border: `1px solid #959EAD`
                        }}
                            onClick={() => setValue(value + 1)}
                            disabled={value === 2}
                        >
                            <ArrowBackIcon sx={{
                                transform: 'rotate(180deg)'
                            }}></ArrowBackIcon>
                        </IconButton>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default OurWorks;