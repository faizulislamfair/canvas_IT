import { Box, IconButton, Tab, Tabs, Grid } from '@mui/material';
import React, { useState } from 'react';
import SectionTitleTwo from './../../../components/SectionTitle/SectionTitleTwo';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CanvasCard from './../../../components/CanvasCard/CanvasCard';
import { cardData } from './CardData';


const OurWorks = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={{ my: 5, mb: 10 }}>

            {/* Header Section */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center',
                mb: 5
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
                            border: theme => `1px solid ${value === 0 ? '#959EAD' : theme.palette.primary.main}`,
                            mr: 2,
                            color: 'primary.main'
                        }}
                            onClick={() => setValue(value - 1)}
                            disabled={value === 0}
                        >
                            <ArrowBackIcon></ArrowBackIcon>
                        </IconButton>
                        <IconButton sx={{
                            border: theme => `1px solid ${value === 2 ? '#959EAD' : theme.palette.primary.main}`,
                            color: 'primary.main'
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

            {/* Cards Section */}

            <Grid container spacing={3} justifyContent='center'>
                {
                    cardData[value].map(image => (
                        <Grid item>
                            <CanvasCard image={image}></CanvasCard>
                        </Grid>
                    ))
                }
            </Grid>


        </Box>
    );
};

export default OurWorks;