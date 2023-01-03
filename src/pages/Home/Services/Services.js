import { Box, Grid } from '@mui/material';
import React from 'react';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import Service from './../../../components/Service/Service';


const services = [
    {
        image: 'https://i.ibb.co/r0gHkvM/color-palette-1.png',
        title: 'Graphics Design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        image: 'https://i.ibb.co/CvQwzKC/coding-1.png',
        title: 'Web Development',
        description: 'Our designers and developers build fantastic websites to take your online presence to the next level'
    },
    {
        image: 'https://i.ibb.co/HNhykGp/iphone-1.png',
        title: 'App Development',
        description: 'We craft fascinating cross-platform apps using well drafted UI/UX to match your product.'
    }
];



const Services = () => {
    return (
        <Box>
            <SectionTitle title="We Provide" colored="Amazing Services"></SectionTitle>

            <Grid sx={{ mt: 4 }} container spacing={2}>
                {
                    services.map((service, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <Service service={service}></Service>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default Services;